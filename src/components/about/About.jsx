import React from 'react';
import './About.css';
import Image from '../../assets/logo_dark.png';
import Image_Light from '../../assets/logo_light.png';
import AboutBox from './AboutBox';

const About = (props) => {
    const downloadResume = async () => {
        window.open("farooq_basheer.pdf", '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>
            <div className="about__container grid">
                <img src={props.theme === 'light' ? Image : Image_Light} alt="" className='about__img' />
                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello! I'm Farooq Basheer, based in Kerala, India. I graduated from APJ Abdul Kalam Technological University with 
                            a Bachelor's degree in Mechanical Engineering.<br /><br />
                            Fast forward to today, I'm delighted to share that I am working as a software engineer. Welcome to my portfolio!<br /><br />
                            Here are a few technologies I’ve been working with recently:
                        </p>
                        <ul className="about__list">
                            <li>JavaScript (ES6+)</li>
                            <li>React Native</li>
                            <li>React JS</li>
                            <li>Material UI</li>
                            <li>Python</li>
                            <li>Mongo DB</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About