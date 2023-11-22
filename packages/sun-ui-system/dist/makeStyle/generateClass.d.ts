/// <reference types="react" />
export interface ConvertToKebabCaseProp {
    objToTransform: {
        [key: string]: any;
    };
    className: string;
}
export declare const GenerateActionsClass: React.FC<ConvertToKebabCaseProp>;
