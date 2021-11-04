import React from 'react'
import {IconsD} from './IconsData'
import {
    IconsSection,
    OpacityText,
    IconsContainer,
    IconsContent,
    Box,
    SvgWrapper,
    Image,
    Text,
} from './IconsE'

const Icons = () => {
    return (
        <>
            <IconsSection>
                <OpacityText>EUTY</OpacityText>
                <IconsContainer>
                    <IconsContent>
                        {IconsD.map((element, index) => {
                            return (
                                <Box key={index}>
                                    <SvgWrapper className='wrapper'>
                                        <Image src={element.src} className='image' alt='Stylizacja Paznokci Natalia Icons'/>
                                    </SvgWrapper>
                                    <Text className='tekst'>{element.text}</Text>
                                </Box>
                            )
                        })}
                    </IconsContent>
                </IconsContainer>
                <OpacityText>BEU</OpacityText>
            </IconsSection>
        </>
    )
}

export default Icons
