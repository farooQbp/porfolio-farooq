import React from 'react'
import { RiFireLine, RiCupLine, RiGroupLine, RiTrophyLine } from 'react-icons/ri';

const AboutBox = () => {

    const calculateYearsOfExperience = () => {
        const start = new Date("2022-06-15");
        const today = new Date();
        let years = today.getFullYear() - start.getFullYear();
        let months = today.getMonth() - start.getMonth();

        if (months < 0) {
            years--;
            months += 12;
        }
        const totalExperience = years + months / 12;
        return totalExperience.toFixed(1);
    }

    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <RiFireLine className='about__icon' />
                <div>
                    <h3 className="about__title">{calculateYearsOfExperience()}</h3>
                    <span className="about__subtitle">Years of Experience</span>
                </div>
            </div>

            <div className="about__box">
                <RiCupLine className='about__icon' />
                <div>
                    <h3 className="about__title">3</h3>
                    <span className="about__subtitle">Github Repositories</span>
                </div>
            </div>

            <div className="about__box">
                <RiGroupLine className='about__icon' />
                <div>
                    <h3 className="about__title">10T+</h3>
                    <span className="about__subtitle">Downloaded App</span>
                </div>
            </div>

            <div className="about__box">
                <RiTrophyLine className='about__icon' />
                <div>
                    <h3 className="about__title">100%</h3>
                    <span className="about__subtitle">Code Quality</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox