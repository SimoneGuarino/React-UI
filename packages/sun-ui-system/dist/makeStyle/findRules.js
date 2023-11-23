"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findRuleIndexBySelector = void 0;
function findRuleIndexBySelector(sheet, selector) {
    for (let i = 0; i < sheet.cssRules.length; i++) {
        const rule = sheet.cssRules[i];
        if (rule.type === CSSRule.STYLE_RULE && rule.selectorText === selector) {
            return i;
        }
    }
    return -1;
}
exports.findRuleIndexBySelector = findRuleIndexBySelector;
