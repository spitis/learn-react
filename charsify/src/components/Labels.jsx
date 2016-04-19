import React from 'react';
import Label from './Label.jsx';
import {
  setVisibleLabel,
  Tools,
  useTool,
} from '../actions.js';

export default class Labels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLabels: {
        1: 'start_of_paragraph',
        2: 'end_of_paragraph',
        3: 'pos_verb',
        4: 'pos_noun',
        5: null,
      },
    };

    this.tool = {
      type: Tools.DEFAULT,
      options: {},
    };
  }

  labelSelection = (labelKey) => () => this.props.labelSelection(labelKey);
  unlabelSelection = (labelKey) => () => this.props.unlabelSelection(labelKey);

  setVisibleLabel = (labelKey) => () => {
    if (
      this.tool.type === Tools.DEFAULT ||
      this.tool.options.labelKey === labelKey
    ) {
      this.props.store.dispatch(setVisibleLabel(labelKey));
    }
  };

  unsetVisibleLabel = () => {
    if (
      this.tool.type === Tools.DEFAULT
    ) {
      this.props.store.dispatch(setVisibleLabel(0));
    }
  };

  mainClickHandler = (labelKey) => () => {
    if (this.props.store.getState().selection.end >= 0) {
      this.props.labelSelection(labelKey);
      return;
    }
    if (
      this.tool.type === Tools.HIGHLIGHTER &&
      this.tool.options.labelKey === labelKey
    ) {
      this.tool = {
        type: Tools.DEFAULT,
        options: {},
      };
    } else {
      this.tool = {
        type: Tools.HIGHLIGHTER,
        options: {
          labelKey,
        },
      };
      this.setVisibleLabel(labelKey)();
    }
    this.props.store.dispatch(useTool(this.tool));
  }

  eraseClickHandler = (labelKey) => () => {
    if (this.props.store.getState().selection.end >= 0) {
      this.props.unlabelSelection(labelKey);
      return;
    }

    if (
      this.tool.type === Tools.ERASER &&
      this.tool.options.labelKey === labelKey
    ) {
      this.tool = {
        type: Tools.DEFAULT,
        options: {},
      };
    } else {
      this.tool = {
        type: Tools.ERASER,
        options: {
          labelKey,
        },
      };
      this.setVisibleLabel(labelKey)();
    }
    this.props.store.dispatch(useTool(this.tool));
  }

  render() {
    const activeLabels = this.state.activeLabels;

    return (
      <div>
        {Object.keys(activeLabels).map((key) => {
          if (activeLabels[key]) {
            return (
              <Label
                key={key}
                idx={key}
                name={activeLabels[key]}
                mainClickHandler={this.mainClickHandler(key)}
                eraseClickHandler={this.eraseClickHandler(key)}
                setVisibleLabel={this.setVisibleLabel(key)}
                unsetVisibleLabel={this.unsetVisibleLabel}

              />
            );
          }
          return 'Label Placeholder';
        }
        )}
      </div>
    );
  }

}

Labels.propTypes = {
  store: React.PropTypes.object,
  labelSelection: React.PropTypes.func,
  unlabelSelection: React.PropTypes.func,
};
