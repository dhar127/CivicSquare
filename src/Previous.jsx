import React from 'react';
import { NavLink } from "react-router-dom";

const Previous = () => {
  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-header">Pre Raised Issue List</div>
        <div className="card-body">
          <li className="list-group-item">
            <div className="issue-description">
              <h3 style={{ color: 'green' }}>Issue 1: HEALTH</h3>
              <span className="badge badge-primary">
                <div className="progress-bar1">
                  <progress value={100} min={0} max={100} style={{ visibility: 'hidden', height: '0', width: '0' }}>100%</progress>
                </div>
               
              </span>
              <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu nisi eu justo semper cursus.</p>
            </div>
            <div className="issue-image">
              <img src="image-url.jpg" alt="Issue" />
            </div>
          </li>
          <br></br>
         
        </div>
      </div>
    </div>
  );
}

export default Previous;
