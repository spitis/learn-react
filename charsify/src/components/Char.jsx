import React from 'react';
import _ from 'lodash';
import '../styles/Char.scss';

export default class Char extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      labels: this.props.labels,
      hoverOn: false,
    };
  }

  toggleSelectOn = () => {
    this.setState({ selected: true });
  }

  toggleSelectOff = () => {
    this.setState({ selected: false });
  }

  toggleLabelOn = (label) => {
    this.setState({
      labels: _.union(this.state.labels, [label]),
    });
  }

  toggleLabelOff = (label) => {
    this.setState({
      labels: this.state.labels.filter(lbl => lbl !== label),
    });
  }

  render() {
    const labels = this.state.labels || [];

    let primaryLabels = '';
    for (let i = 1; i < 6; i++) {
      if (labels.includes(String(i))) {
        primaryLabels += ` label-${i}`;
      }
    }

    return (
      <c
        className={
          primaryLabels +
          (this.state.selected ? ' selected' : '')
        }
        onMouseMove={this.props.dragSelection}
        onMouseDown={this.props.startSelecting}
        onDoubleClick={this.props.selectWord}
        data-id={this.props.idx}
      >
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
};
