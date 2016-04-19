import { Tools } from './actions.js';

// TEST TEXT
const TEST_CHARS =
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

const TEST_LABELS =
  (new Array(TEST_CHARS.length)).fill([]);

export const TEST_SAMPLE_LONG = {
  chars: TEST_CHARS,
  labels: TEST_LABELS,
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

export const TEST_SAMPLE_SHORT = {
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
