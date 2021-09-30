import { Link } from 'gatsby'
import React from 'react'
import LogoImg from "../../images/logo.png"
import NavOpenImg from "../../images/nav-open.png"
import './style.scss'

const Footer = () => {
  return(
  <div className="footer">
    <div className="container">
    <img className="logo" src={LogoImg} />
    </div>
  </div>
)
}

export default Footer
