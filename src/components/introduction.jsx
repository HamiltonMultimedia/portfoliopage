import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{ backgroundImage: 'url(images/4.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight ">
                        <div className="desc">
                          <h1 style={{ color: 'white', fontFamily: 'Helvetica Neue' }} >Hello World! <br />I'm Terence.</h1>
                          <p style={{ color: 'white' }}><a style={{ color: 'white' }} className="btn  btn-primary btn-learn " href="https://drive.google.com/file/d/1UDNo2r1kh61WelJnj-qbs_YAokOZbC2o/view?usp=sharing" target="_blank" rel="noopener noreferrer">My Resume<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: 'url(images/3.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-7 col-sm-12 col-xs-12  js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc" >
                          <h1 style={{ color: 'ghostwhite', fontFamily: 'Helvetica Neue' }}>I love building<br />things!</h1>
                          <p><a style={{ color: 'white' }} className="btn btn-outline-light btn-primary btn-learn" href="https://github.com/HamiltonMultimedia" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: 'url(images/14.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-7 col-sm-12 col-xs-12  js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={{
                            color: 'white', fontFamily: 'Helvetica Neue', textShadowColor: 'white', textShadowOffset: { width: '4', height: '4' }, textshadowRadius: '-4'
                          }}>I create <br />often ... </h1>
                          <p><a style={{ color: 'white' }} className="btn btn-outline-light btn-primary btn-learn" href="http://geeksoffthestreets.com/" target="_blank" rel="noopener noreferrer">View Home Page <i className="icon-book" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
