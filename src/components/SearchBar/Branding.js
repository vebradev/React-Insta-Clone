import React from "react";
import styled from "styled-components";
import Logo from "../../assets/inLogo.png";
import Camera from "../../assets/camera.png";

const StyledLogos = styled.div`
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
`;

class Logos extends React.Component {
  render() {
    return (
      <StyledLogos>
        <img className="camera-icon" src={Camera} alt="Camera icon" />
        <div className="separator" />
        <img className="instagram-logo" src={Logo} alt="Instagram Clone Logo" />
      </StyledLogos>
    );
  }
}

export default Logos;
