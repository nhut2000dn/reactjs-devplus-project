import styled from "styled-components";
import { css } from "styled-components";
import { useEffect, useState } from "react";

const ScrollUpContainer = styled.div`
  ${({ open }) =>
    css`
      text-align: center;
      bottom: 40px;
      cursor: pointer;
      position: fixed;
      right: 20px;
      z-index: 999;
      border-radius: 50px 50px 4px 4px;
      display: ${ open ? 'block' : 'none' }
  `}
`;

const Icon = styled.i`
  background: #226fb7;
  border-radius: 50%;
  height: 40px;
  font-size: 24px;
  font-weight: 600;
  padding: 8px 10px;
  color: #fff;
  line-height: 36px;
  transition: all 0.3s ease;
  margin-left: 2px;
  box-shadow: 0px 0px 2px rgb(0 0 0 / 40%);
`;

const ScrollUp = () => {

  const [show, setShow] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  const scrollUpFunction = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <ScrollUpContainer open={show} onClick={scrollUpFunction}>
      <Icon className="bi bi-arrow-up-short"/>
    </ScrollUpContainer>  
  );
};

export default ScrollUp;

