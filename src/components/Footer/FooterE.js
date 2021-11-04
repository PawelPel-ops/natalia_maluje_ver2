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
    margin: 10px auto;

    @media screen and (max-width: 480px){
        flex-direction: column;
    }
`

export const SocialMediaIcons = styled.div`
    color: #fff;
    font-size: 1.8rem;
    display: flex;
    justify-content: center;
    margin-left: 30px;

    @media screen and (max-width: 768px){
        margin-left: 10px;
        font-size: 1.6rem;
    }

    @media screen and (max-width: 480px){
        margin: 10px 0;
    }

    svg {
        margin: auto 10px;
        cursor: pointer;
        color: #fff;

        @media screen and (max-width: 480px){
            margin: 10px;
        }

        &:hover{
            transform: scale(1.4);
            transition: all .25s ease;
        }
    }
`

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        margin: 10px 0;
    }
`

export const Logo = styled.img`
    height: 50px;
    margin: 5px auto;  

    @media screen and (max-width: 480px){
        height: 40px;
    }
`

export const Text = styled.span`
    font-size: .8rem;
    color: #fff;

    @media screen and (max-width: 480px){
        font-size: .7rem;
    }
`

export const AuthorData = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 30px;

    @media screen and (max-width: 1024px){
        flex-direction: column;
    }

    @media screen and (max-width: 768px){
        margin-right: 10px;
    }

    @media screen and (max-width: 1024px){
        flex-direction: row;
    }
`

export const AuthorLogo = styled.a`
    font-size: .8rem;
    color: #fff;
    cursor: pointer;
    text-decoration: none;

    @media screen and (max-width: 480px){
        font-size: .7rem;
    }

    &:hover{
        color: #000;
        text-decoration: underline;
        transition: all .25s ease;
    }
`