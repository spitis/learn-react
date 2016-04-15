import React from 'react';
import ClassifyPopup from './ClassifyPopup.jsx';
import './Char.scss';

export default class Char extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classifying: false,
      labels: this.props.labels,
      hoverOn: false,
    };
  }

  shouldComponentUpdate() {
    return false;
  }

  setpos = (e) => {
    const mousepos = this.mousepos(e);
    this.x = mousepos[0];
    this.y = mousepos[1];
  }

  mousepos = (e) => [e.clientX, e.clientY];

  range = [0, 0];

  x = 0;
  y = 0;

  showClassifier = (e) => {
    const mousedownPos = this.mousepos(e);
    this.setpos(e);
    document.addEventListener('mousemove', this.setpos);

    setTimeout(() => {
      document.removeEventListener('mousemove', this.setpos);
      if ((mousedownPos[0] !== this.x) || (mousedownPos[1] !== this.y)) {
        return;
      }
      const sel = window.getSelection();
      if (sel) {
        if (sel.toString()) {
          if (sel.anchorNode && sel.focusNode) {
            const anchorId = sel.anchorNode.parentElement.getAttribute('data-id');
            const focusId = sel.focusNode.parentElement.getAttribute('data-id');
            if (anchorId < focusId) {
              this.range = [anchorId, focusId];
            } else {
              this.range = [focusId, anchorId];
            }
            this.setState({ classifying: true });
          }
        }
        return;
      }
      this.range = [0, 0];
      this.setState({ classifying: true });
    }, 100);
  }

  hideClassifier = () => {
    this.setState({ classifying: false });
  }

  hoverOn = () => {
    this.setState({ hoverOn: true });
  }

  hoverOff= () => {
    this.setState({ hoverOn: false });
  }

  toggleLabel = (label) => {
    const labels = this.state.labels || [];
    let newLabels = 0;
    const i = labels.indexOf(label);
    switch (i) {
      case -1:
        newLabels = labels.slice();
        newLabels.push(label);
        this.props.setLabels(this.props.idx, newLabels);
        break;
      default:
        newLabels = labels.slice();
        newLabels.splice(i, 1);
        this.props.setLabels(this.props.idx, newLabels);
    }
    this.setState({
      labels: newLabels,
      hoverOn: false,
    });
  }

  toggleRange = (label, start, stop) => {
    this.props.toggleRange(label, start, stop);
  }

  toggler = () => {
    if (this.range[0] || this.range[1]) {
      return this.toggleRange;
    }
    return this.toggleLabel;
  }

  closeClassifier = () => {
    this.setState({ classifying: false });
  }

  render() {
    console.log('char rendered');
    const labels = this.state.labels || [];

    let primaryLabels = '';
    for (let i = 1; i < 3; i++) {
      if (labels.includes(i)) {
        primaryLabels += ` label-${i}`;
      }
    }

    let secondaryLabels = '';
    for (let i = 3; i < 6; i++) {
      if (labels.includes(i)) {
        secondaryLabels += ` label-${i}`;
      }
    }

    return (
      <c
        className={
          primaryLabels +
          (this.props.selected ? ' selected' : '') +
          (this.state.hoverOn ? ' hover' : '')}
        onMouseOver={this.hoverOn}
        onMouseLeave={this.hoverOff}
        onMouseMove={this.props.drag}
        data-id={this.props.idx}
      >
        <d className={secondaryLabels} />
        {this.props.c}
        {this.state.classifying ?
          <ClassifyPopup
            closeClassifier={this.closeClassifier}
            toggleLabel={this.toggler()}
            activeLabels={this.props.activeLabels}
            range={this.range}
          />
        : ''}
      </c>
    );
  }
}

Char.propTypes = {
  c: React.PropTypes.string,
  idx: React.PropTypes.number,
  labels: React.PropTypes.array,
  setLabels: React.PropTypes.func,
  activeLabels: React.PropTypes.array,
  toggleRange: React.PropTypes.func,
  drag: React.PropTypes.func,
  selected: React.PropTypes.bool,
};
