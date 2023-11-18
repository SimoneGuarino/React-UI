import React from 'react';
import { generateDynamicStyled } from "../../../sun-ui-system/src/createComponent/index"

// Ora puoi usare generateDynamicStyled come desiderato
const DynamicStyledComponent1 = generateDynamicStyled({
    component: 'span',
    name: 'SUN-UI-surface',
    slot: 'Root2',
  });

// Esempio di utilizzo nel tuo componente React
const Surface = () => {
    return (
        <DynamicStyledComponent1>
          CIAOOO
        </DynamicStyledComponent1>
    );
  };
  
  export default Surface;