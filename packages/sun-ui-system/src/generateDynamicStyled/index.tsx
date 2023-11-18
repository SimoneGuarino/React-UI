import React from 'react';

interface DynamicStyledProps {
  component: string;
  name: string;
  slot: string;
}

export const generateDynamicStyled = ({ component, name, slot }: DynamicStyledProps) => {
  // Definisci il tipo delle proprietà per includere 'children'
  interface DynamicStyledComponentProps {
    children?: React.ReactNode;
  }

  const DynamicStyledComponent: React.FC<DynamicStyledComponentProps> = (props) => {
    // Usa le variabili component, name, slot come necessario
    const CustomComponent = component as keyof JSX.IntrinsicElements;
    return React.createElement(CustomComponent, { name, slot, ...props }, props.children);
  };

  return DynamicStyledComponent;
};

// Usa la funzione generata per creare stili dinamici
/*const DynamicStyledComponent1 = generateDynamicStyled({
  component: 'div',
  name: 'SUN-UI-surface',
  slot: 'Root1',
});*/