import React from 'react';
import uuid from 'node-uuid';
import Sample from './Sample.jsx';
import Label from './Label.jsx';
import MdArrowBack from 'react-icons/lib/md/arrow-back';
import MdArrowForward from 'react-icons/lib/md/arrow-forward';
import './App.scss';

// TEST TEXT
const testText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ' +
  'do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ' +
  'enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
  'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
  'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
  'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
  'culpa qui officia deserunt mollit anim id est laborum.' +
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ' +
  'do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ' +
  'enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
  'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
  'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
  'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
  'culpa qui officia deserunt mollit anim id est laborum.' +
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ' +
  'do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ' +
  'enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
  'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
  'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
  'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
  'culpa qui officia deserunt mollit anim id est laborum.' +
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ' +
  'do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ' +
  'enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
  'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
  'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
  'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
  'culpa qui officia deserunt mollit anim id est laborum.' +
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ' +
  'do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ' +
  'enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
  'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
  'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
  'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
  'culpa qui officia deserunt mollit anim id est laborum.' +
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ' +
  'do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ' +
  'enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
  'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
  'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
  'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
  'culpa qui officia deserunt mollit anim id est laborum.' +
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ' +
  'do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ' +
  'enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
  'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
  'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
  'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
  'culpa qui officia deserunt mollit anim id est laborum.' +
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ' +
  'do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ' +
  'enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
  'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
  'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
  'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
  'culpa qui officia deserunt mollit anim id est laborum.' +
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ' +
  'do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ' +
  'enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
  'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
  'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
  'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
  'culpa qui officia deserunt mollit anim id est laborum.';

// TEST LABELS
const testArray =
  (new Array(testText.length)).fill([]);
testArray[1] = [1];
testArray[3] = [1, 3];
testArray[6] = [1, 2];
testArray[7] = [2, 3];
testArray[8] = [3];

// [0,1,2,3...] TEST INDICES
const testIndices = new Array(testText.length);
for (let i = 0; i < testIndices.length; i++) {
  testIndices[i] = i;
}

// Zip([1,2],[3,4]) => [[1,3],[2,4]]
const zip = rows => rows[0].map((_, c) => rows.map(row => row[c]));

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sample: {
        id: uuid.v4(),
        text: testText,
        labels: testArray,
        indices: testIndices,
      },
      activeLabels: [
        {
          id: uuid.v4(),
          label: 'Label 1',
          no: 1,
        },
        {
          id: uuid.v4(),
          label: 'Label 2',
          no: 2,
        },
        {
          id: uuid.v4(),
          label: 'Label 3',
          no: 3,
        },
      ],
    };

    this.sampleLabelsMirror = this.state.sample.labels.slice();
  }

  componentDidUpdate() {
    console.log(`Rendered App! ${((new Date()).getTime() - this.date.getTime())} ms`);
  }

  // Only affects mirror labels; state will need to be saved.
  setLabels = (charIndex, newLabels) => {
    this.sampleLabelsMirror[charIndex] = newLabels;
  };

  date = new Date();

  render() {
    this.date = new Date();

    return (
      <div className="app-wrapper">
      <div className="title-bar">
        <MdArrowBack />
        Sample No. 9213837
        <MdArrowForward />
      </div>
      <div className="sample-label-wrapper">
        <div className="sample">
          <Sample
            textLabels={
              zip([
                this.state.sample.text.split(''),
                this.state.sample.labels,
                this.state.sample.indices,
              ])}
            setLabels={this.setLabels}
            activeLabels={this.state.activeLabels}
          />
        </div>
        <div className="labels">
          {this.state.activeLabels.map((label) =>
            <div key={label.id}>
              <input type="checkbox" defaultChecked />
              <Label label={label.label} />
            </div>
          )}
        </div>
      </div>
      </div>
    );
  }
}
