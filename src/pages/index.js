import React, { useState, Suspense, lazy } from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import Modal from '../components/Gallery/Modal'
import { Images } from '../components/Gallery/GalleryData'

const About = lazy(() => import('../components/About'))
const FirstQuote = lazy(() => import('../components/FirstQuote'))
const Icons = lazy(() => import('../components/Icons'))
const SecondQuote = lazy(() => import('../components/SecondQuote'))
const ThreeCards = lazy(() => import('../components/ThreeCards'))
const Prices = lazy(() => import('../components/Prices'))
const Contact = lazy(() => import('../components/Contact'))
const Comments = lazy(() => import('../components/Comments'))
const Footer = lazy(() => import('../components/Footer'))

const Home = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null)

    return (
        <>
            <Nav />
            <Hero />
            <Suspense fallback={<div>Wczytywanie...</div>}>
                <About />
                <FirstQuote />
                <Icons />
                <SecondQuote />
                <ThreeCards />
                <Prices />
                <Contact />
            </Suspense>
            <Gallery setSelectedImg={setSelectedImg} setSelectedIndex={setSelectedIndex} Images={Images}/>
                { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} selectedIndex={selectedIndex} Images={Images}/> }
            <Suspense fallback={<div>Wczytywanie...</div>}>
                <Comments />
                <Footer />
            </Suspense>
            
        </>
    )
}

export default Home
