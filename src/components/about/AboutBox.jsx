import React from 'react'

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>

                <div>
                    <h3 className="about__title">1</h3>
                    <span className="about__subtitle">Satisfied customers</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-check"></i>

                <div>
                    <h3 className="about__title">6</h3>
                    <span className="about__subtitle">Courses Completed</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-graduation"></i>

                <div>
                    <h3 className="about__title">1</h3>
                    <span className="about__subtitle">Certificates</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-puzzle"></i>

                <div>
                    <h3 className="about__title">2</h3>
                    <span className="about__subtitle">Project Completed</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox