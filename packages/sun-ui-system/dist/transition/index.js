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
        const [currentStyle, setCurrentStyle] = react_1.default.useState({ opacity: 0 });
        let appearStatus = react_1.default.useRef(exports.UNMOUNTED);
        react_1.default.useEffect(() => {
            if (props.in) {
                appearStatus.current = exports.ENTERING;
                updateStatus(true, appearStatus.current);
            }
            else {
                appearStatus.current = exports.EXITING;
                updateStatus(true, appearStatus.current);
            }
            return (() => {
                updateStatus(false, appearStatus.current);
                //cancelNextCallback();
            });
        }, [props.in]);
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
                performTransition(nextStatus, mounting);
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
            if (status == exports.UNMOUNTED) {
                performTransition(exports.ENTERING, false);
                return appearStatus.current = exports.ENTERING;
            }
            else if (status == exports.ENTERING) {
                performTransition(exports.ENTERED, false);
                return appearStatus.current = exports.ENTERED;
            }
            else if (status == exports.EXITING) {
                performTransition(exports.EXITED, true);
                return appearStatus.current = exports.EXITED;
            }
        }
        ;
        /**
         * function that take all styles and marge in one const
         * @param child in input the childs of the component
         * @returns
         */
        const modifyChildrenStyles = (child) => {
            // Estrai lo stile corrente dal figlio, o usa un oggetto vuoto se non c'è uno stile
            const childStyle = Object.assign(Object.assign({}, child.props.style), currentStyle) || {};
            // Aggiungi il nuovo stile a tutte le props di style dei figli
            const updatedStyle = Object.assign(Object.assign({}, childStyle), { transition: `all 100ms ${transitionType}`, transformStyle: "preserve-3d" });
            // Clona l'elemento figlio con lo stile aggiornato
            return react_1.default.cloneElement(child, {
                style: updatedStyle,
            });
        };
        // edit and apply that marged Style on all child component
        const modifiedChildren = react_1.default.Children.map(children, (child) => {
            if (react_1.default.isValidElement(child)) {
                return modifyChildrenStyles(child);
            }
            return child;
        });
        return modifiedChildren;
    };
    return DynamicStyledComponent;
};
exports.Transition = Transition;
