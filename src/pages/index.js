import React, { useState } from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import FirstQuote from '../components/FirstQuote'
import Icons from '../components/Icons'
import SecondQuote from '../components/SecondQuote'
import ThreeCards from '../components/ThreeCards'
import Prices from '../components/Prices'
import Contact from '../components/Contact'
import Gallery from '../components/Gallery'
import Modal from '../components/Gallery/Modal'
import { Images } from '../components/Gallery/GalleryData'
import Comments from '../components/Comments'
import Footer from '../components/Footer'

const Home = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null)

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
            <Contact />
            <Gallery setSelectedImg={setSelectedImg} setSelectedIndex={setSelectedIndex} Images={Images}/>
            { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} selectedIndex={selectedIndex} Images={Images}/> }
            <Comments />
            <Footer />
        </>
    )
}

export default Home
