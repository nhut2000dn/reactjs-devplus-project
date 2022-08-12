import React from "react";
import styled from "styled-components";
import { BLACK, BLUE } from "../../constants/colors";

const Menu = styled.ul`
  display: inline-block;
  position: absolute;
  width: 300px;
  left: 0;
  top: 110%;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  transform-origin: left top;
  transform: scaleY(0);
`;

const MenuItem = styled.li`
  padding: 12px 8px;
`;

const Link = styled.span`
  font-weight: 400;
  color: ${BLACK};
  transition: all ease 0.3s;

  &:hover {
    color: ${BLUE};
  }
`;

const SubMenu = () => {
  return (
    <Menu>
      <MenuItem>
        <Link href="/one-plus-campus.html">One Plus Campus</Link>
      </MenuItem>
      <MenuItem>
        <Link href="/two-plus-campus.html">Two Plus Campus</Link>
      </MenuItem>
      <MenuItem>
        <Link href="/">Three Plus Campus</Link>
      </MenuItem>
    </Menu>
  );
};

export default SubMenu;
