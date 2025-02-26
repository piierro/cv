import React from 'react';
import './SideBar.css'

const SideBar = () => {
    return (
        <aside className='aside'>
            <a href="#home" className='nav__logo'>
                Kytek
            </a>
            <nav className='nav'>
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className='nav__link'>
                                <i className='icon-home'></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className='nav__link'>
                                <i className='icon-user-following'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="nav__foter">
                <span className="copyright">&copy; 2025</span>
            </div>
        </aside>
    )
}

export default SideBar;