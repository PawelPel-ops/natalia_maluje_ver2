import React from 'react'
import { Cards } from './ThreeCardsData'
import {
    ThreeCardsSection,
    ThreeCardsContainer,
    ThreeCardsContent,
    Box,
    ImageWrapper,
    Background,
    Image,
    Border,
    ContentWrapper,
    Header,
    Text,
    OpacityText,
    IconS
} from './ThreeCardsE'
import l1 from '../../images/l1.png'

const ThreeCards = () => {
    return (
        <>
            <ThreeCardsSection>
                <ThreeCardsContainer>
                    <ThreeCardsContent>
                        {Cards.map((element, index) =>{
                            return (
                                <Box key={index}>
                                    <ImageWrapper>
                                        <Background />
                                        <Image src={element.src} />
                                        <Border />
                                    </ImageWrapper>
                                    <ContentWrapper>
                                        <Header>{element.head}</Header>
                                        <Text>{element.des}</Text>
                                    </ContentWrapper>
                                </Box>
                            )
                        })}
                    </ThreeCardsContent>
                </ThreeCardsContainer>
                <OpacityText>BEUT</OpacityText>
                <IconS src={l1} />
            </ThreeCardsSection>
        </>
    )
}

export default ThreeCards
