import React from 'react';
import './Home.css'
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <h1 className="home__name">Maxim Murzanev</h1>
                <div className="home__education">I'm a Middle/Sernior Front-End developer</div>

                <a href="https://t.me/Kytek1" className='btn' target='_blank'>
                    <i className='icon-pencil'></i>
                    Write to my Telegram
                </a>

                <ScrollDown />
            </div>
            <Shapes />
        </section>
    )
}

export default Home;