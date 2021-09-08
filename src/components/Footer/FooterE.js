import styled from "styled-components";

export const FooterSection = styled.section`
    background-color: #9c7194;
    display: flex;
    justify-content: center;
`

export const FooterContainer = styled.div`
    max-width: 1300px;
    width: 100%;
`

export const FooterContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const SocialMediaIcons = styled.div`
    color: #fff;
    font-size: 1.8rem;
    display: flex;
    justify-content: center;

    svg {
        margin: auto 10px;

        &:hover{
            font-size: 2rem;
            transition: all .25s ease;
        }
    }
`

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const Logo = styled.img`
    height: 60px;
    margin: 5px auto;  
`

export const Text = styled.span`
    font-size: .8rem;
    color: #fff;
`

export const AuthorData = styled.div`
    display: flex;
    justify-content: center;
`

export const AuthorLogo = styled.span`
    font-size: .8rem;
    color: #fff;
`