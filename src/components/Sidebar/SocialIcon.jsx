import React from "react";
import { Facebook } from "react-bootstrap-icons";
import styled from "styled-components";
import { BLACK, BLUE } from "../../constants/colors";

const Link = styled.a`
  display: block;
  text-align: center;
  color: ${BLACK};
  text-decoration: none;
`;

const FacebookStyled = styled(Facebook)`
  cursor: pointer;
  transition: all ease 0.3s;
  &:hover {
    color: ${BLUE};
  }
`;

const SocialIcon = () => {
  return (
    <Link href="https://www.facebook.com/Devplusprogramme" target="_blank">
      <FacebookStyled size={24} />
    </Link>
  );
};

export default SocialIcon;
