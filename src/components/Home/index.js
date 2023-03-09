import React from 'react';
import { useEffect, useState } from 'react';
import{Link} from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo'

const Home = () => {
    // import Animated letters
    // state hook below
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['l','i','v','e',' ','R','e','n',',']
    const jobArray = ['a',' ','U','X',' ','D','e','s','i','g','n','e','r']

    // use animation from animated letters
    
    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 4000);
    // },[])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    
        return () => clearTimeout(timeout);
    },[]);

// adjust logo in here
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br /> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer"/> 
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={23}/>
                </h1>
                <h2>UX/UI / HCI / Frontend Developer</h2>
                <Link to="/contact" className='flat-button'>Don't Click this button</Link>
            </div>
            <div>
                <Logo />
            </div>

        </div>
    )
}

export default Home 