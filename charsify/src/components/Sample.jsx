import React from 'react';
import Char from './Char.jsx';
import './Sample.scss';

export default class Sample extends React.Component {

  selecting = false;
  selStart = -1;
  selEnd = -1;
  selection = [];

  dragSelection = (e) => {
    if (!this.selecting) return;
    const charIdx = Number(e.target.getAttribute('data-id'));
    let changed = false;
    if (this.selStart < 0) {
      this.selStart = charIdx;
    }
    if (this.selEnd !== charIdx) {
      changed = true;
      this.selEnd = charIdx;
    }
    if (changed) {
      this.changeSelection();
    }
  }

  changeSelection = () => {
    const newSelection = [];
    if (this.selStart > this.selEnd) {
      for (let i = this.selEnd; i <= this.selStart; i++) {
        newSelection.push(i);
      }
    } else {
      for (let i = this.selStart; i <= this.selEnd; i++) {
        newSelection.push(i);
      }
    }

    const newStart = newSelection[0];
    const newEnd = newSelection[newSelection.length - 1];
    const oldStart = this.selection[0];
    const oldEnd = this.selection[this.selection.length - 1];

    for (let i = newStart; i < oldStart; i++) {
      if (i > newEnd) break;
      this.refs[i].toggleSelectOn();
    }
    for (let i = oldStart; i < newStart; i++) {
      if (i > oldEnd) break;
      this.refs[i].toggleSelectOff();
    }
    for (let i = Math.max(oldEnd + 1, newStart); i <= newEnd; i++) {
      this.refs[i].toggleSelectOn();
    }
    for (let i = Math.max(newEnd + 1, oldStart); i <= oldEnd; i++) {
      this.refs[i].toggleSelectOff();
    }

    this.selection = newSelection;
  }

  clearSelection = () => {
    this.selStart = -1;
    this.selEnd = -1;
    for (let i = this.selection[0]; i <= this.selection[this.selection.length - 1]; i++) {
      this.refs[i].toggleSelectOff();
    }
    this.selection = [];
  }

  startSelecting = (e) => {
    console.log(this.props.highlighting);
    this.clearSelection();
    const selStart = Number(e.target.getAttribute('data-id'));
    this.selecting = true;
    this.selStart = selStart;
    this.selEnd = selStart;
    this.selection = [selStart];
    this.refs[selStart].toggleSelectOn();
  }

  stopSelecting = () => {
    console.log(this.props.highlighting);
    this.selecting = false;
    if (this.props.highlighting) {
      this.labelSelection(this.props.highlighting);
      this.clearSelection();
      this.props.clearTools();
    }
  }

  labelSelection = (label) => {
    if (this.selStart < 0) return;
    let start = this.selStart;
    let end = this.selEnd;
    if (this.selStart > this.selEnd) {
      start = this.selEnd;
      end = this.selStart;
    }
    for (let i = start; i <= end; i++) {
      this.refs[i].toggleLabelOn(label);
    }
    this.clearSelection();
  }

  unlabelSelection = (label) => {
    if (this.selStart < 0) return;
    let start = this.selStart;
    let end = this.selEnd;
    if (this.selStart > this.selEnd) {
      start = this.selEnd;
      end = this.selStart;
    }
    for (let i = start; i <= end; i++) {
      this.refs[i].toggleLabelOff(label);
    }
    this.clearSelection();
  }

  getClass = () => {
    let className = 'sample-text';
    if (this.props.highlighting) {
      className += ' highlighting';
    }
    if (this.props.erasing) {
      className += ' erasing';
    }
    return className;
  }

  render() {
    console.log('rendering sample');

    return (
      <div
        className={this.getClass()}
        onMouseLeave={this.stopSelecting}
        onMouseUp={this.stopSelecting}
      >
        {[].map.call(this.props.textLabels, (charLabels) => (
            <Char
              key={charLabels[2]}
              idx={charLabels[2]}
              ref={charLabels[2]}
              c={charLabels[0]}
              labels={charLabels[1]}
              dragSelection={this.dragSelection}
              startSelecting={this.startSelecting}
              setLabels={this.props.setLabels}
              activeLabels={this.props.activeLabels}
            />
        ))}
      </div>
    );
  }
}

Sample.propTypes = {
  textLabels: React.PropTypes.array,
  setLabels: React.PropTypes.func,
  activeLabels: React.PropTypes.array,
  doesRangeHaveLabel: React.PropTypes.func,
  highlighting: React.PropTypes.number,
  erasing: React.PropTypes.number,
  clearTools: React.PropTypes.func,
};
