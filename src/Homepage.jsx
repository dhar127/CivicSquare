import React from 'react';
import "./Homepage.css";

import about1 from './assets/about1.png';
import github from './assets/github.png';
import whatsapp from './assets/whatsapp.png';
import linkedin from './assets/linkedin.png';
import services from "./assets/services.jpg";
import { NavLink } from "react-router-dom";
import gmail from "./assets/gmail.png";
import  insta from "./assets/insta.png";
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
            <div className="herotxt typewriter">
                <h1>CivicSquare🌍</h1>
                <p>Empowering Communities, Building Solutions Together</p>
            </div>
        </div>
        <div className='about' id='about'>
            <h1>What are we?</h1>
            <div className="about-container">
                <div className='about-img'>
                    <img src={about1} alt=""  className='animated-img'/>
                    {/* <h1>img</h1> */}
                    {/* <h1>img</h1> */}
                </div>
                <div className='about-content'>
                    <h1>About us</h1>
                    <p>The goal is to make public amenities <span class="highlight">easier to access </span>and more efficient to ensure that people may easily interact with their local government. Our application <span class="highlight">CivicSquare</span> offers a range of features designed for <span class="highlight">convenient</span> and efficient access to public services.</p>
 {/* <p>Access public services from anywhere, anytime, eliminating the need for physical visits to government offices.Minimize expenses for citizens by eliminating the need for travel and paperwork associated with accessing public services, ultimately saving time and money.</p>
                    <p>By providing user-friendly tools and streamlined processes, our application CivicSquare aims to enhance efficiency and convenience, ultimately improving the overall experience of accessing public amenities.Empower's mission to simplify access to governmental services through the CivicSquare application addresses the frustration and inefficiency individuals face in interacting with local government. </p> */}
                </div>
            </div>
        </div>
        <div className='services' id='services'>
            <h1>Our Services</h1>
            <div className="services-container">
                <div className='services-content'>
                    
                    {/* <h1>img</h1> */}
                    {/* <h1>img</h1> */}
                    {/* <p>The goal is to make public amenities easier to access and more efficient to ensure that people may easily interact with their local government.Our application CivicSquare offers a range of features designed for convenient and efficient access to public services.</p> */}
                    <p>Access public services from anywhere, anytime, eliminating the need for physical visits to government offices.<span class="highlight">Minimize expenses</span>  for citizens by eliminating the need for travel and paperwork associated with <span class="highlight">accessing public services</span> , ultimately saving time and money.</p>
                    {/* <p>By providing user-friendly tools and streamlined processes, our application CivicSquare aims to enhance efficiency and convenience, ultimately improving the overall experience of accessing public amenities.Empower's mission to simplify access to governmental services through the CivicSquare application addresses the frustration and inefficiency individuals face in interacting with local government. </p>  */}
                
                </div>
                <div className='services-img'>
                <img src={services} alt="" />
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
        </tr>
      
        <h3>Send us Your Valuable Feedback</h3>
    <NavLink to="/feedback"><button className='feed-btn'>Send here</button></NavLink>
    <tr>
            
            <td><a href="https://wa.me/7305841274?text=Hello%20Dharani!!" target="_blank" rel="noopener noreferrer"><img src={whatsapp}></img></a>
       
            
            <a href="https://www.instagram.com/d_p12.7/" target="_blank" rel="noopener noreferrer"><img src={insta}></img></a>
       
            <br></br><br></br>
           <a href="https://github.com/dhar127" target="_blank" rel="noopener noreferrer"><img src={github}></img></a>
      
           
            <a href="https://www.linkedin.com/in/dharani-p-57327b259/" target="_blank" rel="noopener noreferrer"><img src={linkedin}></img></a></td>
        </tr>
    </table>
   
</div>


            </div>
            <div className="footer-bottom">
                <h4>&copy; 2024 CivicSquare. All Rights Reserved.</h4>
            </div>
        </div>
    </>
  );
}