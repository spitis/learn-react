import _ from 'lodash';
import { TEST_SAMPLE_LONG } from './test_state.js';

import {
  SELECT_RANGE,
  ADD_LABEL,
  REMOVE_LABEL,
  MARK_LABEL_COMPLETE,
  MARK_LABEL_INCOMPLETE,
  USE_TOOL,
  SET_VISIBLE_LABEL,
} from './actions.js';

const TEST = TEST_SAMPLE_LONG;

export default function app(state = TEST, action) {
  switch (action.type) {
    case SELECT_RANGE:
      return Object.assign({}, state, {
        selection: {
          start: action.start,
          end: action.end,
        },
      });
    case ADD_LABEL:
      if (state.selection.start === -1) {
        return state;
      }
      return Object.assign({}, state, {
        labels: [
          ...state.labels.slice(0, state.selection.start),
          ...state.labels.slice(state.selection.start, state.selection.end + 1)
              .map(labelsForChar =>
                _.union(labelsForChar, [action.label])),
          ...state.labels.slice(state.selection.end + 1),
        ],
      });
    case REMOVE_LABEL:
      if (state.selection.start === -1) {
        return state;
      }
      return Object.assign({}, state, {
        labels: [
          ...state.labels.slice(0, state.selection.start),
          ...state.labels.slice(state.selection.start, state.selection.end + 1)
              .map(labelsForChar =>
                labelsForChar.filter(label => label !== action.label)),
          ...state.labels.slice(state.selection.end + 1),
        ],
      });
    case MARK_LABEL_COMPLETE:
      return Object.assign({}, state, {
        completed_labels: _.union(state.completed_labels, [action.label]),
      });
    case MARK_LABEL_INCOMPLETE:
      return Object.assign({}, state, {
        completed_labels: state.completed_labels.filter(label => label !== action.label),
      });
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
