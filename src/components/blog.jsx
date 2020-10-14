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
								<h2 className="colorlib-heading">Recent Certificates</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="https://coursera.org/share/e0444d51a1964f1673e0801ed441e2b4" className="blog-img"><img src="images/16.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
									<div className="desc">
										<span><small> August 17th, 2020 </small> | <small> Google </small> | <small> <i className="icon-bubble3" /> 4</small></span>
										<h3><a href="https://coursera.org/share/e0444d51a1964f1673e0801ed441e2b4">Crash Course In Python</a></h3>
										<p>Course teaching what Python is and why Python is relevant to automation and how to write scripts to perform automated actions.</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
								<div className="blog-entry">
									<a href="https://www.redhat.com/en/services/training/do101-introduction-openshift-applications" className="blog-img"><img src="images/15.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
									<div className="desc">
										<span><small> June 4th, 2020 </small> | <small> Red Hat </small> | <small> <i className="icon-bubble3" /> 4</small></span>
										<h3><a href="https://www.redhat.com/en/services/training/do101-introduction-openshift-applications">Red Hat Openshift App Development</a></h3>
										<p>Red Hat® OpenShift® Container Platform is a containerized application platform that allows enterprises to accelerate and streamline application development, delivery, and deployment on-premise or in the cloud.</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="https://linuxacademy.com/profile/u/cert/id/324970" className="blog-img"><img src="images/17.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
									<div className="desc">
										<span><small> April 28th, 2020 </small> | <small> Linux Academy </small> | <small> <i className="icon-bubble3" /> 4</small></span>
										<h3><a href="https://linuxacademy.com/profile/u/cert/id/324970">Kubernetes Essentials</a></h3>
										<p>The course teaches what Kubernetes is and what it does and work with some of the basic functionality of Kubernetes hands-on.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							{/* <div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div> */}
						</div>
					</div>
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">Verified</span>
								<h2 className="colorlib-heading">Earlier Certificates</h2>
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
							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="https://www.udemy.com/certificate/UC-R2K215O9/" className="blog-img"><img src="images/18.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
									<div className="desc">
										<span><small> May 14th, 2018 </small> | <small> React Native </small> | <small> <i className="icon-bubble3" /> 4</small></span>
										<h3><a href="https://www.udemy.com/certificate/UC-R2K215O9/">React Native - The Practical Guide</a></h3>
										<p>This certificate above verifies that Terence Hamilton successfully completed the course React Native - The Practical Guide [2020 Edition] on 05/14/2018 as taught by Academind by Maximilian Schwarzmüller, Maximilian Schwarzmüller on Udemy.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							{/* <div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div> */}
						</div>
					</div>
				</section>
			</div>
		)
	}
}
