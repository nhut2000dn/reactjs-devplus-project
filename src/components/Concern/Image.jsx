import React, { useState } from "react";
import styled from "styled-components";
import { BLUE } from "../../constants/colors";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

const Wrapper = styled.div`
  position: relative;
  border-radius: 50%;
`;

const Img = styled.img``;

const Button = styled.button`
  width: 80px;
  height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: none;
  background-color: ${BLUE};

  &::after {
    content: "\\F4F4";
    font-family: "Bootstrap-icons";
    color: #fff;
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-left: 2px;
    border-radius: 50%;
    font-size: 50px;
    z-index: 100;
  }

  &:hover::after {
    animation: pulse 3s ease-out infinite;
  }
`;

const Image = (props) => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <Wrapper>
        <Img loading="lazy" src={props.videoImg} alt="Video image" />
        <Button onClick={toggleModal} />
      </Wrapper>
      <ModalVideo
        channel="youtube"
        isOpen={open}
        videoId={props.urlVideo}
        onClose={toggleModal}
      />
    </>
  );
};

export default Image;
