import React from 'react';
import Char from './Char.jsx';
import '../styles/Sample.scss';
import {
  selectRange,
  addLabel,
  removeLabel,
  Tools,
} from '../actions.js';

export default class Sample extends React.Component {

  constructor(props) {
    super(props);
    const state = this.props.store.getState();

    this.state = {
      chars: state.chars,
      labels: state.labels,
    };

    this.selecting = false;
    this.selAnchor = -1;
    this.selFocus = -1;
    this.oldStart = -1;
    this.oldEnd = -1;
    this.tool = state.tool;
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => {
      const state = this.props.store.getState();

      // state only resets when chars change,
      // not when their labels change.
      if (state.chars !== this.state.chars) {
        this.resetState(state);
      }

      if (JSON.stringify(state.tool) !== JSON.stringify(this.state.tool)) {
        this.tool = state.tool;
      }

      // also change it in response to changed selection
      // (so other parts of app can clearSelection)
      const [start, end] = this.getSelStartEnd();
      if (
        (state.selection.start !== start) ||
        (state.selection.end !== end)
      ) {
        this.selAnchor = state.selection.start;
        this.selFocus = state.selection.end;
        this.renderSelection();
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getSelStartEnd = () => {
    let start;
    let end;

    if (this.selAnchor < this.selFocus) {
      start = this.selAnchor;
      end = this.selFocus;
    } else {
      start = this.selFocus;
      end = this.selAnchor;
    }
    return [start, end];
  }

  resetState = (state) => {
    this.setState({
      chars: state.chars,
      labels: state.labels,
    });
    this.selecting = false;
    this.selAnchor = -1;
    this.selFocus = -1;
    this.oldStart = -1;
    this.oldEnd = -1;
  }

  selectRange = () => {
    this.props.store.dispatch(selectRange(this.selAnchor, this.selFocus));
    this.renderSelection();
  }

  // called on mousedown of individual Chars
  startSelecting = (e) => {
    this.selecting = true;
    this.selAnchor = Number(e.target.getAttribute('data-id'));
    this.selFocus = this.selAnchor;
    this.selectRange();
  }

  // called on mousemove of individual Chars
  dragSelection = (e) => {
    if (!this.selecting) return;
    const charIdx = Number(e.target.getAttribute('data-id'));
    if (this.selFocus === charIdx) return;

    this.selFocus = charIdx;
    this.selectRange();
  }

  // called on mouseup
  stopSelecting = () => {
    this.selecting = false;

    switch (this.tool.type) {
      case Tools.HIGHLIGHTER:
        this.labelSelection(this.tool.options.labelKey);
        break;
      case Tools.ERASER:
        this.unlabelSelection(this.tool.options.labelKey);
        break;
      default:
        return;
    }
  }

  clearSelection = () => {
    this.selAnchor = -1;
    this.selFocus = -1;
    this.selectRange();
  }

  renderSelection = () => {
    const [newStart, newEnd] = this.getSelStartEnd();
    const oldStart = this.oldStart;
    const oldEnd = this.oldEnd;

    for (let i = newStart; i < oldStart; i++) {
      if (i > newEnd || i === -1) break;
      this.refs[i].toggleSelectOn();
    }
    for (let i = oldStart; i < newStart; i++) {
      if (i > oldEnd || i === -1) break;
      this.refs[i].toggleSelectOff();
    }
    for (let i = Math.max(oldEnd + 1, newStart); i <= newEnd; i++) {
      this.refs[i].toggleSelectOn();
    }
    for (let i = Math.max(newEnd + 1, oldStart); i <= oldEnd; i++) {
      this.refs[i].toggleSelectOff();
    }

    this.oldStart = newStart;
    this.oldEnd = newEnd;
  }

  labelSelection = (label) => {
    if (this.selAnchor < 0) return;
    const [start, end] = this.getSelStartEnd();
    for (let i = start; i <= end; i++) {
      this.refs[i].toggleLabelOn(label);
    }
    this.props.store.dispatch(addLabel(label, start, end));
    this.clearSelection();
  }

  unlabelSelection = (label) => {
    if (this.selAnchor < 0) return;
    const [start, end] = this.getSelStartEnd();
    for (let i = start; i <= end; i++) {
      this.refs[i].toggleLabelOff(label);
    }
    this.props.store.dispatch(removeLabel(label, start, end));
    this.clearSelection();
  }

  selectWord = (e) => {
    const target = e.target.getAttribute('data-id');
    let first = 0;
    let last = this.state.chars.length - 1;
    for (let i = target; i >= 0; i--) {
      if (
        this.state.chars[i] === ' ' ||
        this.state.chars[i] === '.' ||
        this.state.chars[i] === ','
      ) {
        first = i + 1;
        break;
      }
    }
    for (let i = target; i <= last; i++) {
      if (
        this.state.chars[i] === ' ' ||
        this.state.chars[i] === '.' ||
        this.state.chars[i] === ','
      ) {
        last = i - 1;
        break;
      }
    }
    this.selAnchor = first;
    this.selFocus = last;
    this.selectRange();
    this.stopSelecting();
  }

  render() {
    const chars = this.state.chars;
    const labels = this.state.labels;
    const indices = new Array(this.state.chars.length);
    for (let i = 0; i < indices.length; i++) {
      indices[i] = i;
    }

    return (
      <div
        className="sample-text"
        onMouseLeave={this.stopSelecting}
        onMouseUp={this.stopSelecting}
      >
        {[].map.call(indices, (i) => (
            <Char
              key={i}
              idx={i}
              ref={i}
              c={chars[i]}
              labels={labels[i]}
              dragSelection={this.dragSelection}
              startSelecting={this.startSelecting}
              selectWord={this.selectWord}
            />
        ))}
      </div>
    );
  }
}

Sample.propTypes = {
  store: React.PropTypes.object,
};
