import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Surface, Fade, Group, Typology } from '@sun-ui/react'

import avatar from './no-image.webp';
/*
  sx={
      {
        padding: "32px",
        backgroundColor: "hotpink",
        fontSize: "24px",
        borderRadius: "4px",
        color: "black",
        fontWeight: "bold",
        "&:hover": {
          color: "white",
        }
      }
    }
    style={{transformStyle: "preserve-3d"}}
*/

function App() {
  const [active, setActive] = React.useState(true);
  const [expand, setExpand] = React.useState(false);
  return (
    <div className="App">
      <header className="App-header" style={{transformStyle: "preserve-3d"}}>
        <button style={{marginBottom: '30px'}} onClick={() => setActive(!active)}>Animation: {active.toString()}</button>

        <Fade in={active}>
            <Surface elevation={3} width={350}>
              <Group justifyContent={'space-between'}>

                <Typology component={'span'} dependbyparent={"true"}>
                  <img src={avatar} loading="lazy" style={{ width: '100%' }}></img>
                </Typology>
                <Group backgroundColor={'#fff'} justifyContent={'space-between'} height={expand ? '300px' : '100px'}>
                    <Group direction='row' p={4} justifyContent='space-between'>
                      <Group>
                        <Typology component={'h1'} dependbyparent={"true"}>Title goes here</Typology>
                        <Typology component={'p'} dependbyparent={"true"}>Secondary text</Typology>
                      </Group>
                      <Typology width={60} component={'button'} onClick={() => setExpand(!expand)} dependbyparent={"true"}>
                        ↓
                      </Typology>
                    </Group>
                    <Fade in={expand} timeout={1}>
                      <Group gap={2} p={4} overflow='auto' height={160} style={expand ? {visibidlity:"visible"} : {display: "none"}}>
                        <Typology component={'p'} dependbyparent={"true"}>Lorem Ipsum è un testo segnaposto 
                        utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato 
                        il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo 
                        prese una cassetta di caratteri e li assemblò per preparare un testo campione. 
                        È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, 
                        pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione 
                        dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, 
                        e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni 
                        del Lorem Ipsum.
                        </Typology>
                        <Typology width={60} component={'button'} onClick={() => setExpand(!expand)} dependbyparent={"true"}>
                          Compra Elemento
                        </Typology>
                      </Group>
                    </Fade>
                </Group>


              </Group>
            </Surface>
            <Surface elevation={0} width={350} sx={{backgroundColor : '#fff'}}>
              <Typology component={'p'} p={5} dependbyparent={"true"}>Lorem Ipsum è un testo segnaposto
                utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato
                il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo
                prese una cassetta di caratteri e li assemblò per preparare un testo campione.
                del Lorem Ipsum.
              </Typology>
            </Surface>
        </Fade>


      </header>
    </div>
  );
}

export default App;
