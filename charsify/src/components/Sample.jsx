import React from 'react';
import Char from './Char.jsx';
import './Sample.scss';

export default class Sample extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selStart: -1,
      selEnd: -1,
    };
  }

  selecting = false;

  drag = (e) => {
    if (!this.selecting) return;
    const charIdx = e.target.getAttribute('data-id');
    let changed = false;
    if (this.state.selStart < 0) {
      this.setState({ selStart: charIdx });
    }
    if (this.state.selEnd !== charIdx) {
      this.setState({ selEnd: charIdx });
      changed = true;
    }
    if (changed) {
      this.changeHighlight();
    }
  }

  changeHighlight = () => {

  }

  stopSelecting = () => {
    this.selecting = false;
    this.setState({
      selStart: -1,
      selEnd: -1,
    });
  }

  renderRange = (arr) => {
    return (
      [].map.call(arr, (charLabels) =>
        <span>{charLabels[0]}</span>
      )
    );
  }

  render() {
    let start;
    let stop;
    if (this.state.selStart < this.state.selEnd) {
      start = this.state.selStart;
      stop = Number(this.state.selEnd) + 1;
    } else {
      start = this.state.selEnd;
      stop = Number(this.state.selStart) + 1;
    }
    let firstArr = [];
    let secondArr = [];
    let thirdArr = [];
    if (stop > 0) {
      firstArr = this.props.textLabels.slice(0, start);
      secondArr = this.props.textLabels.slice(start, stop);
      thirdArr = this.props.textLabels.slice(stop);
    }

    console.log(`Start: ${start}`);
    console.log(`Stop: ${stop}`);
    console.log(`2nd Array: ${secondArr.length}`);

    return (
      <div
        className="sample-text"
        onMouseLeave={this.stopSelecting}
        onMouseUp={this.stopSelecting}
        onMouseDown={() => (this.selecting = true)}
      >
        {[].map.call(this.props.textLabels, (charLabels) => {
          return (
            <Char
              key={charLabels[2]}
              idx={charLabels[2]}
              ref={charLabels[2]}
              c={charLabels[0]}
              labels={charLabels[1]}
              drag={this.drag}
              setLabels={this.props.setLabels}
              activeLabels={this.props.activeLabels}
            />
          );
        })}
        <div className="highlight-mirror">
          {this.renderRange(firstArr)}
          <span className="selected-highlight">
            {this.renderRange(secondArr)}
          </span>
          {this.renderRange(thirdArr)}
        </div>
      </div>
    );
  }
}

Sample.propTypes = {
  textLabels: React.PropTypes.array,
  setLabels: React.PropTypes.func,
  activeLabels: React.PropTypes.array,
};
