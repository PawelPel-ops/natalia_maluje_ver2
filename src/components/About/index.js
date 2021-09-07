import React from 'react'
import { 
    AboutSection,
    AboutContainer,
    AboutContent,
    ImagesWrapper,
    Background,
    Images,
    Border,
    ContentWrapper,
    Header,
    BHeader,
    Text
 } from './AboutE'
 import abi from '../../images/aboutMe.jpg'

const About = () => {
    return (
        <>
            <AboutSection>
                <AboutContainer>
                    <AboutContent>
                        <ImagesWrapper>
                            <Background />
                            <Images src={abi}/>
                            <Border />
                        </ImagesWrapper>
                        <ContentWrapper>
                            <Header>Stylizacja paznokci - Natalia Piotrowicz</Header>
                            <BHeader>Kilka słów o mnie</BHeader>
                            <Text>Cześć, mam na imię Natalia. Stylizacją paznokci interesuję się od kilku lat, ukończyłam w tym zakresie kilka szkoleń i wpadłam na pomysł by połączyć przyjemne z pożytecznym, dlatego też postanowiłam zajmować się tym zawodowo.</Text>
                            <Text>Od ponad roku jest to moja praca, którą swoją drogą uwielbiam. Zawsze w życiu chciałam robić coś co będzie sprawiało przyjemność i dawało satysfakcję, tak właśnie jest gdy wykonuję stylizację swoim klientkom. A największą zapłatą jest uśmiech na twarzy.</Text>
                            <Text>Jeśli nie miałyśmy jeszcze okazji się poznać, zapraszam serdecznie do kontaktu.</Text>
                        </ContentWrapper>
                    </AboutContent>
                </AboutContainer>
            </AboutSection>
        </>
    )
}

export default About
