import { generateDynamicStyled } from "@sun-ui/system/dist/generateDynamicStyled";

export const Surface = generateDynamicStyled({
  component: 'div',
  name: 'sun-ui-surface',
  slot: 'sun-ui-surface',
  sx: { fontSize: '16px', color: 'black' },
  additionalStyle: ({ ownerState }) => ({ padding: ownerState.elevation }),
});