import React from 'react';
import "./Homepage.css";
import about from './assets/about.jpg';
import { NavLink } from "react-router-dom";
export default function Homepage() {
  return (
    <>
        {/* <div className='navbar'>
            <a href="#" className='logo'>CivicSquare</a>
            <div className="nav-items">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Services</a>
                <a href="">Contact</a>
            </div>
        </div> */}
        <header>
            <a href="#" className='logo'><span>CivicSquare</span></a>
            <ul className='navbar'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact us</a></li>
            </ul>
            <div className='main'>
                <NavLink to="/signup">Sign-in</NavLink>
                <NavLink to="/signup">Register</NavLink>
                {/* <div className='bx bx-menu' id="menu-icon"></div> */}
                {/* <a href="#" className='user'></a> */}
            </div>
        </header>
        <div className='hero'>
            <div className="herotxt">
                <h1>CivicSquare</h1>
                <p>Empowering Communities, Building Solutions Together</p>
            </div>
        </div>
        <div className='about' id='about'>
            <h1>What are we?</h1>
            <div className="about-container">
                <div className='about-img'>
                    <img src={about} alt="" />
                    {/* <h1>img</h1> */}
                    {/* <h1>img</h1> */}
                </div>
                <div className='about-content'>
                    <h1>About us</h1>
                    <p>The goal is to make public amenities easier to access and more efficient to ensure that people may easily interact with their local government.Our application CivicSquare offers a range of features designed for convenient and efficient access to public services.</p>
                    <p>Access public services from anywhere, anytime, eliminating the need for physical visits to government offices.Minimize expenses for citizens by eliminating the need for travel and paperwork associated with accessing public services, ultimately saving time and money.</p>
                    <p>By providing user-friendly tools and streamlined processes, our application CivicSquare aims to enhance efficiency and convenience, ultimately improving the overall experience of accessing public amenities.Empower's mission to simplify access to governmental services through the CivicSquare application addresses the frustration and inefficiency individuals face in interacting with local government. </p>
                </div>
            </div>
        </div>
        <div className='services' id='services'>
            <h1>Our Services</h1>
            <div className="services-container">
                <div className='services-content'>
                    
                    {/* <h1>img</h1> */}
                    {/* <h1>img</h1> */}
                    <p>The goal is to make public amenities easier to access and more efficient to ensure that people may easily interact with their local government.Our application CivicSquare offers a range of features designed for convenient and efficient access to public services.</p>
                    <p>Access public services from anywhere, anytime, eliminating the need for physical visits to government offices.Minimize expenses for citizens by eliminating the need for travel and paperwork associated with accessing public services, ultimately saving time and money.</p>
                    <p>By providing user-friendly tools and streamlined processes, our application CivicSquare aims to enhance efficiency and convenience, ultimately improving the overall experience of accessing public amenities.Empower's mission to simplify access to governmental services through the CivicSquare application addresses the frustration and inefficiency individuals face in interacting with local government. </p>
                
                </div>
                <div className='services-img'>
                <img src={about} alt="" />
                </div>
            </div>
        </div>
        
        <div className='contact' id='contact'>
            <h1>Connect with us</h1>
            <div className="contact-box">
                <div className="contact-left">
                    <h3>Send your request</h3>
                    <form action="https://formsubmit.co/dharaniponnivalavan@gmail.com" method="POST">
                        <div className="input-row">
                            <div className="input-group">
                                <label>Name</label>
                                <input name="name" type="text" placeholder='John Doe' />
                            </div>
                            <div className="input-group">
                                <label>Phone</label>
                                <input type="text" name="phone" placeholder='+91 9876543210' />
                            </div>
                        </div>
                        <div className="input-row">
                            <div className="input-group">
                                <label>Email</label>
                                <input type="email" name="email" placeholder='johndoe@gmail.com' />
                            </div>
                            <div className="input-group">
                                <label>Subject</label>
                                <input type="text" name="subject" placeholder='Product demo' />
                            </div>
                        </div>
                        <label>Message</label>
                        <textarea rows="5" name="message" placeholder='Your Message'></textarea>
                        <button>Send</button>
                    </form>
                </div>
                <div className="contact-right">
                    <h3>Reach us</h3>
                    <table>
                        <tr>
                            <td>Email</td>
                            <td>contactus@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>+91 9876543210</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>123, ABC Road,<br /> XYZ City,<br /> 123456</td>
                            {/* <Link to="/signup">sign in</Link> */}
                        </tr>
                    </table>
                </div>
            </div>

        </div>
    </>
  );
}