import { generateDynamicStyled } from "@sun-ui/system/dist/generateDynamicStyled";

export const Surface = generateDynamicStyled({
  component: 'div',
  name: 'my-div',
  slot: 'my-slot',
});