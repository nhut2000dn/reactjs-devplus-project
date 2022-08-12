import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Questions from "./Questions";
import Image from "./Image";

const Wrapper = styled.div`
  padding: 100px 0;
`;

const ColStyled = styled(Col)`
  padding-right: 0;
  padding-left: 0;
`;

const Concern = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <ColStyled lg={6}>
            <Questions />
          </ColStyled>
          <ColStyled lg={6}>
            <Image />
          </ColStyled>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Concern;
