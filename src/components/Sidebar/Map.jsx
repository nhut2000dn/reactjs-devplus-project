import React from "react";
import styled from "styled-components";
import MapImage from "../../assets/images/map.webp";

const Container = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img``;

const Map = () => {
  return (
    <Container>
      <Img src={MapImage} alt="Map Image" />
    </Container>
  );
};

export default Map;
