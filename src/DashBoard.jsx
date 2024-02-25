import React, { useState } from 'react';
import './styles.css'; // Import CSS file for styling

function QueryDashboard() {
    const [department, setDepartment] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [progress, setProgress] = useState(0);

    const raiseIssue = () => {
        // Logging values for demonstration
        console.log("Department: " + department);
        console.log("Description: " + description);
        console.log("Date: " + date);
        console.log("Progress: " + progress + "%");

        // You can send this data to the backend for further processing
        // For a fully functional application, you would typically make an AJAX request to your server
        // and handle the data on the server side using a server-side language like Node.js, Python, etc.

        // Clear input fields after submitting
        document.write("<h2>Query Details</h2>");
        document.write("<p><strong>Department:</strong> " + department + "</p>");
        document.write("<p><strong>Description:</strong> " + description + "</p>");
        document.write("<p><strong>Date of Issue Raised:</strong> " + date + "</p>");
        document.write("<p><strong>Progress:</strong> " + progress + "%</p>");
        setDepartment('');
        setDescription('');
        setDate('');
        setProgress(0);
    };

    return (
        <div className="container">
            <h1 className="heading">Query</h1>
            <label htmlFor="department">Department:</label>
            <input type="text" id="department" value={department} onChange={(e) => setDepartment(e.target.value)} />
            
            <label htmlFor="description">Description:</label>
            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            
            <label htmlFor="date">Date of Issue Raised:</label>
            <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
            
         <label htmlFor="progress">Progress:</label>
            <input type="range" id="progress" min="0" max="100" value={progress} onChange={(e) => setProgress(e.target.value)} />
            <progress max="100" value={progress}></progress>
            
            <button onClick={raiseIssue}>Raise Issue</button>
        </div>
    );
}

export default QueryDashboard;
