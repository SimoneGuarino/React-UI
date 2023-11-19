"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
exports.generateDynamicStyled = function (_a) {
    const component = _a.component, name = _a.name, slot = _a.slot;
    const DynamicStyledComponent = function (props) {
        const CustomComponent = component;
        return react_1.createElement(CustomComponent, { name: name, slot: slot, ...props }, props.children);
    };
    return DynamicStyledComponent;
};
