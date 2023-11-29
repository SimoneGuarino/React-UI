"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fade = void 0;
const transition_1 = require("@sun-ui/system/dist/transition");
exports.Fade = (0, transition_1.Transition)({
    transitionType: 'cubic-bezier(0.65, 0.05, 0.36, 1)',
    transitionStyles: {
        entering: { opacity: 0 },
        entered: { opacity: 1 },
        exiting: { opacity: 1 },
        exited: { opacity: 0 },
    },
    additionalStyle: ({ ownerState }) => ({
        in: ownerState.in,
    }),
});
