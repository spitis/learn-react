webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _jquery = __webpack_require__(2);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _button = __webpack_require__(3);\n\nvar _button2 = _interopRequireDefault(_button);\n\nvar _mustache = __webpack_require__(4);\n\nvar _mustache2 = _interopRequireDefault(_mustache);\n\n__webpack_require__(5);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Button = function () {\n    function Button(link) {\n        _classCallCheck(this, Button);\n\n        this.link = link;\n    }\n\n    _createClass(Button, [{\n        key: 'onClick',\n        value: function onClick(event) {\n            event.preventDefault();\n            alert(this.link);\n        }\n    }, {\n        key: 'render',\n        value: function render(node) {\n            var text = (0, _jquery2.default)(node).text();\n\n            // Render our button\n            (0, _jquery2.default)(node).html(_mustache2.default.render(_button2.default, { text: text }));\n\n            // Attach our listeners\n            (0, _jquery2.default)('.button').click(this.onClick.bind(this));\n        }\n    }]);\n\n    return Button;\n}();\n\nexports.default = Button;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/components/button/button.js\n ** module id = 1\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./src/components/button/button.js?");

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	eval("module.exports = \"<a class=\\\"button\\\" href=\\\"{{link}}\\\">{{text}}</a>\\n\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/components/button/button.html\n ** module id = 3\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./src/components/button/button.html?");

/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(6);\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(8)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./button.scss\", function() {\n\t\t\tvar newContent = require(\"!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./button.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/components/button/button.scss\n ** module id = 5\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./src/components/button/button.scss?");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	eval("exports = module.exports = __webpack_require__(7)();\n// imports\n\n\n// module\nexports.push([module.id, \".button {\\n  background: tomato;\\n  color: white; }\\n\", \"\"]);\n\n// exports\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/css-loader!./~/sass-loader!./src/components/button/button.scss\n ** module id = 6\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./src/components/button/button.scss?./~/css-loader!./~/sass-loader");

/***/ }
]);