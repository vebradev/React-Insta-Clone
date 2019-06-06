import React from "react";
import styled from "styled-components";
import Branding from "./Branding";
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
      <Branding />

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
