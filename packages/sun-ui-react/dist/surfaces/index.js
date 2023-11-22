"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Surface = void 0;
const generateDynamicStyled_1 = require("@sun-ui/system/dist/generateDynamicStyled");
exports.Surface = (0, generateDynamicStyled_1.generateDynamicStyled)({
    component: 'div',
    name: 'sun-ui-surface',
    slot: 'sun-ui-surface',
    sx: { fontSize: '16px', color: 'black' },
    additionalStyle: ({ ownerState }) => ({ padding: ownerState.elevation }),
});
