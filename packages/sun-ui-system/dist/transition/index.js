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
exports.Transition = exports.EXITED = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.UNMOUNTED = void 0;
const react_1 = __importDefault(require("react"));
exports.UNMOUNTED = 'unmounted';
exports.ENTERING = 'entering';
exports.ENTERED = 'entered';
exports.EXITING = 'exiting';
exports.EXITED = 'exited';
const Transition = ({ transitionType, transitionStyles, additionalStyle }) => {
    const DynamicStyledComponent = (_a) => {
        var { children } = _a, props = __rest(_a, ["children"]);
        const [currentStyle, setCurrentStyle] = react_1.default.useState({});
        let appearStatus = react_1.default.useRef(null);
        if (props.in) {
            appearStatus.current = exports.ENTERING;
        }
        else {
            appearStatus.current = exports.EXITING;
        }
        react_1.default.useEffect(() => {
            updateStatus(true, appearStatus.current);
            return (() => {
                updateStatus(false, appearStatus.current);
                //cancelNextCallback();
            });
        }, [appearStatus.current]);
        function getTimeouts() {
            const { timeout } = props;
            let exit, enter, appear;
            exit = enter = appear = timeout || 0;
            if (timeout != null && typeof timeout !== 'number') {
                exit = timeout.exit;
                enter = timeout.enter;
                // TODO: remove fallback for next major
                appear = timeout.appear !== undefined ? timeout.appear : enter;
            }
            return { exit, enter, appear };
        }
        function updateStatus(mounting = false, nextStatus) {
            if (nextStatus !== null) {
                // nextStatus will always be ENTERING or EXITING.
                if (nextStatus === exports.ENTERING) {
                    performTransition(nextStatus, mounting);
                }
                else {
                    performTransition(nextStatus, mounting);
                }
            }
        }
        ;
        function performTransition(status, mounting) {
            const timeouts = getTimeouts();
            const enterTimeout = mounting ? timeouts.appear : timeouts.enter;
            let startTime = null;
            function animate(time) {
                let condition;
                if (!startTime) {
                    startTime = time;
                }
                //define the progress Time, if enterTimeout is undefined give 100ms (0.1s) delay
                //for perform the animation
                const progress = (time - startTime) / (enterTimeout !== 0 ? enterTimeout : 100);
                if (progress < 1) {
                    // Calcola gli stili in base al progresso e richiedi il prossimo frame
                    condition = calculateTransitionStyles(transitionStyles, status);
                    setCurrentStyle(() => condition);
                    requestAnimationFrame(animate);
                }
                else {
                    // La transizione è completata
                    condition = transitionStyles[status];
                    setCurrentStyle(() => condition);
                    goToNextState(status);
                }
            }
            // Richiedi il primo frame di animazione
            requestAnimationFrame(animate);
        }
        function calculateTransitionStyles(styles, status) {
            return styles[status] || {};
        }
        function goToNextState(status) {
            if (status == exports.ENTERING) {
                performTransition(exports.ENTERED, false);
                return appearStatus.current = exports.ENTERED;
            }
            else if (status == exports.EXITING) {
                performTransition(exports.EXITED, true);
                return appearStatus.current = exports.EXITED;
            }
            ;
        }
        ;
        return react_1.default.createElement("div", {
            style: Object.assign(Object.assign({}, currentStyle), { transition: `all 100ms ${transitionType}` }),
            //...props
        }, children);
    };
    return DynamicStyledComponent;
};
exports.Transition = Transition;
