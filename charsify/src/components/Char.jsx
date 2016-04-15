import React from 'react';
import './Char.scss';

export default class Char extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      labels: this.props.labels,
      hoverOn: false,
    };
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

  hoverOn = () => {
    this.setState({ hoverOn: true });
  }

  hoverOff= () => {
    this.setState({ hoverOn: false });
  }

  toggleOn = () => {
    this.setState({ selected: true });
  }

  toggleOff = () => {
    this.setState({ selected: false });
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

  render() {
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
          (this.state.selected ? ' selected' : '') +
          (this.state.hoverOn ? ' hover' : '')}
        onMouseOver={this.hoverOn}
        onMouseLeave={this.hoverOff}
        onMouseMove={this.props.dragSelection}
        onMouseDown={this.props.startSelecting}
        data-id={this.props.idx}
      >
        <d className={secondaryLabels} />
        {this.props.c}
      </c>
    );
  }
}

Char.propTypes = {
  idx: React.PropTypes.number,
  c: React.PropTypes.string,
  labels: React.PropTypes.array,
  dragSelection: React.PropTypes.func,
  startSelecting: React.PropTypes.func,
  setLabels: React.PropTypes.func,
  activeLabels: React.PropTypes.array,
};
