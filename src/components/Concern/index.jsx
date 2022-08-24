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

  const [concern, setConcern] = useState({concerns: []});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getConcern();
      setConcern(data.data[0]);
    }

    fetchData()
      .catch(console.error);;
  }, []);

  return (
    <>
      {
        concern.concerns.length ? 
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
          </Wrapper> : <div></div>
      }
    </>
  );
};

export default Concern;
