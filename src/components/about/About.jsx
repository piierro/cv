import React from 'react';
import './About.css'
import AboutBox from './AboutBox';

const About = () => {
    return (
        <section className='about container section' id='about'>
            <h2 className='section__title'>About me</h2>

            <div className="about__container">
                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            I am Maxim Murzanev, middle frontend developer from Moscow, Russia.
                            I have rich experience in web site building and cusomization.
                            Like to learn new technologies :)
                        </p>
                        <a href="https://hh.ru/resume/e29ba19eff0e751f320039ed1f4e665439735a" target="_blank" className="btn cv">Get CV</a>
                    </div>
                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">
                                    <span className="skills__number">Frontend</span>
                                </h3>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage frontend">90%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">
                                    <span className="skills__number">Backend</span>
                                </h3>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage backend">70%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">
                                    <span className="skills__number">DevOps</span>
                                </h3>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage devops">50%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About;