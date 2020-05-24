import React from 'react'
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import AboutMe from "./AboutMe"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import "./style.css"
 
const SmoothScroll = () => (
  <div>
    <nav className="navbar sticky-top navbar-light bg-light">
    <AnchorLink offset='100' href='#about'>About</AnchorLink>
    <AnchorLink offset='100' href='#portfolio'>Portfolio</AnchorLink>
    <AnchorLink offset='100' href='#contact'>Contact</AnchorLink>
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
  </div>
)
 

export default SmoothScroll;