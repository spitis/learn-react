import React from 'react';
import TiPencil from 'react-icons/lib/ti/pencil';
import FaEraser from 'react-icons/lib/fa/eraser';
import FaEllipsisH from 'react-icons/lib/fa/ellipsis-h';
import './Label.scss';

export default class Label extends React.Component {

  highlightClickHandler = (e) => {
    const label = Number(e.target.getAttribute('data-id'));

    if (this.props.isSelection()) {
      this.props.labelSelection(label);
      return;
    }

    if (this.props.highlighting) {
      if (this.props.toolLock) {
        this.props.toggleToolLock();
      }
      this.props.clearTools();
      return;
    }

    this.props.startHighlighting(label);
  }

  render() {
    return (
      <div className="label">
        <span
          className="labelName"
          data-id={this.props.label.no}
          onMouseDown={this.highlightClickHandler}
        >
          {this.props.label.label} <TiPencil />
        </span>
        <span
          className="labelEraser"
          onMouseDown={() => this.props.unlabelSelection(this.props.label.no)}
        >
          <FaEraser />
        </span>
        <span className="labelMore">
          <FaEllipsisH />
        </span>
      </div>
    );
  }
}

Label.propTypes = {
  label: React.PropTypes.object,
  labelSelection: React.PropTypes.func,
  unlabelSelection: React.PropTypes.func,
  toolLock: React.PropTypes.func,
  toggleToolLock: React.PropTypes.func,
  startHighlighting: React.PropTypes.func,
  startErasing: React.PropTypes.func,
  highlighting: React.PropTypes.number,
  erasing: React.PropTypes.number,
  clearTools: React.PropTypes.func,
  isSelection: React.PropTypes.func,
};
