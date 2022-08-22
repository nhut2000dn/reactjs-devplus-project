import styled from "styled-components";
import React from "react";
import { TitleFont } from "../../constants/fonts";
import { BLUE } from "../../constants/colors";

const Item = styled.li`
  position: relative;
  background: #e7f4f6;
  margin-bottom: 12px;
  border-radius: 3px;
  padding: 22px;
  padding-left: 0 !important;
  animation-name: fadeInUp;
  visibility: visible;
  animation-duration: 3000ms;
  animation-delay: 900ms;
`;

const Order = styled.div`
  border-right: 1px solid  ${BLUE};
  font-family: ${TitleFont};
  transform: translateY(-50%);
  color: ${BLUE};
  padding: 0 33px 0 0;
  position: absolute;
  font-weight: 600;
  font-size: 22px;
  left: 33px;
  top: 50%;
`;

const Content = styled.div`
  font-weight: 600;
  font-size: 15px;
  color: #505050;
  padding-left: 95px;
`;

const ItemBoard = (props) => {
  return (
    <Item>
      <Order>{ props.index }</Order>
      <Content>{ props.content }</Content>
    </Item>
  );
};

export default ItemBoard;