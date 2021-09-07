import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import FirstQuote from '../components/FirstQuote'
import Icons from '../components/Icons'
import SecondQuote from '../components/SecondQuote'
import ThreeCards from '../components/ThreeCards'
import Prices from '../components/Prices'

const Home = () => {
    return (
        <>
            <Nav />
            <Hero />
            <About />
            <FirstQuote />
            <Icons />
            <SecondQuote />
            <ThreeCards />
            <Prices />
        </>
    )
}

export default Home
