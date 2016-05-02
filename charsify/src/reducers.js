import _ from 'lodash';
import { TEST_SAMPLE_SHORT } from './test_state.js';

import {
  SELECT_RANGE,
  ADD_LABEL,
  REMOVE_LABEL,
  MARK_LABEL_COMPLETE,
  MARK_LABEL_INCOMPLETE,
  USE_TOOL,
  SET_VISIBLE_LABEL,
} from './actions.js';

const TEST = TEST_SAMPLE_SHORT;

const defaultSelection = {
  start: -1,
  end: -1,
};

export function selection(state = defaultSelection, action) {
  switch (action.type) {
    case SELECT_RANGE:
      return {
        start: action.start,
        end: action.end,
      };
    default:
      return state;
  }
}

// no default, depends on chars
export function labels(state, action) {
  switch (action.type) {
    case ADD_LABEL:
      if (action.start === -1) {
        return state;
      }
      return [
        ...state.slice(0, action.start),
        ...state.slice(action.start, action.end + 1)
              .map(labelsForChar =>
                _.union(labelsForChar, [action.label])),
        ...state.slice(action.end + 1),
      ];
    case REMOVE_LABEL:
      if (action.start === -1) {
        return state;
      }
      return [
        ...state.labels.slice(0, action.start),
        ...state.labels.slice(action.start, action.end + 1)
              .map(labelsForChar =>
                labelsForChar.filter(label => label !== action.label)),
        ...state.labels.slice(action.end + 1),
      ];
    default:
      return state;
  }
}

export function completedLabels(state, action) {
  switch (action.type) {
    case MARK_LABEL_COMPLETE:
      return _.union(state, [action.label]);
    case MARK_LABEL_INCOMPLETE:
      return state.filter(label => label !== action.label);
    default:
      return state;
  }
}

export default function app(state = TEST, action) {
  switch (action.type) {
    case SELECT_RANGE:
      return Object.assign({}, state,
        { selection: selection(state.selection, action) }
      );
    case ADD_LABEL:
    case REMOVE_LABEL:
      return Object.assign({}, state,
        { labels: labels(state.labels, action) }
      );
    case MARK_LABEL_COMPLETE:
    case MARK_LABEL_INCOMPLETE:
      return Object.assign({}, state,
        { completedLabels: completedLabels(state.completed_labels, action) }
      );
    case USE_TOOL:
      return Object.assign({}, state, {
        tool: action.tool,
      });
    case SET_VISIBLE_LABEL:
      return Object.assign({}, state, {
        visibleLabel: action.labelKey,
      });
    default:
      return state;
  }
}
