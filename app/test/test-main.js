// we get all the test files automatically

var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/spec\.js$/i.test(file)) {
      tests.push(file);
    }
  }
}

require.config({
  baseUrl: '/base/src/js',

  paths: {
    'jquery': './lib/jquery-1.11.0.min',
    'ArrayUtil': './com/dragmove/util/ArrayUtil',
    'CheckUtil': './com/dragmove/util/CheckUtil',
    'StringUtil': './com/dragmove/util/StringUtil',
  },

  shim: {
  },

  deps: tests,
  callback: window.__karma__.start
});
