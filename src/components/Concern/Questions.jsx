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

const Questions = (props) => {
  return (
    <Wrapper>
      <Title>
        <h2>Some common concerns</h2>
      </Title>
      <Accordion defaultActiveKey={0}>
        {
          props.concernsQuestions.map((item, index) => {
            return <AccordionItemStyled key={index} eventKey={index}>
                <AccordionHeaderStyled>
                  {item.question}
                </AccordionHeaderStyled>
                <AccordionBodyStyled>
                  {item.answer}
                </AccordionBodyStyled>
              </AccordionItemStyled>
          })
        }
      </Accordion>
    </Wrapper>
  );
};

export default Questions;
