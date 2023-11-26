import { generateDynamicStyled } from "@sun-ui/system/dist/generateDynamicStyled";

export const Surface = generateDynamicStyled({
  component: 'div',
  name: 'sun-ui-surface',
  slot: 'sun-ui-surface',
  sx: {  padding: "32px",
  backgroundColor: "hotpink",
  fontSize: "24px",
  borderRadius: "4px",
  color: "black",
  fontWeight: "bold",
  transition: "width 100ms linear, height 100ms linear, box-shadow 250ms ease-in-out" },
  additionalStyle: ({ ownerState }) => ({
    boxShadow: `0px 0px ${ownerState.elevation * 5}px 0px rgb(0 0 0 / 46%)`, 
    transform: `translate3d(0px, 0px, ${ownerState.elevation * 5}px)`
  }),
});