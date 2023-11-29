"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typology = void 0;
const generateDynamicStyled_1 = require("@sun-ui/system/dist/generateDynamicStyled");
exports.Typology = (0, generateDynamicStyled_1.generateDynamicStyled)({
    name: 'sun-ui-typology',
    slot: 'sun-ui-typology',
    sx: {
        transform: "perspective(5000px) translate(0%, 0%) translateZ(2px)",
        transformStyle: "preserve-3d",
    },
    additionalStyle: ({ ownerState }) => {
        const style = {
            padding: `${ownerState.p * 5}px`,
        };
        let dependbyparentStyle, composeStyle = {};
        if (ownerState.dependbyparent == 'true') {
            dependbyparentStyle = {
                component: ownerState.component,
                display: 'flex',
                justifyContent: "center",
                width: `${typeof ownerState.width == 'number' ? ownerState.width + 'px' : ownerState.width}`,
                alignItems: 'center',
            };
        }
        else {
            dependbyparentStyle = {
                component: ownerState.component,
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '0px',
                left: '0px'
            };
        }
        switch (ownerState.component) {
            case 'h1':
                composeStyle = Object.assign(Object.assign({}, style), { fontSize: "1em", margin: "0", alignSelf: 'center' });
                break;
            case 'h2':
                composeStyle = Object.assign(Object.assign({}, style), { fontSize: "1em", margin: "0", alignSelf: 'center' });
                break;
            case 'p':
                composeStyle = Object.assign(Object.assign({}, style), { fontSize: "0.78em", textAlign: "left", margin: "0", fontWeight: 200 });
                break;
            default:
                composeStyle = Object.assign(Object.assign({}, style), dependbyparentStyle);
                break;
        }
        return composeStyle;
    },
});
