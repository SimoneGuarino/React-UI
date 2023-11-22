"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeStyle = exports.composeStyle = void 0;
const convertToKebabCase_1 = require("../utils/convertToKebabCase");
const generateClass_1 = require("./generateClass");
const composeStyle = ({ style, className }) => {
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
    const result = (0, convertToKebabCase_1.ConvertToKebabCase)({ objToTransform: actions });
    if (result) {
        (0, generateClass_1.GenerateActionsClass)({ objToTransform: result, className: className });
    }
    // Converti gli stili React in una stringa di stile valida
    const styleToString = Object.keys(style).filter(e => e[0] !== '&' && e[1] !== ':')
        .map((key) => `${stack[key]}: ${style[key]};`)
        .join(' ');
    return styleToString;
};
exports.composeStyle = composeStyle;
const makeStyle = ({ className, style }) => {
    const styleId = '@sun-ui/Style'; // Puoi cambiare questo id
    // Verifica se il tag style con l'id univoco è già presente nel head
    let styleTag = document.getElementById(styleId);
    if (!styleTag) {
        // Se il tag style non è presente, creane uno nuovo
        styleTag = document.createElement('style');
        styleTag.id = styleId; // Imposta l'id univoco
        document.head.appendChild(styleTag); // Aggiungi il tag style al head
    }
    if (styleTag.textContent != undefined) {
        //if(!styleTag.textContent.includes(className)){
        const styleConverted = (0, exports.composeStyle)({ style: style, className: className });
        // Aggiungi le regole CSS dinamiche alla classe
        const dynamicStyle = `
        .${className} {
          ${styleConverted}
        }
      `;
        // Aggiungi la classe al tag style
        styleTag.textContent += dynamicStyle;
        //}
    }
    return true;
};
exports.makeStyle = makeStyle;
