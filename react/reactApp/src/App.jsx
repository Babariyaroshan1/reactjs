import React from 'react';


function App() {
  return (

    <>

      <header className='header' >
        <div className='row justify-content-between '>
          <div class="col hero-logo">
            <img src="../public/photo/logo.png" alt="" /></div>
          <div class="col">
            <div class="head_content">
              <div class="contact d-flex">
                <img className='vector' src="../public/photo/hero_vector.png" alt="no image found" />
                <a href="tel:123456789" class="vect-phone third-font">Express Delivery +1 234 567 890</a>
              </div>
              <div class="d-flex main-menu">

                <nav class="mla">
                  <ul class="nav-menu">
                    <li class="nav-item"><a href="/home">Home</a></li>
                    <li class="nav-item"><a href="/menu">menu</a></li>
                    <li class="nav-item"><a href="/Contact us">Contact us</a></li>
                    <li class="nav-item"><a href="/Our Story-">Our Story</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div class="head-text">
          <div class="row">
            <div class="col small-head">It is a good time for the great taste of burgers</div>
          </div>
          <div class="row">
            <div class="col title">
              <h1 class="head ">Burger </h1><br />
              <h4 class="sub-title">Week</h4>
            </div>
          </div>
        </div>
        <div class=" head-imgs posi-ab">
          <div class=" price-tag posi-ab ">
            <div class="offer-price  ">$5<span class="cents ">.49</span><br />
              <span class="prc-onl "> Only</span>
            </div>
          </div>

          <div class="burger posi-re">
            <img className='burger-img posi-ab' src="../public/photo/hero_Burger Image.png" alt="no image " />
            <img className='burg-shadow posi-ab' src="../public/photo/burger_shadow.png" alt="no image" />
            <img className='burg-glow posi-ab' src="../public/photo/burger_glow.png" alt="no image" />
          </div>

          <div class="fries-img posi-ab">
            <img src="../public/photo/hero_French Fries.png" alt="" />
          </div>

          <div class="drink posi-re">
            <img className='drink-img posi-ab' src="../public/photo/hero_drink.png" alt="no image " />
            <img className='drink-shadow posi-ab' src="../public/photo/drink_shadow.png" alt="no image" />
          </div>
        </div>
      </header>
      <main>
        <section class="main-sec1">
          <div class="container-fluid">
            <div class="row justify-content-between sec1-row1 ">
              <div class="">
                <div class="sec1-img1-bg">
                  <h3 class="sec1subhead">Try it today</h3>
                  <h2 class="sec1head">Most Popular Burger</h2>
                </div>
              </div>
              <div class="">
                <div class="sec1-img2-bg">
                  <h3 class="sec1subhead">Try it today</h3>
                  <h2 class="sec1head">More fun</h2>
                  <h2 class="sec1head">More taste</h2>
                </div>
                <div class="sec1-img3-bg">
                  <h3 class="sec1subhead">Try it today</h3>
                  <h2 class="sec1head">fresh&chili</h2>
                </div>
              </div>
            </div>


          </div>
          <div class="row justify-content-around mt ">
            <div class="col ">
              <a class="tst-bur-btn " href="#">Always Tasty Burger</a>
            </div>
          </div>
        </section>
        <section className='main-sec2'>

          <div class="row justify-content-around mt">
            <h3 class="col main-sec2-head ">Choose & Enjoy</h3>
          </div>
          <div class="row justify-content-around">
            <h6 class=" col main-sec2-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed
              do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.</h6>
          </div>
          <div class="row justify-content-between text-centre last-base mt">
            <div class="col">
              <div>
                <div>
                  <img src="../public/photo/mainsec2burger1.png" alt="no image" />
                  <img class="mainsec2burger1shadow1" src="../public/photo/mainsec2burger1shadow.png"
                    alt="no image" />
                </div>
                <div class="burger-txt">
                  <h3 class="main-sec2-burg-head">Lorem ipsum dolor</h3>
                  <p class="main-sec2-burg-disc ">Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do rue sed rty tyie</p>
                  <div><a class="main-sec2-burg-btn" href="#">Order Now</a></div>

                </div>

              </div>
            </div>
            <div class="col">
              <div class="">
                <img class="" src="../public/photo/mainsec2burger3.png" alt="no image" />
                <img class="mainsec2burger3shadow3" src="../public/photo/mainsec2burger3shadow.png"
                  alt="no image" />

              </div>
              <div class="burger-txt">
                <h3 class="main-sec2-burg-head ">Lorem ipsum dolor</h3>
                <p class="main-sec2-burg-disc ">Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do rue sed rty tyie</p>
                <div><a class="main-sec2-burg-btn " href="#">Order Now</a></div>
              </div>
            </div>
            <div class="col">
              <div class="">
                <img width="" class="main-sec2-burg3" src="../public/photo/mainsec2burger2.png" alt="no image" />
                <img class="mainsec2burger2shadow2" src="../public/photo/mainsec2burger2shadow.png"
                  alt="no image" />
              </div>
              <div class="burger-txt">
                <h3 class="main-sec2-burg-head ">Lorem ipsum dolor</h3>
                <p class="main-sec2-burg-disc">Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do rue sed rty tyie</p>
                <div><a class="main-sec2-burg-btn" href="#">Order Now</a></div>
              </div>
            </div>
          </div>
        </section>

        <section class="main-sec3">
          <div class="container-fluid">
            <div class="row main-sec3-box">
              <div class="col">
                <div>
                  <h3 class=" main-sec3-title ">Discover</h3>
                  <h2 class="main-sec3-head ">Upocoming event</h2>
                  <p class=" main-sec3-ptxt ">Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                    ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                </div>
              </div>
              <div><img class="main-sec3-img" src="../public/photo/mainsec3img.png" alt="no image" /></div>
            </div>
          </div>
        </section>

        <section className='main-sec4 '>
          <div >
            <div class="row justify-content-around">
              <div class=" col reservation-form">
                <h1 class="text-centre">RESERVATION</h1>
                <h2>BOOK YOUR TABLE</h2>
                <form action="">

                  <div class="form-grid">
                    <input type="text" class="form-input" placeholder="NAME" required />
                    <input type="email" class="form-input" placeholder="EMAIL" required />
                    <input type="date" class="form-input" required />
                    <input type="time" class="form-input" required />
                    <input type="number" class="form-input" placeholder="PEOPLE" required min="1" />
                    <div><a href="#" type="submit" class="form-button">FIND A TABLE</a></div>
                  </div>
                </form>

              </div>
            </div>
          </div>

          <div class="posi-re">
            <img class="posi-ab mainsec4-bug" src="../public/photo/mainsec4soloburger.png" alt="no img" />
            <img class="posi-ab mainsec4-bottle" src="../public/photo/mainsec4bottle.png" alt="no img" />
            <img class="posi-ab mainsec4-dish" src="../public/photo/mainsec4dish.png" alt="no img" />
          </div>
        </section>
      </main>

      <footer>
      <section class="foot-sec1">
            <div class="container-fluid  footer-bg ">
                <div class="row  ">
                    <div class="col foot-cols">
                        <img src="../public/photo/footerlogo.png " width="200px" alt="logo"/>
                        <div class="foot-disc third-font d-inline-block">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed
                            do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                            Risus commodo viver ra maecenas accumsan lacus vel facilisis. </div>
                        <a class="copyright" href="#">
                            <p>&copy; Company Name 2020. All rights reserved.</p>
                        </a>

                    </div>
                    <div class="col links foot-cols">
                        <div class="">
                            <div class="d-flex">
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Main+Road,+Building+Name,+Country">
                                    <img width="17px;" height="auto" class="icon-cont" src="../public/photo/location.png "
                                        alt="location"/></a>
                                <a class="footer-contact "
                                    href="https://www.google.com/maps/search/?api=1&query=Main+Road,+Building+Name,+Country"
                                    target="_blank">
                                    Main Road, Building Name, Country
                                </a>
                            </div>
                            <div class="d-flex">
                                <a href=" mailto:Dashrathbhil08@gmail.com"><img width="19px" class="icon-cont"
                                        src="../public/photo/email-icon.png " alt="mail" /></a>
                                <a class="footer-contact" href=" mailto:Dashrathbhil08@gmail.com">
                                    info@companyname.com
                                </a>
                            </div>

                        </div>

                        <div class="social">
                            <a href="https://www.instagram.com/" target="_blank">
                                <img class="social_icon" src="../public/photo/instagram_1384015.png" /></a>
                            <a href="https://www.facebook.com/" target="_blank">
                                <img class="social_icon" src="../public/photo/fb_icon.png" /></a>
                            <a href="https://twitter.com/" target="_blank">
                                <img class="social_icon" src="../public/photo/twitter_icon.png" /></a>
                            <a href="https://www.whatsapp.com/" target="_top">
                                <img class="social_icon" src="../public/photo/whtsap_icon.png" /></a>
                        </div>
                    </div>

                </div>
            </div>

          
        </section>
      </footer>
    </>
  );
}


export default App;
