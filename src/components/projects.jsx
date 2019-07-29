import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/HW_thumbnail.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://youtu.be/4QCv88K_8q8">Hello World!</a></h3>
											<span>YouTube Video</span>
											<p className="icon">
												<span><a href="#1"><i className="icon-share3" /></a></span>
												<span><a href="#2"><i className="icon-eye" /> 100</a></span>
												<span><a href="#3"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/coolchat.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://guarded-badlands-92028.herokuapp.com/">React Chat Application</a></h3>
											<span>Web App</span>
											<p className="icon">
												<span><a href="#4"><i className="icon-share3" /></a></span>
												<span><a href="#5"><i className="icon-eye" /> 100</a></span>
												<span><a href="#6"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/HMM_Screenshot.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://hamiltonmultimedia.com/">Hamilton Multimedia Website</a></h3>
											<span>Web Design</span>
											<p className="icon">
												<span><a href="#7"><i className="icon-share3" /></a></span>
												<span><a href="#8"><i className="icon-eye" /> 100</a></span>
												<span><a href="#9"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/Eric_Garner_Video_Graphic.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://youtu.be/Lp7yGfywPGY">Justice for Eric Garner Video</a></h3>
											<span>YouTube Video</span>
											<p className="icon">
												<span><a href="#10"><i className="icon-share3" /></a></span>
												<span><a href="#11"><i className="icon-eye" /> 100</a></span>
												<span><a href="#12"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/rn_music_thumbnail.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://youtu.be/IoWkx5dy9fU">React Native Spotify Clone App</a></h3>
											<span>iOS & Android Application</span>
											<p className="icon">
												<span><a href="#13"><i className="icon-share3" /></a></span>
												<span><a href="#14"><i className="icon-eye" /> 100</a></span>
												<span><a href="#15"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/3D_motion_graphic.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://youtu.be/pLhD8Tj_tsg">3D Logo Reveal</a></h3>
											<span>3D Motion Graphic Design</span>
											<p className="icon">
												<span><a href="#16"><i className="icon-share3" /></a></span>
												<span><a href="#17"><i className="icon-eye" /> 100</a></span>
												<span><a href="#18"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#19" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div> */}
					</div>
				</section>
      </div>
    )
  }
}
