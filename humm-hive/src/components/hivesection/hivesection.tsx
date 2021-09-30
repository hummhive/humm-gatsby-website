import React from 'react'
import HiveBg from '../../images/bg-hive.png'
import './style.scss'

const HiveSection = () => {
  return (
    <div className="hive-section">
      <div className="HiveBg"><img src={HiveBg} /></div>
      <div className="hive-section-title" data-sal="slide-up" data-sal-delay="100">
              <div className="d-none d-lg-block">Create, share, and steward content with <span className="highlight-hive">Hives</span></div>
              <span className="highlight-hive">Hives</span> are secure homes for stories and media
              </div>
      <div className="hive-section-subtitle" data-sal="slide-up" data-sal-delay="400">
      Everything in your Hive lives on your device - not on a server - until you’re ready to share.
      </div>
    </div>
  )
}

export default HiveSection
