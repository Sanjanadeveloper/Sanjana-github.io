import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { GoTriangleRight } from 'react-icons/go';
import myImg from '../assets/myImg.png';
import '../styles/about.css';

export const About = () => {
    const { light } = useContext(ThemeContext);

    return (
        <div id='about' style={{ '--bglightabout': light ? "white" : "#152235", '--plight': light ? 'black' : 'white', '--namelight': light ? "#dc143c" : "#64ffda", '--rolelight': light ? "" : "#dc143c" }}>
            <p>About </p>
            <div id='aboutcontent'>
                <div id='myselfdesc' data-aos='zoom-in'>
                    <div id='mysitem'>
                        <div><GoTriangleRight style={{ color: light ? "#dc143c" : "#64ffda", fontSize: "20px" }} /></div>
                        <p>Hello! I'm <span>Sanjana Kumari</span> from <span>Jharkhand, India</span>. I'm a passionate and aspiring Full Stack Web Developer dedicated to building efficient and scalable web applications.</p>
                    </div>
                    
                    <div id='mysitem'>
                        <div><GoTriangleRight style={{ color: light ? "#dc143c" : "#64ffda", fontSize: "20px" }} /></div>
                        <p>I’m currently pursuing my first year of <span>BCA at Marwari College, Ranchi</span>, alongside a Full Stack Web Development course at Masai School (July 2024 – Feb 2025).</p>
                    </div>

                    <div id='mysitem'>
                        <div><GoTriangleRight style={{ color: light ? "#dc143c" : "#64ffda", fontSize: "20px" }} /></div>
                        <p>In 2023, I completed a part-time Diploma in Computer Applications (DCA), which gave me a strong foundation in computer basics and digital productivity tools.</p>
                    </div>

                    <div id='mysitem'>
                        <div><GoTriangleRight style={{ color: light ? "#dc143c" : "#64ffda", fontSize: "20px" }} /></div>
                        <p>I specialize in the <span>MERN stack (MongoDB, Express.js, React, Node.js)</span> and enjoy creating full-fledged, responsive applications with seamless frontend-backend integration.</p>
                    </div>

                    <div id='mysitem'>
                        <div><GoTriangleRight style={{ color: light ? "#dc143c" : "#64ffda", fontSize: "20px" }} /></div>
                        <p>My journey involves developing real-world projects, mastering <span>data structures, algorithms</span>, and implementing RESTful APIs with a focus on clean architecture and performance.</p>
                    </div>

                    <div id='mysitem'>
                        <div><GoTriangleRight style={{ color: light ? "#dc143c" : "#64ffda", fontSize: "20px" }} /></div>
                        <p>I take pride in being a proactive learner and a great team player, with strong communication skills and a problem-solving mindset.</p>
                    </div>

                    <div id='mysitem'>
                        <div><GoTriangleRight style={{ color: light ? "#dc143c" : "#64ffda", fontSize: "20px" }} /></div>
                        <p>Some of the exciting projects I’ve built are showcased below. They reflect my dedication to building user-centric, scalable, and dynamic applications.</p>
                    </div>
                </div>
                <div id='myimg'>
                    <img src={myImg} alt="Myself" />
                </div>
            </div>
        </div>
    );
};
