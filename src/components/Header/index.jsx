import React, { useState } from "react";
import { Button, Col, Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import Logo from "../../assets/images/logo.png";
import { WHITE, BLUE, BLACK } from "../../constants/colors";
import Sidebar from "../Sidebar";
import SubMenu from "./SubMenu";

const HeaderContainer = styled.header`
  display: block;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
`;

const NavbarStyled = styled(Navbar)`
  background-color: ${WHITE};
`;

const LogoImg = styled.img`
  max-height: 36px;
`;

const NavbarToggle = styled(Navbar.Toggle)`
  margin-left: auto;
`;

const NavLink = styled(Nav.Link)`
  font-weight: 600;
  padding: 30px 0;
  color: ${BLACK};

  &:hover {
    color: ${BLUE};
  }
`;

const NavLinkDrop = styled(NavLink)`
  position: relative;

  &::before {
    content: "+";
    position: absolute;
    top: auto;
    right: -10px;
    display: block;
  }

  &:hover::before {
    content: "-";
  }

  &:hover {
    > ul {
      transform: scaleY(1);
    }
  }
`;

const NavMenu = styled(Nav)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const HamburgerButton = styled(Button)`
  width: 30px;
  height: 18px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: none;
  outline: none;
  background: none;
  box-shadow: none;
  cursor: pointer;

  &:hover {
    background-color: ${WHITE};

    > span {
      background-color: ${BLUE};
    }
  }

  &:focus,
  &:active {
    border: none;
    outline: none;
    background: none;
    box-shadow: none !important;
  }
`;

const HamburgerSpan = styled.span`
  width: 100%;
  height: 2px;
  background-color: #212529;
  transition: all ease 0.3s;
`;

const Header = () => {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(hover);

  return (
    <HeaderContainer>
      <NavbarStyled expand="lg">
        <Container>
          <Col lg={2}>
            <Navbar.Brand href="#home">
              <LogoImg src={Logo} alt="Logo Image" />
            </Navbar.Brand>
          </Col>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="col-lg-8" id="basic-navbar-nav">
            <NavMenu className="me-auto align-items-start">
              <NavLink href="#home">HOME</NavLink>
              <NavLink href="#about">ABOUT DEVPLUS</NavLink>
              <NavLinkDrop
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                href="#programme"
              >
                OUR PROGRAMME
                <SubMenu />
              </NavLinkDrop>
              <NavLink href="#activities">DEVPLUS ACTIVITIES</NavLink>
            </NavMenu>
          </Navbar.Collapse>
          <Col lg={2} className="d-none d-lg-flex justify-content-lg-end">
            <HamburgerButton
              variant="primary"
              onClick={handleShow}
              className="me-2"
            >
              <HamburgerSpan />
              <HamburgerSpan />
              <HamburgerSpan />
            </HamburgerButton>
          </Col>
        </Container>
      </NavbarStyled>

      <Sidebar show={show} onHide={handleClose} />
    </HeaderContainer>
  );
};

export default Header;
