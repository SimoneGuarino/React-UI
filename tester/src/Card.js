import React from 'react';

import { Surface, Fade, Group, Typology } from '@sun-ui/react'
import avatar from './no-image.webp';

export function Card() {
    const [active, setActive] = React.useState(true);
    const [expand, setExpand] = React.useState(false);

    return <>
        <button style={{ marginBottom: '30px' }} onClick={() => setActive(!active)}>Animation: {active.toString()}</button>
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
                        <Fade in={expand} timeEnter={200}>
                            <Group gap={1} p={4} sx={{paddingTop: 0}} overflow='auto' height={160}>
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

            <Surface elevation={0} width={350} sx={{ backgroundColor: '#fff' }}>
                <Typology component={'p'} p={5} dependbyparent={"true"}>Lorem Ipsum è un testo segnaposto
                    utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato
                    il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo
                    prese una cassetta di caratteri e li assemblò per preparare un testo campione.
                    del Lorem Ipsum.
                </Typology>
            </Surface>
        </Fade>
    </>
}