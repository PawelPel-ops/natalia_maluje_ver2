import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import logo_img from '../../images/logo_natalia2.png'
import {
    FooterSection,
    FooterContainer,
    FooterContent,
    SocialMediaIcons,
    LogoWrapper,
    Logo,
    Text,
    AuthorData,
    AuthorLogo
} from './FooterE'

const Footer = () => {
    return (
        <>
            <FooterSection>
                <FooterContainer>
                    <FooterContent>
                        <SocialMediaIcons>
                            <a href='https://www.facebook.com/Stylizacja-Paznokci_Natalia-Piotrowicz-110107153737362/' target='_blank' rel='noopener noreferrer'>
                                <FaFacebook />
                            </a>
                            <a href='https://www.instagram.com/stylizacja_paznokci_natalia_p/' target='_blank' rel='noopener noreferrer' >
                                <FaInstagram />
                            </a>
                        </SocialMediaIcons>
                        <LogoWrapper>
                            <Logo src={logo_img} alt="Stylizacja Paznokci Natalia Piotrowicz"/>
                            <Text>© {new Date().getFullYear()} All rights reserved.</Text>
                        </LogoWrapper>
                        <AuthorData>
                            <Text>Projekt i wykonanie:&nbsp;</Text>
                            <AuthorLogo href='https://wah.netlify.app/' target='_blank'>Web App House</AuthorLogo>
                        </AuthorData>
                    </FooterContent>
                </FooterContainer>
            </FooterSection>
        </>
    )
}

export default Footer
