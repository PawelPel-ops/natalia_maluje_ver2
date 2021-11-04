import styled from 'styled-components'
import { Link } from 'react-scroll'

export const NavSection = styled.section`
    background-color: #9c7194;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
`

export const NavContainer = styled.div`
    max-width: 1300px;
    width: 100%;
`

export const NavContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const LogoWrapper = styled.div`
    margin-left: 30px;

    @media screen and (max-width: 480px){
        margin: 0;
    }
`

export const Logo = styled.img`
    height: 60px;

    @media screen and (max-width: 1024px){
        height: 50px;
    }
`

export const BurgerWrapper = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        margin: 0 30px;
        cursor: pointer;
    }

    @media screen and (max-width: 480px){
        margin: 0 10px;
    }
`

export const Line = styled.div`
    width: 25px;
    height: 3px;
    background-color: #000;
    margin: 5px 0;
    border-radius: 5px;
    transition: all .5s ease-in-out;

    &:first-child {
        transform: ${({open}) => (open ? 'rotate(45deg) translateY(11px)' : '0')};
    }

    &:nth-child(2) {
        transform: ${({open}) => (open ? 'translateX(-20px)' : 'none')};
        opacity: ${({open}) => (open ? '0' : '1')};
    }

    &:last-child {
        transform: ${({open}) => (open ? 'rotate(-45deg) translateY(-11px)' : '0')};
    }
`

export const MenuWrapper = styled.ul`
    display: flex;
    margin: auto 30px;
    list-style: none;

    @media screen and (max-width: 768px){
        overflow: hidden;
        flex-direction: column;
        align-items: flex-start;
        width: 30vw;
        margin-left: 70vw;
        max-height: ${({ open }) => (open ? "270px" : "0")};
        transition: all 0.4s ease-in;
        position: absolute;
        top: 60px;
        left: 0;
        background-color: #9c7194;
        box-shadow: -5px 13px 11px rgba(0,0,0,0.6);
    }

    @media screen and (max-width: 480px){
        width: 40vw;
        margin-left: 60vw;
    }
`

export const MenuElement = styled.li`
    padding: 15px;
    position: relative;
    cursor: pointer;
    transition: all .35s ease-in-out;

    &:hover {
        color: #fff;
    }

    &:before {
        content:"";
        position: absolute;
        top: 70%;
        right: 50%;
        width: 0;
        height: 2px;
        transition: all .35s ease-in-out;
    }
    
    &:hover {
        &:before {
            width: 40%;
            background-color: #fff;
        }
    }
    
    &:after {
        content:"";
        position: absolute;
        top: 70%;
        left: 50%;
        width: 0;
        height: 2px;
        transition: all .35s ease-in-out;
    }
    
    &:hover {
        &:after {
            width: 40%;
            background-color: #fff;
        }
    }
`

export const LinkS = styled(Link)`
    font-size: 1.1rem;

    @media screen and (max-width: 1024px){
        font-size: 1rem;
    }
`