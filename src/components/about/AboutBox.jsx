import React from 'react';

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className='about__icon icon-fire'></i>

                <div>
                    <h3 className="about__title">250+</h3>
                    <span className="about__subtitle">Tasks completed</span>
                </div>
            </div>
            <div className="about__box">
                <i className='about__icon icon-cup'></i>

                <div>
                    <h3 className="about__title">5000+</h3>
                    <span className="about__subtitle">Cup of coffee</span>
                </div>
            </div>
            <div className="about__box">
                <i className='about__icon icon-people'></i>

                <div>
                    <h3 className="about__title">20+</h3>
                    <span className="about__subtitle">Satisfied clients</span>
                </div>
            </div>
            <div className="about__box">
                <i className='about__icon icon-badge'></i>

                <div>
                    <h3 className="about__title">30+</h3>
                    <span className="about__subtitle">Apps I created</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox;