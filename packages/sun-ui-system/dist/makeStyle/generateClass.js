"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateActionsClass = void 0;
const GenerateActionsClass = ({ objToTransform, className }) => {
    const styleId = '@sun-ui/Style';
    let styleTag = document.getElementById(styleId);
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = styleId;
        document.head.appendChild(styleTag);
    }
    for (const keyMainObject in objToTransform) {
        if (objToTransform.hasOwnProperty(keyMainObject)) {
            const styles = objToTransform[keyMainObject];
            if (typeof styles === 'object' && styles !== null) {
                const classSelector = `.${className}${keyMainObject.slice(1)}`;
                // Converti gli stili React in una stringa di stile valida
                const styleToString = Object.keys(styles)
                    .map((key) => `${key}: ${styles[key]};`)
                    .join(' ');
                // Aggiungi le regole CSS dinamiche alla classe
                const dynamicStyle = `
                        ${classSelector} {
                            ${styleToString}
                        }
                    `;
                styleTag.textContent += dynamicStyle;
            }
            else {
                console.error(`Tipo inaspettato per le proprietà di stile di ${keyMainObject}`);
                return false;
            }
        }
    }
    return true;
};
exports.GenerateActionsClass = GenerateActionsClass;
