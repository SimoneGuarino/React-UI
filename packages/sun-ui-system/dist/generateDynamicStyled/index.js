// File: dist/generateDynamicStyled/index.js

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let react_1 = require("react");
exports.generateDynamicStyled = function (_a) {
    let component = _a.component, name = _a.name, slot = _a.slot;
    let DynamicStyledComponent = function (props) {
        let CustomComponent = component;
        return react_1.default.createElement(CustomComponent, __assign({ name: name, slot: slot }, props), props.children);
    };
    return DynamicStyledComponent;
};