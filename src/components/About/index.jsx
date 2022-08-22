import styled from "styled-components";

import { TitleFont } from "../../constants/fonts";
import { BLUE } from "../../constants/colors";
import { laptop } from "../../responsive";
import ListBoardRoad from "./listBoard";
import { useState, useEffect } from 'react';
import { getAbout } from '../../service/BaseApi';

const AboutContainer = styled.div`
  padding-bottom: 100px;
  ${laptop({
    paddingBottom: '50px',
  })}
`;

const Container = styled.div`
  flex-direction: row-reverse;
`;

const NoticeBoard = styled.div`
  width: 33.33333333%;
  padding-right: 15px;
  padding-left: 15px;
  ${laptop({
    width: '100%',
    padding: '0',
    marginTop: '70px',
  })}
`;

const Title = styled.h4``;

const ContainerBoard = styled.div`
  margin-top: -60px;
  ${Title} {
    background: ${BLUE};
    font-size: 20px;
    text-transform: uppercase;
    padding: 18px 0;
    text-align: center;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 10px;
    font-family: ${TitleFont};
  }
  ${laptop({
    marginTop: '0',
  })}
`;

const AboutPart = styled.article`
  width: 66.66666667%;
  padding-left: 15px;
  padding-right: 50px;
  ${laptop({
    width: '100%',
    padding: '0',
    marginTop: '70px',
  })}
`;

const SectionAbout = styled.section`
  background: #e7f4f6;
  padding: 60px 60px 70px;
  border-radius: 5px;
  margin-bottom: 40px;
  margin-top: -60px;
  ${laptop({
    marginTop: '0',
  })}
`;

const SubTitle = styled.h4`
  font-size: 18px;
  line-height: 28px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 8px;
  color: ${BLUE};
`;

const TitleAbout = styled.h2`
  font-family: ${TitleFont};
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 26px;
  animation-name: fadeInUp;
  visibility: visible;
  animation-duration: 3000ms;
  animation-delay: 900ms;
`;

const DescAbout = styled.div`
  font-size: 18px;
  line-height: 30px;
  color: #505050;
  margin-bottom: 42px;
  animation-name: fadeInUp;
  visibility: visible;
  animation-duration: 3000ms;
  animation-delay: 900ms;
`;

const About = () => {

  const [about, setAbout] = useState({itemsBoard: []});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAbout();
      setAbout(data.data[0]);
    }

    fetchData()
      .catch(console.error);;
  }, []);

  return (
    <AboutContainer>
      <Container className="container d-lg-flex">
        <NoticeBoard>
          <ContainerBoard>
            <Title>{ about.titleBoard }</Title>
            <ListBoardRoad itemsBoard={ about.itemsBoard } />
          </ContainerBoard>
        </NoticeBoard>
        <AboutPart>
          <SectionAbout>
            <SubTitle>{ about.subTitleAbout }</SubTitle>
            <TitleAbout>
              { about.titleAbout }
            </TitleAbout>
            <DescAbout>
              { about.descAbout }
            </DescAbout>
          </SectionAbout>
        </AboutPart>
      </Container>
    </AboutContainer>
  );
};

export default About;

