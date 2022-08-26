import styled from "styled-components";
import React from "react";
import ItemBoard from "./item";

const ListBoard = styled.ul``;

const ListBoardRoad = (props) => {
  return (
    <ListBoard>
      {props.itemsBoard.map((item, index) => {
        return <ItemBoard key={index + 1} index={index + 1} content={item} />;
      })}
    </ListBoard>
  );
};

export default ListBoardRoad;
