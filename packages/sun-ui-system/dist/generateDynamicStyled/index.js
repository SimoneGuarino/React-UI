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
const makeStyle_1 = require("../makeStyle");
const generateRandomClassName = (name) => {
    const randomString = Math.random().toString(36).substring(2, 8);
    return `css-${randomString}-${name}`;
};
const generateDynamicStyled = ({ component, name, slot, sx, additionalStyle }) => {
    const DynamicStyledComponent = (_a) => {
        var { children } = _a, props = __rest(_a, ["children"]);
        const CustomComponent = component;
        const combinedStyles = Object.assign({}, props.style); // ...props.sx
        if (additionalStyle) {
            const additionalStyles = additionalStyle({ ownerState: props });
            Object.assign(combinedStyles, additionalStyles);
        }
        const [randomClassName, setRandomClassName] = react_1.default.useState(() => generateRandomClassName(name));
        const [detectChange, setDetectChange] = react_1.default.useState();
        //create a class when the props.sx change
        if (JSON.stringify(detectChange) !== JSON.stringify(Object.assign({}, props.sx))) {
            setDetectChange(props.sx);
            if (props.sx)
                (0, makeStyle_1.makeStyle)({ className: randomClassName, style: Object.assign(Object.assign({}, sx), props.sx) });
        }
        return react_1.default.createElement(CustomComponent, Object.assign({ name,
            slot, style: combinedStyles, className: randomClassName }, props), children);
        /*return jsx(CustomComponent, {
          name,
          slot,
          css: css`${{...sx, ...props.sx, }}`,
          //style: combinedStyles,
          //className: randomClassName, // Assign the random class name here
          ...props
        }, children);*/
    };
    return DynamicStyledComponent;
};
exports.generateDynamicStyled = generateDynamicStyled;
