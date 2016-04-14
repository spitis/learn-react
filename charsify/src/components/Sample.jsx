import React from 'react';
import Char from './Char.jsx';
import './Sample.scss';

export default class Sample extends React.Component {
  render() {
    return (
      <div className="sample-text">
        {[].map.call(this.props.textLabels, (charLabels) =>
          <Char
            key={charLabels[2]}
            c={charLabels[0]}
            labels={charLabels[1]}
          />
        )}
      </div>
    );
  }
}

Sample.propTypes = {
  textLabels: React.PropTypes.array,
};
