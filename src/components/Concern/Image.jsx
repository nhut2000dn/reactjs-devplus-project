import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player/lazy";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import VideoImg from "../../assets/images/video.webp";
import { BLUE } from "../../constants/colors";
import LazyLoad from "react-lazyload";

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

const Image = () => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <Wrapper>
        <Img loading="lazy" src={VideoImg} alt="Video image" />
        <Button onClick={toggleModal} />
      </Wrapper>
      <LazyLoad>
        <Modal
          open={open}
          onClose={toggleModal}
          styles={{
            modal: {
              padding: 0,
              overflow: "hidden",
            },
            overlay: {
              background: "rgba(0, 0, 0, 0.8)",
            },
            closeButton: {
              background: "#fafafa",
            },
          }}
          center
        >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=mUjhiT0zSKI&feature=emb_logo&ab_channel=Devplus"
            width="800px"
            height="510px"
          />
        </Modal>
      </LazyLoad>
    </>
  );
};

export default Image;
