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
const convertToKebabCase_1 = require("../utils/convertToKebabCase");
const generateRandomClassName = (name) => {
    const randomString = Math.random().toString(36).substring(2, 8);
    return `css-${randomString}-${name}`;
};
const generateDynamicStyled = ({ component, name, slot, sx, additionalStyle }) => {
    const DynamicStyledComponent = (_a) => {
        var { children } = _a, props = __rest(_a, ["children"]);
        const CustomComponent = component || props.component;
        const combinedStyles = Object.assign({}, props.style); // ...props.sx
        const combinedSxStyles = Object.assign({}, sx); // ...props.sx
        if (additionalStyle) {
            const additionalStyles = (0, convertToKebabCase_1.ConvertToKebabCase)({ objToTransform: additionalStyle({ ownerState: props }) });
            Object.assign(combinedSxStyles, additionalStyles);
        }
        if (props.sx) {
            Object.assign(combinedSxStyles, props.sx);
        }
        //generate random class and asign the class to useState for remember that
        const [randomClassName, setRandomClassName] = react_1.default.useState(() => generateRandomClassName(name));
        //detectChange 
        const detectChange = react_1.default.useRef();
        //create a class when the props.sx change
        //checks if the style element is actually different at each re-rendering
        //if it is generate the style + save it in the useRef
        if (JSON.stringify(detectChange.current) !== JSON.stringify(combinedSxStyles)) {
            detectChange.current = combinedSxStyles;
            (0, makeStyle_1.makeStyle)({ className: randomClassName, style: Object.assign({}, combinedSxStyles) });
        }
        ;
        return react_1.default.createElement(CustomComponent, Object.assign({ name,
            slot, style: combinedStyles, className: randomClassName }, props), children);
    };
    return DynamicStyledComponent;
};
exports.generateDynamicStyled = generateDynamicStyled;
