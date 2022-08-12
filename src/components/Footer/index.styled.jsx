import styled from "styled-components";
import LogoFooter from "../../assets/images/backgroud-footer.webp";

const FooterContainer = styled.footer`
  background-image: url(${LogoFooter});
  background-color: #273c66;
  background-size: cover;
  color: #ffffff;
`;
const DivFooterTop = styled.div`
  padding: 218px 0 80px;
`;
const DivContainer = styled.div``;
const DivRow = styled.div``;
const DivItem = styled.div`
  .padding-footer {
    padding: 0 15px;
  }
`;
const H4Title = styled.h4`
  font-size: 16px;
  line-height: 26px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 35px;
`;
const UlSideMap = styled.ul`
  li {
    padding-left: 15px;
    position: relative;
    margin-bottom: 11px;
  }
  .color:before {
    position: absolute;
    content: "";
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    background: #226fb7;
  }
  li:last-child {
    margin-bottom: 0;
  }
  i {
    color: #ffffff;
    position: absolute;
  }
  .desc {
    padding-left: 35px;
  }
`;
const Link = styled.a`
  color: #e8e8e8;
  transition: all 0.3s ease;
  text-decoration: none !important;
  outline: none !important;
  &:active,
  &:hover {
    text-decoration: none;
    outline: 0 none;
    color: #226fb7;
  }
  .pointer {
    cursor: context-menu;
  }
`;

const DivBottom = styled.div`
  padding: 40px 0;
  background: transparent;
  position: relative;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 1px;
    width: 100%;
    max-width: 1240px;
    background: rgba(255, 255, 255, 0.1);
  }
`;
const DivBottomContainer = styled.div``;
const DivRowBottom = styled.div`
  .md-mb-20 {
    margin-bottom: 20px;
  }
`;
const DivContentBottom = styled.div`
  .footer-social {
    display: inline-flex;
  }
  .padding-facebook {
    padding-right: 40px;
  }
  li {
    padding: 0 5px 0;
    color: #505050;
  }
`;
const DivItemBottom = styled.div`
  li {
    display: inline;
    margin-right: 5px;
  }
`;
const LinkBottom = styled.a`
  color: #226fb7;
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 100%;
  background: #226fb7;
  color: #ffffff;
  text-align: center;
  transition: all 0.3s ease;
`;
const LinkBottomLeft = styled.a`
  display: inline;
`;
const ImgLogoBottom = styled.img`
  max-width: 190px;
  height: auto;
  vertical-align: middle;
`;
export {
  FooterContainer,
  DivFooterTop,
  DivContainer,
  DivRow,
  DivItem,
  H4Title,
  UlSideMap,
  Link,
  DivBottom,
  DivBottomContainer,
  DivRowBottom,
  DivContentBottom,
  DivItemBottom,
  LinkBottom,
  LinkBottomLeft,
  ImgLogoBottom,
};
