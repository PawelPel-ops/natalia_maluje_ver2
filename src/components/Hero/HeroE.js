import styled from 'styled-components'
import { Link } from 'react-scroll'
import back_img from '../../images/background_stylizacja9.jpg'

export const HeroSection = styled.section`
    background: url(${back_img}) center no-repeat;
    max-width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media screen and (max-width: 1200px){
        background-size: cover;
    }
`

export const HeroContainer = styled.div`
    max-width: 1300px;
    width: 100%;
    height: 100%;
`

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Header = styled.h1`
    color: #fff;
    margin: 15vh 100px 0;
    font-size: 2rem;
    text-align: center;
    letter-spacing: .3rem;
    font-weight: normal;

    @media screen and (max-width: 1200px){
        margin: 100px 100px 0;
        font-size: 1.6rem;
        letter-spacing: .2rem;
    }

    @media screen and (max-width: 768px){
        margin: 100px 50px 0;
        font-size: 1.4rem;
        letter-spacing: .1rem;
    }
`

export const Btn = styled(Link)`
    color: #fff;
    margin: 10vh auto 0;
    background-color: #9c7194;
    font-size: 1.2rem;
    letter-spacing: .1rem;
    padding: 10px 40px;
    transition: all .25s ease-in-out;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 3px 5px 11px rgba(0,0,0,.5);

    &:hover {
        background-color: #fff;
        color: #9c7194;
    }

    @media screen and (max-width: 1200px){
        font-size: 1rem;
        padding: 8px 36px;
    }

    @media screen and (max-width: 768px){
        font-size: .9rem;
        padding: 6px 32px;
    }

    @media screen and (max-width: 480px){
        font-size: .8rem;
        padding: 6px 20px;
        letter-spacing: 0;
    }
`

export const ContactWrapper = styled.div`
    color: #fff;
    position: absolute;
    bottom: 20px;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 480px){
        bottom: 20px;
    }
`

export const Tel = styled.span`
    margin: auto 100px;
    font-size: 1.4rem;

    @media screen and (max-width: 768px){
        font-size: 1rem;
        margin: auto 50px;
    }

    @media screen and (max-width: 480px){
        margin: auto 20px;
        font-size: 1.2rem;
    }
`

export const SocialIcon = styled.div`
    margin: auto 100px;

    @media screen and (max-width: 480px){
        margin: auto 20px;
    }

    svg {
        margin-left: 20px;
        font-size: 1.6rem;
        cursor: pointer;
        transition: all .25s ease-in-out;
        color: #fff;

        @media screen and (max-width: 768px){
            font-size: 1.2rem;
        }

        @media screen and (max-width: 480px){
            font-size: 1.8rem;
        }

        &:hover {
            transform: scale(1.3);
        }
    }
`