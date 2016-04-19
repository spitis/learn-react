import React from 'react';
import MdArrowBack from 'react-icons/lib/md/arrow-back';
import MdArrowForward from 'react-icons/lib/md/arrow-forward';
import Sample from './Sample.jsx';
import Labels from './Labels.jsx';
import {
  clearSelection,
  Tools,
} from '../actions.js';
import '../styles/App.scss';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visibleLabel: 0,
      tool: {
        type: Tools.DEFAULT,
        options: {},
      },
    };
  }

  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => {
      const state = this.props.store.getState();
      if (
        state.visibleLabel !== this.state.visibleLabel ||
        JSON.stringify(state.tool) !== JSON.stringify(this.state.tool)
      ) {
        this.setState({
          visibleLabel: state.visibleLabel,
          tool: state.tool,
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getWrapperClass = () => {
    let className = 'sample-label-wrapper';
    if (this.state.visibleLabel) {
      className += ` label-${this.state.visibleLabel}`;
    }
    if (this.state.tool.type === Tools.HIGHLIGHTER) {
      className += ' highlighting';
    }
    if (this.state.tool.type === Tools.ERASER) {
      className += ' erasing';
    }
    return className;
  }

  labelSelection = (label) => this.refs.sample.labelSelection(label);
  unlabelSelection = (label) => this.refs.sample.unlabelSelection(label);

  render() {
    return (
      <div className="body-wrapper"
        onClick={() => this.props.store.dispatch(clearSelection())}
      >
        <div className="app-wrapper">
          <div className="title-bar">
            <MdArrowBack />
            Sample No. 9213837
            <MdArrowForward />
          </div>
          <div className={this.getWrapperClass()}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sample">
              <Sample
                ref="sample"
                store={this.props.store}
              />
            </div>
            <div className="labels">
              <Labels
                store={this.props.store}
                labelSelection={this.labelSelection}
                unlabelSelection={this.unlabelSelection}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  store: React.PropTypes.object,
};
