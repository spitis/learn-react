import test from 'tape';
import reducer from '../src/reducers.js';

import {
  selectRange,
  clearSelection,
  addLabel,
  removeLabel,
  markLabelComplete,
  markLabelIncomplete,
  useTool,
  setVisibleLabel,
  Tools,
} from '../src/actions.js';

const TEST_SAMPLE_SHORT = {
  chars: 'abcdefg hijk',
  labels: (new Array('abcdefg hijk'.length)).fill([]),
  selection: {
    start: -1,
    end: -1,
  },
  tool: {
    type: Tools.DEFAULT,
    options: {},
  },
  completed_labels: [],
  visibleLabel: 0,
};


test('SELECT_RANGE', t => {
  SELECT_RANGE;
  t.equal(2, 2, '1=2');
  t.end();
});
