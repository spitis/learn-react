import React from 'react';
import ClassifyPopup from './ClassifyPopup.jsx';
import './Char.scss';

export default class Char extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classifying: false,
    };
  }

  showClassifier = (e) => {
    e.preventDefault();
    this.setState({ classifying: true });
  }

  closeClassifier = () => {
    this.setState({ classifying: false });
  }

  render() {
    const labels = this.props.labels || [];

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
        className={primaryLabels}
        onMouseDown={this.showClassifier}
      >
        <d className={secondaryLabels} />
        {this.props.c}
        {this.state.classifying ?
          <ClassifyPopup closeClassifier={this.closeClassifier} />
        : ''}
      </c>
    );
  }
}

Char.propTypes = {
  c: React.PropTypes.string,
  labels: React.PropTypes.array,
};
