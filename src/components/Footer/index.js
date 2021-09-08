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
                            <FaFacebook />
                            <FaInstagram />
                        </SocialMediaIcons>
                        <LogoWrapper>
                            <Logo src={logo_img} alt="Stylizacja Paznokci Natalia Piotrowicz"/>
                            <Text>© {new Date().getFullYear()} All rights reserved.</Text>
                        </LogoWrapper>
                        <AuthorData>
                            <Text>Projekt i wykonanie:</Text>
                            <AuthorLogo>Logo</AuthorLogo>
                        </AuthorData>
                    </FooterContent>
                </FooterContainer>
            </FooterSection>
        </>
    )
}

export default Footer
