import { generateDynamicStyled } from "@sun-ui/system/dist/generateDynamicStyled";

export const Surface = generateDynamicStyled({
  component: 'div',
  name: 'my-div',
  slot: 'my-slot',
  style: { color: 'yellow', fontSize: '16px' }
});