/*
 * action types
 */

export const SELECT_RANGE = 'SELECT';
export const ADD_LABEL = 'ADD_LABEL';
export const REMOVE_LABEL = 'REMOVE_LABEL';
export const MARK_LABEL_COMPLETE = 'MARK_LABEL_COMPLETE';
export const MARK_LABEL_INCOMPLETE = 'MARK_LABEL_INCOMPLETE';

export const USE_TOOL = 'USE_TOOL';
export const SET_VISIBLE_LABEL = 'SET_VISIBLE_LABEL';

/*
 * other constants
 */

export const Tools = {
  DEFAULT: 'DEFAULT',
  HIGHLIGHTER: 'HIGHLIGHTER',
  ERASER: 'ERASER',
};

/*
 * action creators
 */

export function selectRange(endpoint1, endpoint2) {
  if (endpoint1 < endpoint2) {
    return {
      type: SELECT_RANGE,
      start: endpoint1,
      end: endpoint2,
    };
  }
  return {
    type: SELECT_RANGE,
    start: endpoint2,
    end: endpoint1,
  };
}

export function clearSelection() {
  return {
    type: SELECT_RANGE,
    start: -1,
    end: -1,
  };
}

export function addLabel(label, endpoint1 = -1, endpoint2 = -1) {
  if (endpoint1 < endpoint2) {
    return {
      type: ADD_LABEL,
      label,
      start: endpoint1,
      end: endpoint2,
    };
  }
  return {
    type: ADD_LABEL,
    label,
    start: endpoint2,
    end: endpoint1,
  };
}

export function removeLabel(label, endpoint1 = -1, endpoint2 = -1) {
  if (endpoint1 < endpoint2) {
    return {
      type: REMOVE_LABEL,
      label,
      start: endpoint1,
      end: endpoint2,
    };
  }
  return {
    type: REMOVE_LABEL,
    label,
    start: endpoint2,
    end: endpoint1,
  };
}

export function markLabelComplete(label) {
  return {
    type: MARK_LABEL_COMPLETE,
    label,
  };
}
export function markLabelIncomplete(label) {
  return {
    type: MARK_LABEL_INCOMPLETE,
    label,
  };
}

export function useTool(tool) {
  return {
    type: USE_TOOL,
    tool,
  };
}

export function setVisibleLabel(labelKey) {
  return {
    type: SET_VISIBLE_LABEL,
    labelKey,
  };
}
