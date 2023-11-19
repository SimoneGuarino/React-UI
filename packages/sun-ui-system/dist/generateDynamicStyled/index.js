"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDynamicStyled = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@emotion/react");
const generateRandomClassName = (name) => {
    const randomString = Math.random().toString(36).substring(2, 8);
    return `css-${randomString}-${name}`;
};
const generateDynamicStyled = ({ component, name, slot, style, additionalStyle }) => {
    const DynamicStyledComponent = (_a) => {
        var { children } = _a, props = __rest(_a, ["children"]);
        const CustomComponent = component;
        const combinedStyles = Object.assign(Object.assign({}, style), props.sx);
        if (additionalStyle) {
            const additionalStyles = additionalStyle({ ownerState: props });
            Object.assign(combinedStyles, additionalStyles);
        }
        const [randomClassName, setRandomClassName] = react_1.default.useState(() => generateRandomClassName(name));
        const baseStyles = (0, react_2.css) `
      background-color: red;
      color: white;
      padding: 16px;

      &:hover {
        background-color: darkred;
      }
    `;
        const additionalStylesEmotion = additionalStyle ? additionalStyle({ ownerState: props }) : null;
        return (react_1.default.createElement(CustomComponent, Object.assign({ name: name, slot: slot, style: combinedStyles, className: randomClassName, css: [baseStyles, additionalStylesEmotion] }, props), children));
    };
    return DynamicStyledComponent;
};
exports.generateDynamicStyled = generateDynamicStyled;
