import './intro.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
                backDelay: 1500,
                backSpeed:60,
                strings: ["Developer", "Designer", "Content Creator"],
            })
            
    },[])

    return (
        <div className="intro" id="Intro">
            <div className="left">
                <div className="imgContainer"><img src='assets/man.png' className="img" alt=""/></div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>John Doe</h1>
                    <h3>Freelance <span ref={textRef}></span>
                    </h3>
                </div>
                <a href="#Portfolio">
                     <KeyboardArrowDownIcon/>
                </a>
            </div>
        </div>
    )
}