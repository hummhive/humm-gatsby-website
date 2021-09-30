import React from 'react'
import './style.scss'
import IconSaveImg from "../../images/icon-save.png"
import FlowerImages from "../../images/hive-tree-footer-mobile.png"
import BgTree from '../../images/bg-tree.png'

const HiveTreeSection = () => {
  return (
    <div className="hive-tree-section">
        <div className="hive-tree-section-bg">
        <img className="img-tree hide-on-breakpoint" src={BgTree} />
        </div>
        <div className="hive-tree-section-padding">
      <div className="hive-tree-section-title" data-sal="slide-up" data-sal-delay="400" data-sal-duration="500"><span className="highlight-hive">Hives</span> adapt to your needs</div>
      <div className="hive-tree-hidden-sidebar"></div>
      <div className="hive-tree-section-content" data-sal="fade" data-sal-delay="50" data-sal-duration="500">
      <p>Because your Hive's content lives offline first,
    Plugins help you seamlessly create and share with many different products and services.</p>

    <p>Plugins for Hives make it easy to change how you -</p>
    <ul>
    <li>Create</li>
    <li>Share</li>
    <li>Generate Websites</li>
    <li>Accept Payment</li>
    <li>Backup and Host Content   <br /> & More</li>
    </ul>

    <div className="hive-tree-section-request">
    Buzzin’ to Make a Hive? <br />
    <a className="cta-footer-button" href="/contact">
    <span><svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.5788 13.3922L21.111 18.2656V0H16.8888V18.2656L11.421 13.3922L8.44434 16.0556L18.9999 25.5L29.5555 16.0556L26.5788 13.3922ZM33.7778 30.2222V17H38V30.2222C38 32.3 36.1 34 33.7778 34H4.22222C1.9 34 0 32.3 0 30.2222V17H4.22222V30.2222H33.7778Z" />
</svg> Get Early Access</span>
    </a>
           </div>
      </div></div>
    <div className="flowers-bottom display-on-breakpoint"><img src={FlowerImages} /></div>
    </div>
  )
}

export default HiveTreeSection
