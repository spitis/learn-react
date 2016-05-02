import test from 'tape';
import app from '../src/reducers.js';

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
  completedLabels: [],
  visibleLabel: 0,
};

test('DEFAULT ACTION', t => {
  const state = TEST_SAMPLE_SHORT;
  t.deepEqual(state, app(state, { type: 'RANDOM' }));
  t.end();
});

test('ADD LABEL', t => {
  t.end();
});
