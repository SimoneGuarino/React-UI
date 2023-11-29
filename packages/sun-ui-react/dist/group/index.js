"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
const generateDynamicStyled_1 = require("@sun-ui/system/dist/generateDynamicStyled");
exports.Group = (0, generateDynamicStyled_1.generateDynamicStyled)({
    component: 'div',
    name: 'sun-ui-group',
    slot: 'sun-ui-group',
    sx: {
        display: 'flex',
        transition: 'all 400ms cubic-bezier(0.65, 0.05, 0.36, 1) 0s',
    },
    additionalStyle: ({ ownerState }) => ({
        gap: `${ownerState.gap * 5}`,
        backgroundColor: `${ownerState.backgroundColor}`,
        height: `${ownerState.height ? ownerState.height : 'fit-content'}`,
        width: `${ownerState.width}`,
        justifyContent: `${ownerState.justifyContent}`,
        padding: `${typeof ownerState.p == 'number' ?
            (ownerState.p * 5) : ownerState.p}`,
        borderRadius: `${ownerState.borderRadius}`,
        overflow: `${ownerState.overflow}`,
        transformStyle: "preserve-3d",
        flexDirection: ownerState.direction != 'row' ? "column" : 'row',
        transform: "translateZ(2px)",
    }),
});
