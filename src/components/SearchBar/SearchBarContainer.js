import React from "react";
import styled from "styled-components";
import Logo from "../../assets/inLogo.png";
import Camera from "../../assets/camera.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faHeart,
  faUser
} from "@fortawesome/free-regular-svg-icons";

const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 0 60px 0;
  height: 77px;

  background-color: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);

  .logos {
    display: flex;
    align-items: flex-start;

    .instagram-logo {
      width: 103px;
    }

    .separator {
      background-color: #262626;
      height: 28px;
      margin: 0 16px;
      width: 1px;
    }
  }

  .search-bar input {
    background: #fafafa;
    border: solid 1px #dbdbdb;
    text-align: center;
    border-radius: 3px;
    color: #212121;
    font-size: 0.9rem;
    padding: 7px;
    outline: none;
  }

  .search-bar-controls {
    font-size: 24px;

    svg {
      margin: 0 5px;
      padding: 5px;
      cursor: pointer;
      color: #999999;
      transition: all 0.2s;

      &:hover {
        color: #000;
      }
    }
  }
`;

const SearchBarContainer = props => {
  return (
    <Header className="search-bar-container">
      <div className="logos">
        <img className="camera-icon" src={Camera} alt="Camera icon" />
        <div className="separator" />
        <img className="instagram-logo" src={Logo} alt="Instagram Clone Logo" />
      </div>

      <div className="search-bar">
        <input
          onChange={props.searchResults}
          placeholder="Search"
        />
      </div>

      <div className="search-bar-controls">
        <FontAwesomeIcon icon={faCompass} />
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faUser} />
      </div>
    </Header>
  );
};

export default SearchBarContainer;
