import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 575px) {
      ${props}
    }
  `;
};

export const ipad = (props) => {
  return css`
    @media only screen and (max-width: 767px) {
      ${props}
    }
  `;
};

export const laptop = (props) => {
  return css`
    @media only screen and (max-width: 919px) {
      ${props}
    }
  `;
};

export const desktops = (props) => {
  return css`
    @media only screen and (max-width: 1199px) {
      ${props}
    }
  `;
};