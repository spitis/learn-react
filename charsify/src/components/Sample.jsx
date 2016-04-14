import React from 'react';
import Char from './Char.jsx';
import './Sample.scss';

export default class Sample extends React.Component {

  toggleRange = (label, start, stop) => {
    for (let i = start; i <= stop; i++) {
      this.refs[i].toggleLabel(label);
    }
  }

  preventSelectionDrag = (e) => {
    if (window.getSelection().toString()) {
      e.preventDefault();
    }
  }

  render() {
    return (
      <div
        className="sample-text"
        onMouseMove={this.preventSelectionDrag}
      >
        {[].map.call(this.props.textLabels, (charLabels) =>
          <Char
            key={charLabels[2]}
            idx={charLabels[2]}
            c={charLabels[0]}
            labels={charLabels[1]}
            setLabels={this.props.setLabels}
            activeLabels={this.props.activeLabels}
            ref={charLabels[2]}
            toggleRange={this.toggleRange}
          />
        )}
      </div>
    );
  }
}

Sample.propTypes = {
  textLabels: React.PropTypes.array,
  setLabels: React.PropTypes.func,
  activeLabels: React.PropTypes.array,
};
