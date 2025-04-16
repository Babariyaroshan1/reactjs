import React from 'react';


function App() {
  const moveSlider = (direction) => {
    console.log(`Move slider ${direction === 1 ? 'right' : 'left'}`);
    // Add real slider logic here if needed
  };

  return (
    <>
      <header id="header">
        <div className="wrapperfornav">
          <div className="containerfornav">
            <div className="navcolor">
              <div className="default-ltr-cache-lol706">
                <div className="default-ltr-cache-1bzn829"></div>
                <div className="default-ltr-cache-1l8wovt"></div>
                <div className="default-ltr-cache-swstpr"></div>
              </div>

              <nav className="navbar">
                <div className="logo">
                  {/* <img src="images/netflix-logo-0.png" alt="" /> */}
                </div>
                <div className="signin">
                  <select style={{ fontFamily: 'Segoe UI, FontAwesome' }}>
                    <option value="en">&#xf0ac; &nbsp;English</option>
                    <option value="hi">&#xf0ac; &nbsp;हिन्दी</option>
                  </select>
                  <button type="button">Sign In</button>
                </div>
              </nav>

              <div className="wrapper4"></div>
            </div>

            <div className="wrapper1">
              <div className="wrapper2">
                <div className="wrapper3">
                  <div className="container">
                    <div className="content">
                      <h1>Unlimited movies, TV shows and more</h1>
                      <p>Start at ₹149. Cancel at any time.</p>
                    </div>
                  </div>
                </div>

                <div className="mail">
                  <input type="email" placeholder="Email address" />
                  <div className="getbtn">
                    <button type="button">Get Started &gt;</button>
                  </div>
                </div>

                <div className="containersec-2">
                  <div className="content-sec-2">
                    <div className="trending-section">
                      <h2>Trending Now</h2>
                    </div>
                    <div className="slider-wrapper">
                      <button className="slider-btn prev" onClick={() => moveSlider(-1)}>
                        &#10094;
                      </button>
                      <div className="slider">
                        {[...Array(10)].map((_, i) => (
                          <div className="card" key={i}>
                            <span className="rank">{i + 1}</span>
                            <img src={`images/card${i + 1}.webp`} alt={`Card ${i + 1}`} />
                          </div>
                        ))}
                      </div>
                      <button className="slider-btn next" onClick={() => moveSlider(1)}>
                        &#10095;
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
