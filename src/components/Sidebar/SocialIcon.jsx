import React from "react";
import * as Icon from "react-bootstrap-icons";
import styled from "styled-components";
import { BLACK, BLUE } from "../../constants/colors";
import { useState, useEffect } from 'react';

const Link = styled.a`
  display: block;
  text-align: center;
  color: ${BLACK};
  text-decoration: none;
  & > svg {
    cursor: pointer;
    transition: all ease 0.3s;
    &:hover {
      color: ${BLUE};
    }
  }
`;

const SocialIcon = (props) => {

  const [IconComponent, setIcon] = useState(Icon.Rainbow);

  useEffect(() => {
    setIcon(Icon[props.iconSocialText])
  }, [props]);

  return (
    <Link href="https://www.facebook.com/Devplusprogramme" target="_blank">
      <IconComponent size={24} />
    </Link>
  );
};

export default SocialIcon;
