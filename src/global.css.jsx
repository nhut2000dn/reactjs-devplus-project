import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html,
  body {
    font-family: "Rubik", sans-serif;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    box-sizing: border-box;
    overflow: visible !important;
    margin-right: 0 !important;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
    margin-left: 0 !important;
  }

  .swiper {
    overflow: visible !important;;
  }

  .swiper-pagination {
    bottom: -9% !important;
  }

  .swiper-pagination > span {
    width: 40px;
    height: 10px;
    border-radius: 30px;
  }

  /* Animation keyframes */
  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translateX(50%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translateX(-50%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgb(34, 111, 183, 0.7);
    }

    40% {
      box-shadow: 0 0 0 40px rgb(34, 111, 183, 0.4);
    }

    60% {
      box-shadow: 0 0 0 40px rgb(34, 111, 183, 0);
    }

    100% {
      box-shadow: 0 0 0 0 rgb(34, 111, 183, 0);
    }
  }

  @keyframes loaderPulse {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }

  @keyframes loaderSpin {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;
