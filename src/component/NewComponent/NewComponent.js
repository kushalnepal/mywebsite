import React from 'react';
import './NewComponent.css';
import imgcool from '../images/digital.jpg';
import { Link, withRouter } from 'react-router-dom';
import amazonthumbnail from '../images/amazonthumbnail.png';
import staticwebsite from '../images/staticweb.jpg';
import crud from '../images/CRUD.png';

function NewComponent() {
    return (
        <>
            <nav className="navbar active">
                <div className="max-width">
                    <div className="logo">
                        <Link to="/">
                            <span>portfolio.</span>
                        </Link>
                    </div>
                    <ul className="menu">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/service">Service</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/teams">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <div className="menu-btn">
                        <input type="checkbox" id="check" />
                        <label htmlFor="check" className="checkbtn"></label>
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </nav>

            <section className="home" id="home">
                <div className="max-width">
                    <div className="home-content">
                        <div className="text-1">Hello!!, my name is </div>
                        <div className="text-2">Kushal Nepal. </div>
                        <div className="text-3"><span>Full Stack Developer</span></div>
                        <Link to="/hire_me">Hire me</Link>
                    </div>
                </div>
            </section>

            <section className="about" id="about">
                <div className="max-width">
                    <h2 className="title">About me</h2>
                    <div className="about-content">
                        <div className="column left">
                            <img src={imgcool} alt="imgcool" />
                        </div>
                        <div className="column right">
                            <div className="text">I am Kushal and I am a <span>Web Developer</span></div>
                            <p>Experienced Web Developer with a demonstrated history of working in the e-learning industry. Skilled in Full-Stack Development, Front-end Development, Research, Programming, and Writing. Strong engineering professional with a Bachelor's degree focused in development from Everest Innovative College.</p>
                            <a href="https://docs.google.com/document/d/1rzwskLgloMxDFo0EeP7PNHd2k5pZ3Zav/edit">Download CV</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services" id="services">
                <div className="max-width">
                    <div className="services-content">
                        <h2 style={{ color: "#fff" }}>My Services</h2>
                        <div className="card">
                            <i className="fas fa-paint-brush"></i>
                            <div className="text">Web Designing</div>
                            <p>Beautiful themes and responsive, customizable websites.</p>
                        </div>
                        <div className="card">
                            <i className="fas fa-code"></i>
                            <div className="text">App Development</div>
                            <p>Dynamic mobile applications designed and developed using React Native.</p>
                        </div>
                        <div className="card">
                            <i className="fas fa-chart-line"></i>
                            <div className="text">Analytics</div>
                            <p>Using our best research team, we can generate significant traffic.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="skills" id="skills">
                <div className="max-width">
                    <h2 className="title">My Skills</h2>
                    <div className="skills-content">
                        <div className="column left">
                            <div className="text">My Creative Skills and Experiences</div>
                            <p>I have completed my course and gained knowledge in Express, React, Node.js, and MongoDB. This course has helped me understand how to handle clients and everyday challenges, making me strong in design and analytics.</p>
                            <Link to="/read-more">Read more</Link>
                        </div>
                        <div className="column right">
                            <div className="bars">
                                <div className="info">
                                    <span>EXPRESS</span>
                                    <span>90%</span>
                                </div>
                                <div className="line express"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>REACT</span>
                                    <span>75%</span>
                                </div>
                                <div className="line react"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>MONGODB</span>
                                    <span>80%</span>
                                </div>
                                <div className="line mongodb"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>NODE</span>
                                    <span>85%</span>
                                </div>
                                <div className="line node"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="teams" id="teams">
                <div className="max-width">
                    <h2 className="title">My Projects</h2>
                    <div className="carousel">
                        <div className="card">
                            <div className="box">
                                <a href="http://hungry-shockley-0bea14.netlify.app">
                                    <img src={amazonthumbnail} alt="amazon clone" />
                                </a>
                                <div className="text">Amazon Clone</div>
                                <p>Amazon clone designed using React.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <a href="https://nostalgic-mahavira-3fccc8.netlify.app">
                                    <img src={crud} alt="CRUD app" />
                                </a>
                                <div className="text">CRUD App</div>
                                <p>CRUD app designed using frontend and backend (backend required).</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <a href="https://website3311087.nicepage.io/?version=55129dc6-abd6-43e8-871e-8a48e0f1b972&uid=c5c391ba-40ab-4405-940c-8c9a82489b8c">
                                    <img src={staticwebsite} alt="static website" />
                                </a>
                                <div className="text">Promotion</div>
                                <p>Static website.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Link to="/">
                <a href="/" className="gototop" style={{ background: "crimson" }}>Go to top</a>
            </Link>
            <footer>
                {/* Footer content */}
            </footer>
        </>
    );
}

export const New = withRouter(NewComponent);
