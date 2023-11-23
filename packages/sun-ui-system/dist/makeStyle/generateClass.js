"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateActionsClass = void 0;
const findRules_1 = require("./findRules");
const GenerateActionsClass = ({ objToTransform, className }) => {
    const styleSheet = document.styleSheets[0]; // Sostituisci con l'oggetto CSSStyleSheet a cui desideri aggiungere o modificare la regola :hover
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
                const existingRuleIndex = (0, findRules_1.findRuleIndexBySelector)(styleSheet, `.${className}`);
                if (existingRuleIndex !== -1) {
                    // Sovrascrivi i valori della regola esistente
                    styleSheet.deleteRule(existingRuleIndex);
                }
                styleSheet.insertRule(dynamicStyle, styleSheet.cssRules.length);
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
