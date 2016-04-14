import React from 'react';
import './ClassifyPopup.scss';

export default class ClassifyPopup extends React.Component {

  hoverOn = (e) => {
    const el = e.target || e;
    el.className = 'hover';
  }

  hoverOff= (e) => {
    const el = e.target || e;
    el.removeAttribute('class');
  }

  toggleClass = (e) => {
    const el = e.target;
    e.stopPropagation();
    this.hoverOff(el);
    setTimeout(() => {
      this.hoverOn(el);
      setTimeout(() => {
        this.hoverOff(el);
        setTimeout(() => {
          this.props.closeClassifier();
        }, 50);
      }, 50);
    }, 50);
  };

  render() {
    return (
      <div
        className="classify-popup"
        onMouseLeave={this.props.closeClassifier}
        onMouseUp={this.props.closeClassifier}
      >
        <ul>
          <li
            onMouseMove={this.hoverOn}
            onMouseLeave={this.hoverOff}
            onMouseUp={this.toggleClass}
          >Class 1</li>
          <li
            onMouseMove={this.hoverOn}
            onMouseLeave={this.hoverOff}
            onMouseUp={this.toggleClass}
          >Class 2</li>
        </ul>
      </div>
    );
  }
}

ClassifyPopup.propTypes = {
  closeClassifier: React.PropTypes.func,
};
