import React from 'react';
/**
 * @param children what is inside of tags
 * @param sx in input the style of elements in addition to the style
 */
export interface DynamicStyledComponentProps {
    children?: React.ReactNode;
    sx?: React.CSSProperties;
    [key: string]: any;
}
export interface DynamicStyledProps {
    component?: keyof JSX.IntrinsicElements;
    name: string;
    slot: string;
    sx?: React.CSSProperties;
    additionalStyle?: (props: {
        ownerState: any;
    }) => React.CSSProperties | any;
}
export declare const generateDynamicStyled: (props: DynamicStyledProps) => React.FC<DynamicStyledComponentProps>;
