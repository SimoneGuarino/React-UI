// dist/generateDynamicStyled/index.d.ts
import React from 'react';

interface DynamicStyledProps {
  component: string;
  name: string;
  slot: string;
}

interface DynamicStyledComponentProps {
  children?: React.ReactNode;
}

export const generateDynamicStyled: ({ component, name, slot }: DynamicStyledProps) => React.FC<DynamicStyledComponentProps>;