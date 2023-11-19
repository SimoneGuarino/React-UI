import React from 'react';
import styled from '@emotion/styled';

interface DynamicStyledProps {
  component: keyof JSX.IntrinsicElements;
  name: string;
  slot: string;
  style?: React.CSSProperties; // Aggiungi la prop 'style'
}

export const generateDynamicStyled = ({ component, name, slot, style }: DynamicStyledProps) => {
  // Definisci il tipo delle proprietà per includere 'children'
  interface DynamicStyledComponentProps {
    children?: React.ReactNode;
    sx?: React.CSSProperties; // Dichiarare 'style' come opzionale anche qui
  }

  const DynamicStyledComponent: React.FC<DynamicStyledComponentProps> = ({ children, ...props }) => {
    // Usa le variabili component, name, slot come necessario
    const CustomComponent = component as keyof JSX.IntrinsicElements;

    // Combina gli stili in linea con gli eventuali stili passati come prop
    const combinedStyles: React.CSSProperties = { ...style, ...props.sx };

    return React.createElement(CustomComponent, { name, slot, style: combinedStyles, ...props }, children);
  };

  return DynamicStyledComponent;
};