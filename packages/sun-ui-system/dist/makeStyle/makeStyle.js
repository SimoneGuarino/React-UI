"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeStyle = exports.composeStyle = void 0;
const convertToKebabCase_1 = require("../utils/convertToKebabCase");
const generateClass_1 = require("./generateClass");
const findRules_1 = require("./findRules");
const composeStyle = ({ style, className, styleSheet }) => {
    const styleKey = Object.keys(style);
    const stack = {};
    const actions = {};
    for (let i = 0; i < styleKey.length; i++) {
        const e = styleKey[i];
        if (e[0] == '&' && e[1] == ':') {
            actions[e] = style[e];
        }
        const kebabCaseKey = e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        stack[e] = kebabCaseKey;
    }
    //check if the object actions have some proprietys
    if (Object.keys(actions).length > 0) {
        //convert the string inside the object from CapsCase in KebabCase
        const result = (0, convertToKebabCase_1.ConvertToKebabCase)({ objToTransform: actions });
        if (result) {
            (0, generateClass_1.GenerateActionsClass)({ objToTransform: result, className: className });
        }
    }
    else {
        //check if there is some propriety in 'const actions', if not check if there is className:hover exist
        //and delete the rule
        const existingRuleIndex = (0, findRules_1.findRuleIndexBySelector)(styleSheet, `.${className}:hover`);
        if (existingRuleIndex !== -1) {
            styleSheet.deleteRule(existingRuleIndex);
        }
    }
    // Convert React styles to a valid style string
    const styleToString = Object.keys(style).filter(e => e[0] !== '&' && e[1] !== ':')
        .map((key) => `${stack[key]}: ${style[key]};`)
        .join(' ');
    return styleToString;
};
exports.composeStyle = composeStyle;
const makeStyle = ({ className, style }) => {
    // Check if the style tag with the unique id is already present in the head
    const styleSheet = document.styleSheets[0]; // Replace with the CSSStyleSheet object you want to add the rule to
    const styleConverted = (0, exports.composeStyle)({ style, className, styleSheet });
    // Add dynamic CSS rules to the class
    const dynamicStyle = `
    .${className} {
      ${styleConverted}
    }
  `;
    if (styleSheet) {
        const existingRuleIndex = (0, findRules_1.findRuleIndexBySelector)(styleSheet, `.${className}`);
        if (existingRuleIndex !== -1) {
            // Override the existing rule values
            styleSheet.deleteRule(existingRuleIndex);
        }
        // ruleIndex is the index of the new rule in the style sheet
        styleSheet.insertRule(dynamicStyle, styleSheet.cssRules.length);
    }
    return true;
};
exports.makeStyle = makeStyle;
