import styled from "styled-components";

import ImageQuote from "../../assets/images/quote.webp";
import { mobile } from "../../responsive";
import { BLUE } from "../../constants/colors";

const SwiperWrapper = styled.div`
  width: 644.5px;
  margin-right: 30px;
  cursor: grabbing;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
`;

const SwiperDesc = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #f3f8f9;
`;

const SwiperInfo = styled.div`
  width: inherit;
  height: 500px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${mobile({
    height: "max-content",
  })}
`;

const SwiperImageWrapper = styled.div``;

const SwiperImage = styled.img`
  width: 64px;
  position: absolute;
  left: 50%;
  top: 70px;
  transform: translateX(-50%);
`;

const SwiperDescContent = styled.p`
  margin-bottom: 0;
  padding: 0 40px;
  font-size: 24px;
  font-weight: 500;
  font-style: italic;
  color: #505050;
  ${mobile({
    padding: "43% 40px 57px",
  })}
`;

const SwiperWrapperImageAuthor = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -30px;
`;

const SwiperImageAuthor = styled.img.attrs((props) => ({
  src: `${props.url}`,
}))`
  border-radius: 50%;
  width: 70px;
  height: 70px;
`;

const SwiperAuthor = styled.div`
  text-align: center;
  margin-top: 45px;
`;

const SwiperName = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: ${BLUE};
`;

const SwiperTitle = styled.p`
  font-size: 18px;
  color: #505050;
`;

const itemSwiper = (props) => {
  return (
    <SwiperWrapper>
      <SwiperDesc>
        <SwiperInfo>
          <SwiperImageWrapper>
            <SwiperImage src={ImageQuote} />
          </SwiperImageWrapper>
          <SwiperDescContent>
            { props.testimonial.content }
          </SwiperDescContent>
        </SwiperInfo>
        <SwiperWrapperImageAuthor>
          <SwiperImageAuthor url={props.testimonial.img} />
        </SwiperWrapperImageAuthor>
      </SwiperDesc>
      <SwiperAuthor>
        <SwiperName>{props.testimonial.name}</SwiperName>
        <SwiperTitle>{props.testimonial.title}</SwiperTitle>
      </SwiperAuthor>
    </SwiperWrapper>
  );
}

export default itemSwiper;