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
    this.props.toggleLabel(
      Number(el.getAttribute('data-id')),
      this.props.range[0],
      this.props.range[1]
    );
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
          {this.props.activeLabels.map((label) =>
            <li
              key={label.no}
              onMouseMove={this.hoverOn}
              onMouseLeave={this.hoverOff}
              onMouseUp={this.toggleClass}
              data-id={label.no}
            >{label.label}</li>
          )}
        </ul>
      </div>
    );
  }
}

ClassifyPopup.propTypes = {
  closeClassifier: React.PropTypes.func,
  toggleLabel: React.PropTypes.func,
  activeLabels: React.PropTypes.array,
  range: React.PropTypes.array,
};
