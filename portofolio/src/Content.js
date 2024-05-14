import React, { useRef, useEffect } from 'react'
import './Content.css'
function Content({timeline}) {
    let h1 = useRef(null);
    let pText = useRef(null);
    let btn = useRef(null);
    useEffect(() => {
        timeline.from([h1.children, pText], 1, {
            opacity: 0,
            y: "100",
            skewY: 10,
            stagger: {
                amount: .4
            }   
        },"-=.1")
    })
    return (
        <div>
            <div className="content">
                <h1 className="content-inner-bold" ref= {el => h1 = el}>
                    <div > My Name Divo Al Ghafar</div>
                    <br />
                    <div >I'm Front-End Developer</div>
                </h1>
                <p ref= {el => pText = el}>
                I'm a student of the Computer Science with a strong academic background in Technology. Proficient in fullstack web and application development and software engineering. Experienced in organizational roles, event management, and active in freelance design projects. Interested in Web Development, IoT (Internet of Things), and design-related. Committed to continuous learning and eager to apply knowledge and skills to contribute to the advancement of technology.
                </p>
                {/* <button ref= {el => btn = el}>
                    Explore
                </button> */}
            </div>
        </div>
    )
}

export default Content