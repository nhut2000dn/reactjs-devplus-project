import React from "react";
import { Offcanvas } from "react-bootstrap";
import styled from "styled-components";
import Logo from "../../assets/images/logo.png";
import ImageGallery from "./ImageGallery";
import Map from "./Map";
import SocialIcon from "./SocialIcon";

const OffcanvasStyled = styled(Offcanvas)`
  width: 500px !important;
  padding: 20px 30px;
`;

const LogoImg = styled.div`
  margin: 30px 0;
  text-align: center;
`;

const Img = styled.img`
  max-height: 36px;
`;

const Desc = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

const Gallery = styled.div``;

const Sidebar = ({ show, onHide }) => {
  return (
    <OffcanvasStyled show={show} onHide={onHide} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <LogoImg>
          <Img src={Logo} alt="Logo" />
        </LogoImg>
        <Desc>
          <span>
            Devplus's mission is filling the gap between school and corporate,
            reduce in-house training cost and effort for IT companies.
          </span>
        </Desc>
        <Gallery>
          <ImageGallery />
        </Gallery>
        <Map />
        <SocialIcon />
      </Offcanvas.Body>
    </OffcanvasStyled>
  );
};

export default Sidebar;
