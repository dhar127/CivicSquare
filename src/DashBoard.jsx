import React from 'react';
import './DashBoard.css'; // Import your custom CSS file

const Dashboard = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your query has been taken into account');
    };

    return (
        <div className="fully">
            <h1 className="h1dash">Dashboard</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="container-dash" align="center">
                        <div className="card-header">Issue Details</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
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
                                    <label htmlFor="issue" className="form-label">Issue</label>
                                    <input type="text" className="form-control" id="issue" placeholder="Enter issue" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">Image</label>
                                    <input type="file" className="form-control" id="image" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="date" className="form-label">Date of Issue</label>
                                    <input type="date" className="form-control" id="date" />
                                </div>
                                
                                <button type="submit" className="btn btn-primary">Raise Issue</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Pre Raised Issue List</div>
                        <div className="card-body">
                           
                                <li className="list-group-item">Issue 1: HEALTH <span className="badge badge-primary"> 100% completed✅</span></li><br></br>
                                <li className="list-group-item">Issue 2: PWD<span className="badge badge-success"> Closed</span></li><br></br>
                                <li className="list-group-item">Issue 3: EB Bill<span className="badge badge-warning"> In Progress</span></li><br></br>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
