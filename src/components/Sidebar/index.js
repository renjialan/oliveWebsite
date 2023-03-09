
import './index.scss'
import React from 'react';
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className='logo' to='/'>
            <img src={LogoS} alt ="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="slobodan" />
        
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#6c5b7b"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#6c5b7b"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#6c5b7b"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/oliveren/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#6c5b7b"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/renjialan/'>
                    <FontAwesomeIcon icon={faGithub} color="#6c5b7b"/>
                </a>
            </li>
        </ul>

    </div>
)

export default Sidebar
