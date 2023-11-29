import React from 'react';
import { makeStyle } from '../makeStyle';
import { ConvertToKebabCase } from '../utils/convertToKebabCase';

//import { jsx, css } from '@emotion/react'
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
  additionalStyle?: (props: { ownerState: any }) => React.CSSProperties | any;
}

const generateRandomClassName = (name: string) => {
  const randomString = Math.random().toString(36).substring(2, 8);
  return `css-${randomString}-${name}`;
};


export const generateDynamicStyled: (
  props: DynamicStyledProps
) => React.FC<DynamicStyledComponentProps> = ({ component, name, slot, sx, additionalStyle }) => {
  const DynamicStyledComponent: React.FC<DynamicStyledComponentProps> = ({ children, ...props }) => {
    const CustomComponent = component || props.component as keyof JSX.IntrinsicElements;

    const combinedStyles: React.CSSProperties = { ...props.style,  }; // ...props.sx
    const combinedSxStyles : React.CSSProperties = { ...sx }; // ...props.sx

    if (additionalStyle) {
      const additionalStyles = ConvertToKebabCase({objToTransform : additionalStyle({ ownerState: props })});
      Object.assign(combinedSxStyles, additionalStyles);
    }
    if(props.sx){
      Object.assign(combinedSxStyles, props.sx);
    }

    //generate random class and asign the class to useState for remember that
    const [randomClassName, setRandomClassName] = React.useState<string>(() => generateRandomClassName(name));
    //detectChange 
    const detectChange = React.useRef<object>();

    //create a class when the props.sx change
    //checks if the style element is actually different at each re-rendering
    //if it is generate the style + save it in the useRef
    if(JSON.stringify(detectChange.current) !== JSON.stringify(combinedSxStyles)){
      detectChange.current = combinedSxStyles;
      makeStyle({ className: randomClassName, style: {...combinedSxStyles} });
    };


    return React.createElement(CustomComponent, {
      name,
      slot,
      style: combinedStyles,
      className: randomClassName, // Assign the random class name here
      ...props
    }, children);
  };

  return DynamicStyledComponent;
};