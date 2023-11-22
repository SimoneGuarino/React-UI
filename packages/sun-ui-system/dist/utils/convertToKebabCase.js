"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvertToKebabCase = void 0;
function ConvertToKebabCase({ objToTransform }) {
    const convertedObject = {}; // Usa 'any' per i valori
    for (const key in objToTransform) {
        const x = objToTransform[key];
        // Assicurati che x sia un oggetto
        if (typeof x === 'object' && x !== null) {
            const convertedInnerObject = {};
            for (const innerKey in x) {
                const innerValue = x[innerKey];
                const kebabCaseInnerKey = innerKey.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                convertedInnerObject[kebabCaseInnerKey] = innerValue;
            }
            convertedObject[key] = convertedInnerObject;
        }
        else {
            console.error(`Tipo inaspettato per la proprietà ${key}`);
        }
    }
    return convertedObject;
}
exports.ConvertToKebabCase = ConvertToKebabCase;
