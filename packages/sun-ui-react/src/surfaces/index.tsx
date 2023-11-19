import { generateDynamicStyled } from "@sun-ui/system/dist/generateDynamicStyled";

export const Surface = generateDynamicStyled({
  component: 'div',
  name: 'my-div',
  slot: 'my-slot',
  style: { background: '#fff', fontSize: '16px' },
  additionalStyle: ({ ownerState }) => ({ padding: ownerState.elevation }),
});