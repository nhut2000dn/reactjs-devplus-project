import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Questions from "./Questions";
import Image from "./Image";
import { useState, useEffect } from 'react';
import { getConcern } from '../../service/BaseApi';

const Wrapper = styled.div`
  padding: 100px 0;
`;

const ColStyled = styled(Col)`
  padding-right: 0;
  padding-left: 0;
`;

const Concern = () => {

  const [concern, setConcern] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await getConcern();
      res.data[0] && setConcern(res.data[0]);
    }

    fetchData()
      .catch(console.error);;
  }, []);

  return (
    <>
      {
        Object.keys(concern).length > 0 ?
          <Wrapper>
            <Container>
              <Row>
                <ColStyled lg={6}>
                  <Questions headingTitle={concern.heading} concernsQuestions={concern.concerns} />
                </ColStyled>
                <ColStyled lg={6}>
                  <Image videoImg={concern.img} urlVideo={concern.video} />
                </ColStyled>
              </Row>
            </Container>
          </Wrapper> : <></>
      }
    </>
  );
};

export default Concern;
