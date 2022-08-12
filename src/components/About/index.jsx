import styled from "styled-components";

import { TitleFont } from "../../constants/fonts";
import { BLUE } from "../../constants/colors";
import { laptop } from "../../responsive";

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

const Item = styled.li``;

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

const ListBoard = styled.ul`
  ${Item} {
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
  }
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
  return (
    <AboutContainer>
      <Container className="container d-lg-flex">
        <NoticeBoard>
          <ContainerBoard>
            <Title>Road to be a devplus</Title>
            <ListBoard>
              <Item>
                <Order>1</Order>
                <Content>Apply Devplus</Content>
              </Item>
              <Item>
                <Order>2</Order>
                <Content>Testing and Interview</Content>
              </Item>
              <Item>
                <Order>3</Order>
                <Content>1st plus (+) campus</Content>
              </Item>
              <Item>
                <Order>4</Order>
                <Content>2nd plus (++) campus</Content>
              </Item>
              <Item>
                <Order>5</Order>
                <Content>Onboard & start your career</Content>
              </Item>
            </ListBoard>
          </ContainerBoard>
        </NoticeBoard>
        <AboutPart>
          <SectionAbout>
            <SubTitle>About Devplus</SubTitle>
            <TitleAbout>
              The Fact: Skilled labour shortage for software companies but
              full of freshers and low level juniors
            </TitleAbout>
            <DescAbout>
								Our responsibility is filling the gap between the quality of
								graduate students and the quality of engineers. Devplus will
								help reducing the cost of re-training and accelerating the
								skill-up progress of students and freshers.
            </DescAbout>
          </SectionAbout>
        </AboutPart>
      </Container>
    </AboutContainer>
  );
};

export default About;

