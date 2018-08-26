webpackHotUpdate("decorate",{

/***/ "./src/component/Layer/Layer.tsx":
/*!***************************************!*\
  !*** ./src/component/Layer/Layer.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Layer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Module */ \"./src/component/Module/index.ts\");\n\r\n\r\n\r\n\r\n\r\nconst rootEl = document.createElement('div');\r\nrootEl.classList.add('d-layer');\r\nclass Layer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.onClose = () => {\r\n            this.closeModal();\r\n        };\r\n        this.closeModal = () => {\r\n            rootEl.remove();\r\n            // 滚动穿透还原\r\n            document.querySelector('html').style.overflow = 'initial';\r\n        };\r\n        this.renderChild = () => {\r\n            let { moduleData: { data: { imgUrl, hotspots, }, }, } = this.props;\r\n            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"d-img\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", { src: imgUrl }),\r\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Icon\"], { type: \"close\" }),\r\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"d-hotspots-wrap\" }, hotspots && hotspots.map((v) => {\r\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", { href: v.url });\r\n                    }))),\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"d-mask\", onClick: this.onClose })));\r\n        };\r\n    }\r\n    componentDidMount() {\r\n        if (this.context.BASE_DATA.pageType === 0) {\r\n            document.body.appendChild(rootEl);\r\n            // 阻止滚动穿透\r\n            document.querySelector('html').style.overflow = 'hidden';\r\n        }\r\n    }\r\n    componentWillUnmount() {\r\n        this.closeModal();\r\n    }\r\n    render() {\r\n        const { moduleData } = this.props;\r\n        const { pageType } = this.context.BASE_DATA;\r\n        console.log(3231);\r\n        // 装修时的展示\r\n        if (pageType === 0) {\r\n            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Module__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { moduleData: moduleData },\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", { className: \"d-hint\" }, \"\\u6D6E\\u5C42\\u6A21\\u5757\\u6548\\u679C\\u8BF7\\u5728\\u9884\\u89C8\\u9875\\u4E2D\\u67E5\\u770B\")));\r\n        }\r\n        else {\r\n            console.log(3231);\r\n            return react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(this.renderChild(), rootEl);\r\n        }\r\n    }\r\n}\r\nLayer.contextTypes = {\r\n    BASE_DATA: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L0xheWVyL0xheWVyLnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvTGF5ZXIvTGF5ZXIudHN4PzhiOTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IE1vZHVsZSBmcm9tICcuLi9Nb2R1bGUnO1xuaW1wb3J0IHsgSU1vZHVsZURhdGEsIEhvdHNwb3RJbmZvLCBJQ29udGV4dCB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5cblxuaW50ZXJmYWNlIExheWVyUHJvcHMge1xuICAgIG1vZHVsZURhdGE6IElNb2R1bGVEYXRhO1xufVxuXG5pbnRlcmZhY2UgTGF5ZXJTdGF0ZSB7XG5cbn1cblxuY29uc3Qgcm9vdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5yb290RWwuY2xhc3NMaXN0LmFkZCgnZC1sYXllcicpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXllciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxMYXllclByb3BzLCBMYXllclN0YXRlPiB7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBMYXllclByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICBCQVNFX0RBVEE6IFByb3BUeXBlcy5vYmplY3RcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5CQVNFX0RBVEEucGFnZVR5cGUgPT09IDApIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocm9vdEVsKTtcblxuICAgICAgICAgICAgLy8g6Zi75q2i5rua5Yqo56m/6YCPXG4gICAgICAgICAgICAoZG9jdW1lbnQgYXMgYW55KS5xdWVyeVNlbGVjdG9yKCdodG1sJykuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICB9XG5cbiAgICBvbkNsb3NlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICB9XG5cbiAgICBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICByb290RWwucmVtb3ZlKCk7XG4gICAgICAgIC8vIOa7muWKqOepv+mAj+i/mOWOn1xuICAgICAgICAoZG9jdW1lbnQgYXMgYW55KS5xdWVyeVNlbGVjdG9yKCdodG1sJykuc3R5bGUub3ZlcmZsb3cgPSAnaW5pdGlhbCc7XG4gICAgfVxuXG4gICAgcmVuZGVyQ2hpbGQgPSAoKSA9PiB7XG5cbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIG1vZHVsZURhdGE6IHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGltZ1VybCxcbiAgICAgICAgICAgICAgICAgICAgaG90c3BvdHMsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nVXJsfSAvPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwiY2xvc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtaG90c3BvdHMtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2hvdHNwb3RzICYmIGhvdHNwb3RzLm1hcCgodjogSG90c3BvdEluZm8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt2LnVybH0+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLW1hc2tcIiBvbkNsaWNrPXt0aGlzLm9uQ2xvc2V9PjwvZGl2PlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBtb2R1bGVEYXRhIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHBhZ2VUeXBlIH0gPSB0aGlzLmNvbnRleHQuQkFTRV9EQVRBO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKDMyMzEpXG4gICAgICAgIC8vIOijheS/ruaXtueahOWxleekulxuICAgICAgICBpZiAocGFnZVR5cGUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE1vZHVsZSBtb2R1bGVEYXRhPXttb2R1bGVEYXRhfT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1oaW50XCI+5rWu5bGC5qih5Z2X5pWI5p6c6K+35Zyo6aKE6KeI6aG15Lit5p+l55yLPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvTW9kdWxlPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKDMyMzEpXG4gICAgICAgICAgICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKFxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ2hpbGQoKSxcbiAgICAgICAgICAgICAgICByb290RWwsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICB9XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFZQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBb0JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUdBO0FBdkRBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUF3Q0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFFQTs7QUEzRUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/component/Layer/Layer.tsx\n");

/***/ })

})