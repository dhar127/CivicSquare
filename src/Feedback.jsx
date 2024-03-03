import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleButtonClick = () => {
        setPopupVisible(true);
    };

    const handleCloseClick = () => {
        setPopupVisible(false);
    };

    return (
        <div className="fullf">
        <div className="container-1">
            <h1 className='h1f'>How was your experience?</h1>
            <div className="segmented-control">
                <div className="segmented-control__segment" title="Sad">😔</div>
                <div className="segmented-control__segment">😟</div>
                <div className="segmented-control__segment segmented-control__segment_selected">😐</div>
                <div className="segmented-control__segment">🙂</div>
                <div className="segmented-control__segment">😍</div>
               
            </div>
            <div className="progress-bar" align="center">
  <progress value={75} min={0} max={100} style={{ visibility: 'hidden', height: '0', width: '0',align:'center' }}></progress>
</div>

            <p>Please tell a bit about you so we can improve your experience later.</p>
            <input type="text" className="input" placeholder="Name" />
            <input type="text" className="input" placeholder="Email" />
            <label htmlFor="feedback-text">Your Feedback:</label>
            <textarea id="feedback-text" name="feedback-text" rows="4" cols="50"></textarea>
            <button id="submit-button" onClick={handleButtonClick} className='beforebtn'>Submit</button>

            {isPopupVisible && (
                <div id="popup">
                    <p>Thank you for your feedback!</p>
                    <button id="close-button" className='buttonf' onClick={handleCloseClick}>Close</button>
                </div>
            )}
        </div>
        </div>
    );
};

export default Feedback;