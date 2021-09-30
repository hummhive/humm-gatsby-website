import React from 'react'
import { Link } from 'gatsby'
import LogoImg from "../../images/logo.png"
import NavCodeImg from "../../images/nav-code.png"
import NavMoreImg from "../../images/nav-more.png"
import NavOpenImg from "../../images/nav-open.png"
import IconSaveImg from "../../images/icon-save.png"
import FloatingBeeImg from "../../images/float_bee.png"
import './style.scss'

interface Props {
  title: string
  location: Location
}

const Navibar: React.FC<Props> = ({ location, title }: Props) => {
  return (
    <div className="header">
    <div className="header-bg">
      <div className="container-xl">
      <nav className="navbar">
          <Link className="text-center" to="/">
            <img className="logo" src={LogoImg} />
          </Link>
          <div className="">
          </div>
      </nav>
      <div className="decent-text" data-sal="fade" data-sal-delay="50" data-sal-duration="2000">Decentralised content management for
  creating and sharing however you want</div>
  <div className="floating-bee" data-sal="zoom-in" data-sal-delay="50" data-sal-duration="1200"><img src={FloatingBeeImg} /></div>
  <div className="cta-top" data-sal="fade" data-sal-delay="750" data-sal-duration="1000">
  <a className="cta-top-button" href="/contact">
  <span><svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.5788 13.3922L21.111 18.2656V0H16.8888V18.2656L11.421 13.3922L8.44434 16.0556L18.9999 25.5L29.5555 16.0556L26.5788 13.3922ZM33.7778 30.2222V17H38V30.2222C38 32.3 36.1 34 33.7778 34H4.22222C1.9 34 0 32.3 0 30.2222V17H4.22222V30.2222H33.7778Z" />
</svg> Get Early Access</span>
  </a>
  <div className="holochain-msg">First & Original Holochain App</div>
  </div>
    </div></div></div>
  )
}

export default Navibar
