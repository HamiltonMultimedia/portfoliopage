import React, { Component } from 'react'

export default class Blog extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-blog" data-section="blog">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">Verified</span>
								<h2 className="colorlib-heading">Certificates</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="https://aws.amazon.com/training/awsacademy/" className="blog-img"><img src="images/11.png" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
									<div className="desc">
										<span><small>October 3, 2019 </small> | <small> AWS Academy </small> | <small> <i className="icon-bubble3" /> 4</small></span>
										<h3><a href="https://aws.amazon.com/training/awsacademy/">Cloud Foundations in English</a></h3>
										<p>Course teaching foundations of Cloud Computing Systems.</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
								<div className="blog-entry">
									<a href="https://www.youracclaim.com/badges/71a04f29-43a1-4141-9d99-e4df2f068217" className="blog-img"><img src="images/12.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
									<div className="desc">
										<span><small>September 27th, 2019 </small> | <small> CompTIA </small> | <small> <i className="icon-bubble3" /> 4</small></span>
										<h3><a href="https://www.comptia.org/certifications/linux">Linux+</a></h3>
										<p>CompTIA Linux+ is the only job-focused Linux certification covering the latest foundational skills demanded by hiring managers.</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="https://cs.lpi.org/caf/Xamman/certification/verify/LPI000437646/q9k4ffpvlm" className="blog-img"><img src="images/13.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
									<div className="desc">
										<span><small> September 27th, 2019 </small> | <small> LPIC </small> | <small> <i className="icon-bubble3" /> 4</small></span>
										<h3><a href="https://www.lpi.org/our-certifications/lpic-1-overview">LPIC-1 Exam 101</a></h3>
										<p>The LPIC-1 will validate the candidate's ability to perform maintenance tasks on the command line, install and configure a computer running Linux and configure basic networking.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}
