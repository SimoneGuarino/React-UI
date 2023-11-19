// dist/generateDynamicStyled/index.d.ts

interface DynamicStyledProps {
  component: string;
  name: string;
  slot: string;
  style?: React.CSSProperties; // Aggiungi la prop 'style'
}

interface DynamicStyledComponentProps {
  children?: React.ReactNode;
}

export const generateDynamicStyled: ({ component, name, slot, style }: DynamicStyledProps) => React.FC<DynamicStyledComponentProps>;