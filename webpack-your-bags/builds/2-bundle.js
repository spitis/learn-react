webpackJsonp([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _jquery = __webpack_require__(2);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _mustache = __webpack_require__(4);\n\nvar _mustache2 = _interopRequireDefault(_mustache);\n\nvar _header = __webpack_require__(10);\n\nvar _header2 = _interopRequireDefault(_header);\n\n__webpack_require__(11);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Header = function () {\n    function Header() {\n        _classCallCheck(this, Header);\n    }\n\n    _createClass(Header, [{\n        key: 'render',\n        value: function render(node) {\n            var text = (0, _jquery2.default)(node).text();\n\n            (0, _jquery2.default)(node).html(_mustache2.default.render(_header2.default, { text: text }));\n        }\n    }]);\n\n    return Header;\n}();\n\nexports.default = Header;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/components/header/header.js\n ** module id = 9\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./src/components/header/header.js?");

/***/ },
/* 10 */
/***/ function(module, exports) {

	eval("module.exports = \"<header class=\\\"header\\\">{{text}}</header>\\n\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/components/header/header.html\n ** module id = 10\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./src/components/header/header.html?");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(12);\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(8)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./header.scss\", function() {\n\t\t\tvar newContent = require(\"!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./header.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/components/header/header.scss\n ** module id = 11\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./src/components/header/header.scss?");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	eval("exports = module.exports = __webpack_require__(7)();\n// imports\n\n\n// module\nexports.push([module.id, \".header {\\n  font-size: 3rem;\\n  color: red; }\\n\", \"\"]);\n\n// exports\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/css-loader!./~/sass-loader!./src/components/header/header.scss\n ** module id = 12\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./src/components/header/header.scss?./~/css-loader!./~/sass-loader");

/***/ }
]);