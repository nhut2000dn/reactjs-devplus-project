import styled from "styled-components";

import campus1 from "../../assets/images/campus1.webp";
import campus2 from "../../assets/images/campus2.webp";
import campus3 from "../../assets/images/campus3.webp";

const CampusWrapper = styled.div`
  background-color: #f3f8f9;
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
  border: 1px solid #dfe9eb;
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
  return (
    <CampusWrapper id="rs-popular-courses">
      <Container className="container">
        <CampusMainTitle>Our main campus</CampusMainTitle>
        <Row className="row">
          <CampusCard className="col-md-6 col-lg-4">
            <CampusInfo>
              <CampusImage loading="lazy" alt="Campus 1" src={campus1} />
              <CampusTitle>One plus (+) Programing foundation</CampusTitle>
            </CampusInfo>
          </CampusCard>
          <CampusCard className="col-md-6 col-lg-4">
            <CampusInfo>
              <CampusImage loading="lazy" alt="Campus 2" src={campus2} />
              <CampusTitle>Two plus (++) Skill up to to get ready</CampusTitle>
            </CampusInfo>
          </CampusCard>
          <CampusCard className="col-md-6 col-lg-4">
            <CampusInfo>
              <CampusImage loading="lazy" alt="Campus 3" src={campus3} />
              <CampusTitle>Three plus (+++) How to become a senior</CampusTitle>
            </CampusInfo>
          </CampusCard>
        </Row>
      </Container>
    </CampusWrapper>
  );
};

export default Campus;
