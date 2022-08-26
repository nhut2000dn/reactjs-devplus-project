import styled from "styled-components";
import React from "react";
import { useState, useEffect } from 'react';
import { getCampus } from '../../service/BaseApi';

const CampusWrapper = styled.div`
  background-color: #F3F8F9;
`;
const Container = styled.div``;
const CampusMainTitle = styled.h2`
  font-size: 35px;
  font-weight: 700;
`;
const Row = styled.div``;
const CampusCard = styled.div`
  padding: 0 15px;
  margin-bottom: 30px;
`;
const CampusInfo = styled.div`
  border: 1px solid #DFE9EB;
  padding: 30px;
  border-radius: 5px;
`;
const CampusImage = styled.img`
  width: 100%;
  margin-bottom: 30px;
  border-radius: 5px;
`;
const CampusTitle = styled.h3`
  height: 50px;
  font-size: 20px;
  color: #111111;
`;
const Campus = () => {
  const [campus, setCampus] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCampus();
      res.data[0] && setCampus(res.data[0]);
    }

    fetchData()
      .catch(console.error);;
  }, []);

  return (
    <>
      {
        Object.keys(campus).length > 0 ?
        <CampusWrapper id="rs-popular-courses">
          <Container className="container">
            <CampusMainTitle>Our main campus</CampusMainTitle>
            <Row className="row">
              {
                campus.items.map((item, index) => {
                  return (
                    <CampusCard key={index} className="col-md-6 col-lg-4">
                      <CampusInfo>
                        <CampusImage loading="lazy" alt="Campus" src={item.img} />
                        <CampusTitle>{item.desc}</CampusTitle>
                      </CampusInfo>
                    </CampusCard>
                  );
                })
              }
            </Row>
          </Container>
        </CampusWrapper> : <></>
      }
    </>
  );
};
export default Campus;