import React from "react";
import Logo from "../../assets/inLogo.png";
import Camera from "../../assets/camera.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faHeart,
  faUser
} from "@fortawesome/free-regular-svg-icons";

const SearchBarContainer = props => {
  return (
    <div className="search-bar-container">
      <div className="logos">
        <img className="camera-icon" src={Camera} alt="Camera icon" />
        <div />
        <img className="instagram-logo" src={Logo} alt="Instagram Clone Logo" />
      </div>

      <div className="search-bar">
        <input
          onChange={props.searchHandler}
          value={props.searchQuery}
          placeholder="Search"
        />
      </div>

      <div className="search-bar-controls">
        <FontAwesomeIcon icon={faCompass} />
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  );
};

export default SearchBarContainer;
