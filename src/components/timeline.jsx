import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Hamilton Multimedia, LLC <span>2013 – Present</span></h2>
                        <p>I write code for front-end web and mobile apps using <a href="https://reactjs.org/" >React</a> & <a href="https://facebook.github.io/react-native/" >React Native</a> frameworks which are based in JavaScript. I develop back-end server apps for clients using <a href="https://nodejs.org/en/">Node.js</a> and the <a href="https://expressjs.com/">Express.js</a> Frameworks. My front-end and back-end development skills combined qualifies me as a <a href="https://www.glassdoor.com/Salaries/new-york-city-full-stack-web-developer-salary-SRCH_IL.0,13_IM615_KO14,38.htm">full-stack developer</a>.
                          My videography and photography skills include (but are not limited to) filming, editing and publishing footage to various formats using Adobe Premier CC, After Effects CC and Canon Rebel DSLR prefessional cameras. 
                          I use the <a href="https://wordpress.com/">Wordpress</a> content management system using JavaScript, PHP and CSS. I Test, Build and Deploy software using CI/CD best practices and automated tools like <a href="https://jenkins.io/">Jenkins</a> and <a href="https://azure.microsoft.com/en-us/services/devops/pipelines/">Azure Pipelines</a> from Microsoft.
                         </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Primary and Higher Education <span>2019-2020</span></h2>
                        <p>I am currently enrolled in the System Administrator course at <a href="https://perscholas.org/apply?city=new-york" >Per Scholas</a> in The Bronx, NY. This course equips students with the knowledge and certifications to begin a career as a CompTIA Linux+ & AWS Certified Systems Administrator.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Monroe College <span>2007-2009</span></h2>
                        <p>I studied at and graduated with an Associate of Applied Science degree from <a href="https://www.monroecollege.edu/" >Monroe College</a> with a focus on Business Administration while working full-time at <a href="https://www.coned.com/en" >Con Edison Company of New York</a>.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
