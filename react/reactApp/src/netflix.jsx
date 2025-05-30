import React from 'react'
import PropTypes from 'prop-types'

function App() {
  return (
   <>
   <header id='header'>
    <div class="wrapperfornav">
      <div class="containerfornav">
        <div class="navcolor">
        <div class="default-ltr-cache-lol706">
          <div class="default-ltr-cache-1bzn829"></div>
          <div class="default-ltr-cache-1l8wovt"></div>
          <div class="default-ltr-cache-swstpr"></div>
        </div>    
        <nav className="navbar">               
          <div class="logo">
            {/* <img src="images/netflix-logo-0.png" alt=""> */}
          </div>
          <div class="signin">
            <select style="font-family: Segoe UI, FontAwesome;">
              <option value="en">&#xf0ac; &nbsp;English</option>
              <option value="hi">&#xf0ac; &nbsp;हिन्दी</option>
            </select>
            <button type="button">Sign In</button>
          </div>
          </nav>  
        <div class="wrapper4">
    </div>
  </div>
  <div className="wrapper1">
      <div class="wrapper2">
        <div class="wrapper3">
          <div class="container"> 
            <div class="content">
              <h1>Unlimited movies, TV shows and more</h1>
              <p>Start at ₹149. Cancel at any time.</p>
            </div>
          </div>
          </div>
          <div class="mail">
            <input type="email" placeholder="Email address" />
          <div class="getbtn">
        <button type="button">Get Started &gt;</button>
      </div>
    </div>
    
      <div class="containersec-2">
        <div class="content-sec-2">
          <div class="trending-section">
            <h2>Trending Now</h2>
          </div>
          <div class="slider-wrapper">
            <button class="slider-btn prev" onclick="moveSlider(-1)">&#10094;</button>
            <div class="slider">
              <div class="card">
                <span class="rank">1</span>
                {/* <img src="images/card1.webp" alt="The Buckingham Murders"> */}
              </div>
              <div class="card">
                <span class="rank">2</span>
                {/* <img src="images/card2.webp" alt="Devara"> */}
              </div>
              <div class="card">
                <span class="rank">3</span>
                {/* <img src="images/card3.webp" alt="Do Patti"> */}
              </div>
              <div class="card">
                <span class="rank">4</span>
                {/* <img src="images/card4.webp" alt="Vijay 69"> */}
              </div>
              <div class="card">
                <span class="rank">5</span>
                {/* <img src="images/card5.webp" alt="It Ends With Us"> */}
              </div>
              <div class="card">
                <span class="rank">6</span>
                {/* <img src="images/card6.webp" alt="Meriyazhagan"> */}
              </div>
              <div class="card">
                <span class="rank">7</span>
                {/* <img src="images/card7.webp" alt="Khel Khel Mein"> */}
              </div>
              <div class="card">
                <span class="rank">8</span>
                {/* <img src="images/card8.webp" alt="Bhoot"> */}
              </div>
              <div class="card">
                <span class="rank">9</span>
                {/* <img src="images/card9.webp" alt="Bhoot"> */}
              </div>
              <div class="card">
                <span class="rank">10</span>
                {/* <img src="images/card10.webp" alt="Bhoot"> */}
              </div>
            </div>
            <button class="slider-btn next" onclick="moveSlider(1)">&#10095;</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </header>
   </>
  )
}

netflix.propTypes = {}

export default netflix