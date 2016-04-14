import React from 'react';

export default class Label extends React.Component {
  render() {
    return (
      <span>{this.props.label}</span>
    );
  }
}

Label.propTypes = {
  label: React.PropTypes.string,
};
