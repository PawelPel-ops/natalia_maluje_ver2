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
                        <Btn 
                            to='linkToOferta'
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-60} 
                        >Sprawdź jak zostać najszczęśliwszą kobietą</Btn>
                        <ContactWrapper>
                            <Tel>570 878 028</Tel>
                            <SocialIcon>
                                <a href='https://www.facebook.com/Stylizacja-Paznokci_Natalia-Piotrowicz-110107153737362/' target='_blank' rel='noopener noreferrer'>
                                    <FaFacebook />
                                </a>
                                <a href='https://www.instagram.com/stylizacja_paznokci_natalia_p/' target='_blank' rel='noopener noreferrer'>
                                    <FaInstagram />
                                </a>
                            </SocialIcon>
                        </ContactWrapper>
                    </HeroContent>
                </HeroContainer>
            </HeroSection>
        </>
    )
}

export default Hero
