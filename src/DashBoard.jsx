import React from 'react';
import './DashBoard.css'; // Import your custom CSS file
import { NavLink } from "react-router-dom";

const Dashboard = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your query has been taken into account');
    };

    return (
        <div className="fully">
            
            <div className="row">
            <h1 className='h2dash'>Need to solve your issue?</h1>
  <p className='pdash'>It's your space, we're here to help.</p>
                <div className="col-md-6">
                    <div className="container-dash" align="center">
                        <div className="card-header">Issue Details</div>
                        <NavLink to="/map" style={{ textDecoration: 'underline', color: '#fff' }}>View your Area's departments</NavLink>

 
                        <div className="card-body">
                            <form onSubmit={handleSubmit} action="https://formsubmit.co/dharaniponnivalavan@gmail.com" method="POST">
                                <div className="mb-3">
                                    <label htmlFor="department" className="form-label">Department</label>
                                    <select className="form-select" id="department">
                                        <option value="Health">Health</option>
                                        <option value="Transportation">Transportation</option>
                                        <option value="PWD">PWD</option>
                                        <option value="Education">Education</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="issue" className="form-label">Enter your Area</label>
                                    <input type="text" className="form-control" id="issue" placeholder="Enter area" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="issue" className="form-label">Issue</label>
                                    <input type="text" className="form-control" id="issue" placeholder="Enter issue" />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">Image</label>
                                    <input type="file" className="form-control" id="image" />
                                </div>
                                <div className="mb-3">
    <label htmlFor="description" className="form-label">Brief Description of the Problem:</label>
    <textarea className="form-control" id="description" rows="4" placeholder="Enter brief description"></textarea>
</div>

                                <div className="mb-3">
                                    <label htmlFor="date" className="form-label">Date of Issue</label>
                                    <input type="date" className="form-control" id="date" />
                                </div>
                             
                                <button color='white' className='buttondash'><NavLink to="/" className="buttondash">Raise Issue</NavLink></button><br></br><br></br>
                                <NavLink to="/prev" className="buttondash">Previous Issues</NavLink>

                             
                            </form>
                        </div>
                    </div>
                </div>
                <NavLink to="/" className="back-link">👈Back To Home</NavLink><br/>
            </div>
            
        </div>
    );
};

export default Dashboard;

