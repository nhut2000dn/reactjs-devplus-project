import React from "react";
import { Offcanvas } from "react-bootstrap";
import styled from "styled-components";
import ImageGallery from "./ImageGallery";
import Map from "./Map";
import SocialIcon from "./SocialIcon";
import { useState, useEffect } from "react";
import { getSidebar } from "../../service/BaseApi";

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
  const [sidebar, setSidebar] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await getSidebar();
      res.data[0] && setSidebar(res.data[0]);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <>
      {
        Object.keys(sidebar).length > 0 ?
        <OffcanvasStyled show={show} onHide={onHide} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <LogoImg>
              <Img src={sidebar.logoImg} alt="Logo" />
            </LogoImg>
            <Desc>
              <span>{sidebar.desc}</span>
            </Desc>
            <Gallery>
              <ImageGallery urlImages={sidebar.gallery} />
            </Gallery>
            <Map urlMapImage={sidebar.mapImg} />
            <SocialIcon iconSocialText={sidebar.socialIcon} />
          </Offcanvas.Body>
        </OffcanvasStyled> : <></>
      }
    </>
  );
};

export default Sidebar;
