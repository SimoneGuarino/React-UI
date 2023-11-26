import React from 'react';
export declare const UNMOUNTED = "unmounted";
export declare const ENTERING = "entering";
export declare const ENTERED = "entered";
export declare const EXITING = "exiting";
export declare const EXITED = "exited";
interface TransitionStyles {
    entering: React.CSSProperties;
    entered: React.CSSProperties;
    exiting: React.CSSProperties;
    exited: React.CSSProperties;
}
export interface DynamicStyledComponentProps {
    children?: React.ReactNode;
    [key: string]: any;
}
export interface DynamicStyledProps {
    transitionType: String;
    transitionStyles: TransitionStyles;
    additionalStyle?: (props: {
        ownerState: any;
    }) => any;
}
export declare const Transition: (props: DynamicStyledProps) => React.FC<DynamicStyledComponentProps>;
export {};
