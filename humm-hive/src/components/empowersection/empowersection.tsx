import React from 'react'
import WhiteBeeZoom from '../../images/bee_zoom.png'
import './style.scss'

const EmpowerSection: React.FC<Props> = () => {
  return (
    <div className="section-white-bg">
    <div className="section-white-bg-title" data-sal="slide-up" data-sal-delay="100">
    <span className="highlight-hive">Hives</span> empower you to share how you want</div>
    <div className="section-white-bg-content" data-sal="slide-up" data-sal-delay="400">
    <p>Connect directly connect with friends, family, community members,
    colleagues, subscribers, fans, and followers -   </p>

    <p>what you choose to share is unaffected by algorithms or advertisers!</p>

    <p>People can join your Hive to access private, public, and paid content.</p>

    <p>The list of everyone who joins your Hive is safe and secure on your device,
    not on a company's server.</p>
    </div>
            <div className="section-white-bee-zoom" data-sal="slide-up" data-sal-delay="100"><img src={WhiteBeeZoom} /></div>
            </div>
  )
}

export default EmpowerSection
