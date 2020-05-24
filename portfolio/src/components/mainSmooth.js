import React from 'react'
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import AboutMe from "./AboutMe"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
 
const SmoothScroll = () => (
  <div>
    <AnchorLink href='#about'>About</AnchorLink>
    <AnchorLink href='#portfolio'>Portfolio</AnchorLink>
    <AnchorLink href='#contact'>Contact</AnchorLink>

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
 
// ReactDOM.render(
//   <SmoothScroll />,
//   document.getElementById('content')
// )

export default SmoothScroll;