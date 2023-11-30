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
    additionalStyle: ({ ownerState }) => {
        let baseCondition = {
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
            webKitClipPath: "polygon(0 0, 100% 0, 100% 30%, 100% 70%, 100% 100%, 0 100%, 0% 70%, 0% 30%)",
            clipPath: "polygon(0 0, 100% 0, 100% 30%, 100% 70%, 100% 100%, 0 100%, 0% 70%, 0% 30%)",
        };
        let style = {};
        if (ownerState.shape) {
            const shape = ownerState.shape.toLowerCase();
            switch (shape) {
                case 'cube':
                    style = Object.assign(Object.assign({}, baseCondition), { webKitClipPath: "polygon(0 0, 100% 0, 100% 30%, 100% 70%, 100% 100%, 0 100%, 0% 70%, 0% 30%)", clipPath: "polygon(0 0, 100% 0, 100% 30%, 100% 70%, 100% 100%, 0 100%, 0% 70%, 0% 30%)" });
                    break;
                case 'octagon':
                    style = Object.assign(Object.assign({}, baseCondition), { webKitClipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)", clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" });
                    break;
                case 'rhombus':
                    style = Object.assign(Object.assign({}, baseCondition), { webKitClipPath: "polygon(49% 0%, 49% 0%, 100% 50%, 100% 50%, 50% 100%, 50% 100%, 0% 48%, 0% 48%)", clipPath: "polygon(49% 0%, 49% 0%, 100% 50%, 100% 50%, 50% 100%, 50% 100%, 0% 48%, 0% 48%)" });
                    break;
                default:
                    style = Object.assign({}, baseCondition);
                    break;
            }
        }
        else {
            style = Object.assign({}, baseCondition);
        }
        console.log(style);
        return style;
    },
});
