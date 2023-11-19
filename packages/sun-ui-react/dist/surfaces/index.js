"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Surface = void 0;
const generateDynamicStyled_1 = require("@sun-ui/system/dist/generateDynamicStyled");
exports.Surface = (0, generateDynamicStyled_1.generateDynamicStyled)({
    component: 'div',
    name: 'my-div',
    slot: 'my-slot',
    style: { background: '#fff', fontSize: '16px' },
    additionalStyle: ({ ownerState }) => ({ padding: ownerState.elevation }),
});
