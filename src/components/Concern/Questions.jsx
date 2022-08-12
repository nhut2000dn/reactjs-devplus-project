import React from "react";
import Accordion from "react-bootstrap/Accordion";
import styled from "styled-components";
import { BLUE, WHITE } from "../../constants/colors";

const Wrapper = styled.div`
  padding: 50px 20px;
  background-color: #f9f8f8;
`;

const Title = styled.div`
  margin-bottom: 40px;
`;

const AccordionItemStyled = styled(Accordion.Item)`
  margin-bottom: 25px;
`;

const AccordionHeaderStyled = styled(Accordion.Header)`
  & > button {
    padding: 20px 50px;
    position: relative;
    border: none;
    outline: none;
    font-weight: 600;
    box-shadow: 0 0 49px 0 rgba(0, 0, 0, 0.08);

    &:focus {
      border: none;
      outline: none;
      box-shadow: none;
    }

    &:not(.collapsed) {
      background-color: ${BLUE};
      color: ${WHITE};

      &::after {
        font-family: "Bootstrap-icons";
        font-display: swap;
        content: "\\F631";
        color: #fff;
        background-image: none;
        transform: rotate(0);
      }
    }

    &::after {
      font-family: "Bootstrap-icons";
      font-display: swap;
      content: "\\F18A";
      background-image: none;
      position: absolute;
      left: 20px;
      font-weight: 500;
    }
  }
`;

const AccordionBodyStyled = styled(Accordion.Body)`
  font-size: 15px;
  color: #505050;
  line-height: 1.6;
`;

const Questions = () => {
  return (
    <Wrapper>
      <Title>
        <h2>Some common concerns</h2>
      </Title>
      <Accordion defaultActiveKey="0">
        <AccordionItemStyled eventKey="0">
          <AccordionHeaderStyled>
            Do I need to be fulltime during the campus?
          </AccordionHeaderStyled>
          <AccordionBodyStyled>
            Yes, it’s mandatory. Fulltime as well as full commitment in order to
            obtain the best achievement.
          </AccordionBodyStyled>
        </AccordionItemStyled>
        <AccordionItemStyled eventKey="1">
          <AccordionHeaderStyled>
            Does Devplus offer free courses?
          </AccordionHeaderStyled>
          <AccordionBodyStyled>
            Yes, it’s kind of a scholarship. But, you need to pass our challenge
            through test and interview round.
          </AccordionBodyStyled>
        </AccordionItemStyled>
        <AccordionItemStyled eventKey="3">
          <AccordionHeaderStyled>
            Which course will be suitable with me?
          </AccordionHeaderStyled>
          <AccordionBodyStyled>
            The first plus (+) course is designed to students who would like to
            join the OJT (on-job-train) programme. Next level, the second plus
            (++) course will suitable for one who got the first plus or fresher,
            who would like to be trained in order to ready to onboard the real
            projects. The third plus (+++) course is intended to the alumni of
            the second plus degree or junior who would like to reach a specific
            tech-stack: AI, Blockchain, Devops...
          </AccordionBodyStyled>
        </AccordionItemStyled>
        <AccordionItemStyled eventKey="4">
          <AccordionHeaderStyled>
            Does Devplus guarantee a job after graduating?
          </AccordionHeaderStyled>
          <AccordionBodyStyled>
            Yes, it’s could be a good job. Once you get the second plus (++) you
            will ready to onboard the projects of our partners, the most highly
            recommended places to work.
          </AccordionBodyStyled>
        </AccordionItemStyled>
      </Accordion>
    </Wrapper>
  );
};

export default Questions;
