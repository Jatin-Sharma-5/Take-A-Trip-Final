import Footer from "./Footer";
import Header from "./Header";

export default function Homepage(){

    return(

        <>

    <Header/>
  <section className="hero-section">
    <div className="hero-slider owl-carousel">
      <div className="hs-item set-bg" data-setbg="/assets/img/slider-1.jpg">
        <div className="hs-text">
          <div className="container">
            <h2>
              The Best <span>Games</span> Out There
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada <br /> lorem maximus mauris scelerisque, at rutrum nulla
              dictum. Ut ac ligula sapien. <br />
              Suspendisse cursus faucibus finibus.
            </p>
            <a href="#" className="site-btn">
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="hs-item set-bg" data-setbg="/assets/img/slider-2.jpg">
        <div className="hs-text">
          <div className="container">
            <h2>
              The Best <span>Games</span> Out There
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada <br /> lorem maximus mauris scelerisque, at rutrum nulla
              dictum. Ut ac ligula sapien. <br />
              Suspendisse cursus faucibus finibus.
            </p>
            <a href="#" className="site-btn">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Hero section end */}
  {/* Latest news section */}
  <div className="latest-news-section">
    <div className="ln-title">Latest News</div>
    <div className="news-ticker">
      <div className="news-ticker-contant">
        <div className="nt-item">
          <span className="new">new</span>Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.{" "}
        </div>
        <div className="nt-item">
          <span className="strategy">strategy</span>Isum dolor sit amet,
          consectetur adipiscing elit.{" "}
        </div>
        <div className="nt-item">
          <span className="racing">racing</span>Isum dolor sit amet, consectetur
          adipiscing elit.{" "}
        </div>
      </div>
    </div>
  </div>
  {/* Latest news section end */}
  {/* Feature section */}
  <section className="feature-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 p-0">
          <div className="feature-item set-bg" data-setbg="img/features/1.jpg">
            <span className="cata new">new</span>
            <div className="fi-content text-white">
              <h5>
                <a href="#">Suspendisse ut justo tem por, rutrum</a>
              </h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <a href="#" className="fi-comment">
                3 Comments
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 p-0">
          <div className="feature-item set-bg" data-setbg="img/features/2.jpg">
            <span className="cata strategy">strategy</span>
            <div className="fi-content text-white">
              <h5>
                <a href="#">Justo tempor, rutrum erat id, molestie</a>
              </h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <a href="#" className="fi-comment">
                3 Comments
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 p-0">
          <div className="feature-item set-bg" data-setbg="img/features/3.jpg">
            <span className="cata new">new</span>
            <div className="fi-content text-white">
              <h5>
                <a href="#">Nullam lacinia ex eleifend orci porttitor</a>
              </h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <a href="#" className="fi-comment">
                3 Comments
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 p-0">
          <div className="feature-item set-bg" data-setbg="img/features/4.jpg">
            <span className="cata racing">racing</span>
            <div className="fi-content text-white">
              <h5>
                <a href="#">Lacinia ex eleifend orci suscipit</a>
              </h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <a href="#" className="fi-comment">
                3 Comments
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Feature section end */}
  {/* Recent game section  */}
  <section
    className="recent-game-section spad set-bg"
    data-setbg="img/recent-game-bg.png"
  >
    <div className="container">
      <div className="section-title">
        <div className="cata new">new</div>
        <h2>Recent Games</h2>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="recent-game-item">
            <div
              className="rgi-thumb set-bg"
              data-setbg="img/recent-game/1.jpg"
            >
              <div className="cata new">new</div>
            </div>
            <div className="rgi-content">
              <h5>Suspendisse ut justo tem por, rutrum</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor
                sit amet, consectetur elit.{" "}
              </p>
              <a href="#" className="comment">
                3 Comments
              </a>
              <div className="rgi-extra">
                <div className="rgi-star">
                  <img src="/assets/img/icons/star.png" alt="" />
                </div>
                <div className="rgi-heart">
                  <img src="/assets/img/icons/heart.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="recent-game-item">
            <div
              className="rgi-thumb set-bg"
              data-setbg="/assets/img/recent-game/2.jpg"
            >
              <div className="cata racing">racing</div>
            </div>
            <div className="rgi-content">
              <h5>Susce pulvinar metus nulla, vel facilisis sem </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor
                sit amet, consectetur elit.{" "}
              </p>
              <a href="#" className="comment">
                3 Comments
              </a>
              <div className="rgi-extra">
                <div className="rgi-star">
                  <img src="/assets/img/icons/star.png" alt="" />
                </div>
                <div className="rgi-heart">
                  <img src="/assets/img/icons/heart.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="recent-game-item">
            <div
              className="rgi-thumb set-bg"
              data-setbg="/assets/img/recent-game/3.jpg"
            >
              <div className="cata adventure">Adventure</div>
            </div>
            <div className="rgi-content">
              <h5>Suspendisse ut justo tem por, rutrum</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor
                sit amet, consectetur elit.{" "}
              </p>
              <a href="#" className="comment">
                3 Comments
              </a>
              <div className="rgi-extra">
                <div className="rgi-star">
                  <img src="/assets/img/icons/star.png" alt="" />
                </div>
                <div className="rgi-heart">
                  <img src="/assets/img/icons/heart.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Recent game section end */}
  {/* Tournaments section */}
  <section className="tournaments-section spad">
    <div className="container">
      <div className="tournament-title">Tournaments</div>
      <div className="row">
        <div className="col-md-6">
          <div className="tournament-item mb-4 mb-lg-0">
            <div className="ti-notic">Premium Tournament</div>
            <div className="ti-content">
              <div
                className="ti-thumb set-bg"
                data-setbg="/assets/img/tournament/1.jpg"
              />
              <div className="ti-text">
                <h4>World Of WarCraft</h4>
                <ul>
                  <li>
                    <span>Tournament Beggins:</span> June 20, 2018
                  </li>
                  <li>
                    <span>Tounament Ends:</span> July 01, 2018
                  </li>
                  <li>
                    <span>Participants:</span> 10 teams
                  </li>
                  <li>
                    <span>Tournament Author:</span> Admin
                  </li>
                </ul>
                <p>
                  <span>Prizes:</span> 1st place $2000, 2nd place: $1000, 3rd
                  place: $500
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="tournament-item">
            <div className="ti-notic">Premium Tournament</div>
            <div className="ti-content">
              <div
                className="ti-thumb set-bg"
                data-setbg="/assets/img/tournament/2.jpg"
              />
              <div className="ti-text">
                <h4>DOOM</h4>
                <ul>
                  <li>
                    <span>Tournament Beggins:</span> June 20, 2018
                  </li>
                  <li>
                    <span>Tounament Ends:</span> July 01, 2018
                  </li>
                  <li>
                    <span>Participants:</span> 10 teams
                  </li>
                  <li>
                    <span>Tournament Author:</span> Admin
                  </li>
                </ul>
                <p>
                  <span>Prizes:</span> 1st place $2000, 2nd place: $1000, 3rd
                  place: $500
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Tournaments section bg */}
  {/* Review section */}
  <section
    className="review-section spad set-bg"
    data-setbg="/assets/img/review-bg.png"
  >
    <div className="container">
      <div className="section-title">
        <div className="cata new">new</div>
        <h2>Recent Reviews</h2>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="review-item">
            <div className="review-cover set-bg" data-setbg="/assets/img/review/1.jpg">
              <div className="score yellow">9.3</div>
            </div>
            <div className="review-text">
              <h5>Assasin’’s Creed</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor
                sit ame.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="review-item">
            <div className="review-cover set-bg" data-setbg="/assets/img/review/2.jpg">
              <div className="score purple">9.5</div>
            </div>
            <div className="review-text">
              <h5>Doom</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor
                sit ame.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="review-item">
            <div className="review-cover set-bg" data-setbg="/assets/img/review/3.jpg">
              <div className="score green">9.1</div>
            </div>
            <div className="review-text">
              <h5>Overwatch</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor
                sit ame.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="review-item">
            <div className="review-cover set-bg" data-setbg="/assets/img/review/4.jpg">
              <div className="score pink">9.7</div>
            </div>
            <div className="review-text">
              <h5>GTA</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor
                sit ame.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer/>
</>

    )
}