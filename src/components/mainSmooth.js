import React from 'react'
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import AboutMe from "./AboutMe"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import Footer from "./Footer"
import "./style.css"
 
const SmoothScroll = () => (
  <div>
    <nav className="navbar sticky-top navbar-light bg-light">
        <ul>
            <li><AnchorLink offset='60' href='#about'>About</AnchorLink></li>
            <li><AnchorLink offset='60' href='#portfolio'>Portfolio</AnchorLink></li>
            <li><AnchorLink offset='60' href='#contact'>Contact</AnchorLink></li>
        </ul>
    </nav>

    <section id='about'>
      <AboutMe />
    </section>
    <section id='portfolio'>
      <Portfolio />
    </section>
    <section id='contact'>
      <Contact />
    </section>

    <Footer />
  </div>
)
 

export default SmoothScroll;