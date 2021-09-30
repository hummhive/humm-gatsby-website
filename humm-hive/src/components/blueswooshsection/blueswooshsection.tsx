import React from 'react'
import KeyImage from '../../images/key_shine.png'
import './style.scss'

const BlueSwooshSection = () => {
  return (
    <div className="section-blue-swoosh">
      <div className="section-blue-swoosh-container">
      <div className="section-blue-swoosh-title" data-sal="slide-up" data-sal-delay="200">
            <div className="display-on-breakpoint">Create, share, and steward content with <span className="highlight-hive">Hives</span></div>
            </div>
      <div className="section-blue-swoosh-content" data-sal="slide-up" data-sal-delay="200">
      When someone joins your Hive, they receive a unique key allowing them to unlock and view end-to-end encrypted content.
      </div>
      <div className="section-blue-swoosh-content-hive-key" data-sal="slide-up" data-sal-delay="500"><img src={KeyImage} /></div>
      </div>
    </div>
  )
}

export default BlueSwooshSection
