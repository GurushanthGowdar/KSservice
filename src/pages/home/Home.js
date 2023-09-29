import React from 'react'
import Header from '../../components/header/Header'
import About from '../about/About'
import Service from '../service/Service'
import Career from '../career/Career'
import Training from '../training/Training'
import Contact from '../contact/Contact'

const Home = () => {
    return (
        <div>
            <Header />
            <div className="bg-home-main w-full flex items-center justify-center" style={{ height: '495px' }}>
                <h1>
                    Hero section(video/sliding window pics)
                </h1>

            </div>
            <About />
            <Service />
            <Career />
            <Training />
            <Contact />
        </div>
    )
}

export default Home