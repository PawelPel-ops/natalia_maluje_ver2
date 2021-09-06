import React, { useState } from 'react'
import { 
    NavSection, 
    NavContainer, 
    NavContent,
    LogoWrapper,
    Logo,
    BurgerWrapper,
    Line,
    MenuWrapper,
    MenuElement,
    LinkS
} from './NavE'
import logo_img from '../../images/logo_natalia2.png'

const Nav = () => {
    const [open, setOpen] = useState(false)

    const openMobile = () => {
        setOpen(!open)
    }
    return (
        <>
            <NavSection>
                <NavContainer>
                    <NavContent>
                        <LogoWrapper>
                            <Logo src={logo_img} alt="Stylizacja Paznokci Natalia Piotrowicz"/>
                        </LogoWrapper>
                        <BurgerWrapper onClick={openMobile}>
                            <Line open={open}/>
                            <Line open={open}/>
                            <Line open={open}/>
                        </BurgerWrapper>
                        <MenuWrapper open={open}>
                            <MenuElement>
                                <LinkS to='/'>O mnie</LinkS>
                            </MenuElement>
                            <MenuElement>
                                <LinkS to='/'>Oferta</LinkS>
                            </MenuElement>
                            <MenuElement>
                                <LinkS to='/'>Cennik</LinkS>
                            </MenuElement>
                            <MenuElement>
                                <LinkS to='/'>Galeria</LinkS>
                            </MenuElement>
                            <MenuElement>
                                <LinkS to='/'>Kontakt</LinkS>
                            </MenuElement>
                        </MenuWrapper>
                    </NavContent>
                </NavContainer>
            </NavSection>
        </>
    )
}

export default Nav
