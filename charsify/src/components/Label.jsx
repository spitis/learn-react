import React from 'react';
import TiPencil from 'react-icons/lib/ti/pencil';
import FaEraser from 'react-icons/lib/fa/eraser';
import FaEllipsisH from 'react-icons/lib/fa/ellipsis-h';
import '../styles/Label.scss';

export default class Label extends React.Component {

  render() {
    return (
      <div className="label"
        onMouseOver={this.props.setVisibleLabel}
        onMouseOut={this.props.unsetVisibleLabel}
      >

        <span
          className="labelName"
          data-id={this.props.idx}
          onClick={this.props.mainClickHandler}
        >
          {this.props.name} <TiPencil />
        </span>

        <span
          className="labelEraser"
          data-id={this.props.idx}
          onClick={this.props.eraseClickHandler}
        >
          <FaEraser />
        </span>

        <span
          className="labelMore"
          onClick={this.props.sendData}
        >
          <FaEllipsisH />
        </span>

      </div>
    );
  }
}

Label.propTypes = {
  idx: React.PropTypes.string,
  name: React.PropTypes.string,
  mainClickHandler: React.PropTypes.func,
  eraseClickHandler: React.PropTypes.func,
  setVisibleLabel: React.PropTypes.func,
  unsetVisibleLabel: React.PropTypes.func,
  sendData: React.PropTypes.func,
};
