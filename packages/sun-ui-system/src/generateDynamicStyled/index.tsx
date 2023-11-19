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

interface DynamicStyledProps {
  component: keyof JSX.IntrinsicElements;
  name: string;
  slot: string;
  style?: React.CSSProperties;
  additionalStyle?: (props: { ownerState: any }) => React.CSSProperties;
}

export const generateDynamicStyled: (
  props: DynamicStyledProps
) => React.FC<DynamicStyledComponentProps> = ({ component, name, slot, style, additionalStyle }) => {
  const DynamicStyledComponent: React.FC<DynamicStyledComponentProps> = ({ children, ...props }) => {
    const CustomComponent = component as keyof JSX.IntrinsicElements;

    const combinedStyles: React.CSSProperties = { ...style, ...props.sx };

    if (additionalStyle) {
      const additionalStyles = additionalStyle({ ownerState: props });
      Object.assign(combinedStyles, additionalStyles);
    }

    return React.createElement(CustomComponent, { name, slot, style: combinedStyles, ...props }, children);
  };

  return DynamicStyledComponent;
};