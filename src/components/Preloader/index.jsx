import styled from "styled-components";
import { useEffect, useState } from "react";
import img from "../../assets/images/logo_loading.webp";
import { BLUE } from "../../constants/colors";

const Loader = styled.div`
  background-color: #fff;
  height: 100%;
  width: 100%;
  position: fixed;
  margin-top: 0px;
  top: 0px;
  z-index: 10000;
`;

const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 140px;
  height: 140px;
  border: 5px solid #ebebec;
  border-radius: 50%;
  &:before {
    position: absolute;
    content: "";
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 140px;
    height: 140px;
    border-top: 4px solid ${BLUE};
    border-radius: 50%;
    animation: loaderSpin 1.8s infinite ease-in-out;
    -webkit-animation: loaderSpin 1.8s infinite ease-in-out;
  }
`;

const LoaderIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  animation: loaderPulse alternate 900ms infinite;
`;

const Preloader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let timeout;
    if (show) {
      timeout = setTimeout(() => {
        setShow(false);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [show]);

  return (
    <>
      <div>
        {show ? (
          <Loader>
            <LoaderContainer>
              <LoaderIcon>
                <Image loading="lazy" alt="Preloader" src={img} />
              </LoaderIcon>
            </LoaderContainer>
          </Loader>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default Preloader;
