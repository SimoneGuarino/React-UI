import React from 'react';
export interface DynamicStyledComponentProps {
    className: string;
    style: React.CSSProperties;
}
export interface ComposeStyleProps {
    style: React.CSSProperties;
    className: string;
}
export declare const composeStyle: React.FC<ComposeStyleProps>;
export declare const makeStyle: React.FC<DynamicStyledComponentProps>;
