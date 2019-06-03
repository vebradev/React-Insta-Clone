import React from 'react';
import Logo from '../../assets/inLogo.png';
import Camera from '../../assets/camera.png';

const SearchBarContainer = () => {
    return (
        <div className="search-bar-container">
            <div className="logos">
                <img className="camera-icon" src={Camera} alt="Camera icon"/>
                <div></div>
                <img className="instagram-logo" src={Logo} alt="Instagram Clone Logo"/>
            </div>
            <div className="search-bar">
                <input placeholder="Search"/>
            </div>
            <div className="searc-bar-controls">
                <span>compass</span>
                <span>heart</span>
                <span>user</span>
            </div>
        </div>
    );
}

export default SearchBarContainer;