import React from 'react';
export interface DynamicStyledComponentProps {
    children?: React.ReactNode;
    sx?: React.CSSProperties;
    [key: string]: any;
}
export interface DynamicStyledProps {
    component: keyof JSX.IntrinsicElements;
    name: string;
    slot: string;
    style?: React.CSSProperties;
    additionalStyle?: (props: {
        ownerState: any;
    }) => React.CSSProperties;
}
export declare const generateDynamicStyled: (props: DynamicStyledProps) => React.FC<DynamicStyledComponentProps>;
