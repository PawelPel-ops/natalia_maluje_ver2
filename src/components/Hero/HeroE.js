import styled from 'styled-components'
import { Link } from 'react-scroll'
import back_img from '../../images/background_stylizacja9.jpg'

export const HeroSection = styled.section`
    background: url(${back_img}) center;
    max-width: 100vw;
    height: calc(100vh - 60px);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
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
    margin: 10vh 100px 0;
    font-size: 3.4rem;
    text-align: center;
    letter-spacing: .4rem;
    font-weight: normal;
`

export const Btn = styled(Link)`
    color: #fff;
    margin: 10vh auto 0;
    background-color: #9c7194;
    font-size: 1.4rem;
    padding: 10px 40px;
    transition: all .25s ease-in-out;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 3px 5px 11px rgba(0,0,0,.5);

    &:hover {
        background-color: #fff;
        color: #9c7194;
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
`

export const Tel = styled.span`
    margin: auto 100px;
    font-size: 1.4rem;
`

export const SocialIcon = styled.div`
    margin: auto 100px;

    svg {
        margin-left: 20px;
        font-size: 1.6rem;
        cursor: pointer;
        transition: all .25s ease-in-out;

        &:hover {
            font-size: 1.8rem;
            margin-left: 17px;
        }
    }
`