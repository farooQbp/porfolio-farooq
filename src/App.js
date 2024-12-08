
import { useEffect, useState } from 'react';
import useLocalStorage from 'use-local-storage';

import './App.css';

import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import TabTitleChanger from './utils/tabtitlechanger';
import Academics from './components/academics/Academics';
import ChatAssistant from './components/chatingassistant';


function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
    const [data, setData] = useState({
        resumeName: '',
        academics: [],
        projects: [],
        workExperience: [],
    });

    const fetchData = async () => {
        await fetch("/configs/appConfigs.json")
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch(() => window.location.reload());
    }

    useEffect(() => {
        fetchData()
    }, []);

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    return (
        <div className="app" data-theme={theme}>
            <Sidebar theme={theme} switchTheme={switchTheme} />
            <main className='main'>
                <Home />
                <About resume={data.resumeName} />
                <Resume workExperience={data.workExperience} />
                <Portfolio projects={data.projects} />
                <Academics academics={data.academics} />
                {/* <Services /> */}
                {/* <Testimonials /> */}
                <Contact theme={theme} />
            </main>
            <TabTitleChanger />
            <ChatAssistant />
        </div>
    );
}

export default App;
