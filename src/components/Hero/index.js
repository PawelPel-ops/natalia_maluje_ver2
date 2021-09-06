import React from 'react'
import {
    HeroSection,
    HeroContainer,
    HeroContent,
    Header,
    Btn,
    ContactWrapper,
    Tel,
    SocialIcon
} from './HeroE'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Hero = () => {
    return (
        <>
            <HeroSection>
                <HeroContainer>
                    <HeroContent>
                        <Header>Najszczęśliwsze kobiety zawsze mają najpiękniejsze paznokcie</Header>
                        <Btn>Sprawdź jak zostać najszczęśliwszą kobietą</Btn>
                        <ContactWrapper>
                            <Tel>570 878 028</Tel>
                            <SocialIcon>
                                <FaFacebook />
                                <FaInstagram />
                            </SocialIcon>
                        </ContactWrapper>
                    </HeroContent>
                </HeroContainer>
            </HeroSection>
        </>
    )
}

export default Hero
