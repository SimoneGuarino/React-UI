export interface ConvertToKebabCaseProp {
    objToTransform: {
        [key: string]: any;
    };
}
export declare function ConvertToKebabCase({ objToTransform }: ConvertToKebabCaseProp): Record<string, any>;
