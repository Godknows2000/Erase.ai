import React from 'react'
import "./Subscription.css"

const Subscription = () => {
  return (
    <div className="pricing-container">
      <header className="bg-remover-header">
        <h1 className="primary__title title">Our Pricing Plans</h1>
        <p className="subtitle" style={{ color: '#b8b8b8' }}>
        Select the plan that suits your needs best.
        </p>
      </header>
      <div className="pricing-cards">
        <div className="card">
          <div className="price-header text-black">$2/50 credits</div>
          <h3 className="plan-name">Bronze</h3>
          <p className="plan-description">For solo personal use</p>
          <h2 className="price">$5 <span className="currency">USD</span></h2>
          <button className="upload-button-2 hover:scale-105 transition-all duration-700 cta-btn">Get Started</button>
        </div>

        <div className="card popular">
          <div className="price-header">$20 /1000 credits</div>
          <h3 className="plan-name">Silver</h3>
          <p className="plan-description">For small teams</p>
          <h2 className="price">$10 <span className="currency">USD</span></h2>
          <button className="upload-button-2 hover:scale-105 transition-all duration-700 cta-btn">Get Started</button>
        </div>

        <div className="card">
          <div className="price-header">$100 /5000 credits</div>
          <h3 className="plan-name">Gold</h3>
          <p className="plan-description">As your business scales</p>
          <h2 className="price">$50 <span className="currency">USD</span></h2>
          <button className="upload-button-2 hover:scale-105 transition-all duration-700 cta-btn">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Subscription

