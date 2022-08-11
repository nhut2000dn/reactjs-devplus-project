import styled from "styled-components";

import { TitleFont } from "../../constants/fonts";
import ImageQuote from '../../assets/images/quote.png';
import ImageAuthor1 from '../../assets/images/person1.png';
import ImageAuthor2 from '../../assets/images/person2.png';
import ImageAuthor3 from '../../assets/images/person3.png';
import { mobile, ipad, desktops } from "../../responsive";
import SwiperCore, { EffectCoverflow, Pagination, Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import { BLUE } from "../../constants/colors";

const TestimonialWrapper = styled.div`
  padding: 100px 0 350px;
  margin: 0 100px;
  overflow: hidden;
`;

const TestimonialContainer = styled.div`
  height: 700px;
  padding: 0;
  border-radius: 5px; 
`;

const TestimonialHeading = styled.h2`
  text-align: center;
  margin-bottom: 50px;
  font-size: 36px;
`;

const SwiperWrapperAll = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
  overflow: visible;
`;

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
`;

const SwiperImageWrapper = styled.div`
`;

const SwiperImage = styled.img.attrs({
  src: `${ImageQuote}`
})`
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
`;

const SwiperWrapperImageAuthor = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -30px;
`;

const SwiperImageAuthor = styled.img.attrs(props => ({
  src: `${props.url}`,
}))`
  border-radius: 50%;
`


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

const Banner = () => {
  return (
    <TestimonialWrapper>
      <TestimonialContainer className="container">
        <TestimonialHeading>What alumni saying</TestimonialHeading>
        <Swiper
          modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,  
            disableOnInteraction: false
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            991: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperWrapperAll>
            <SwiperSlide>
              <SwiperWrapper>
                <SwiperDesc>
                  <SwiperInfo>
                    <SwiperImageWrapper>
                      <SwiperImage/>
                    </SwiperImageWrapper>
                    <SwiperDescContent>
                        Dev plus help me to re-train about knowledge with
                        technology, experience how to do the real project with
                        senior developers by testing their current project, and
                        share more experience with them. enjoy more events and
                        workshops.
                    </SwiperDescContent>
                  </SwiperInfo>
                  <SwiperWrapperImageAuthor>
                    <SwiperImageAuthor url={ImageAuthor2} />
                  </SwiperWrapperImageAuthor>
                </SwiperDesc>
                <SwiperAuthor>
                  <SwiperName>Thatsadaphone Inthapakdy</SwiperName>
                  <SwiperTitle>Member Devplus +</SwiperTitle>
                </SwiperAuthor>
              </SwiperWrapper>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperWrapper>
                <SwiperDesc>
                  <SwiperInfo>
                    <SwiperImageWrapper>
                      <SwiperImage/>
                    </SwiperImageWrapper>
                    <SwiperDescContent>       
                      This is an awesome programme which supports me too much in
                      enhancing my skills and knowledge to become a developer. I
                      feel very lucky because of joining Devplus.
                    </SwiperDescContent>
                  </SwiperInfo>
                  <SwiperWrapperImageAuthor>
                    <SwiperImageAuthor url={ImageAuthor1} />
                  </SwiperWrapperImageAuthor>
                </SwiperDesc>
                <SwiperAuthor>
                  <SwiperName>Tien Thinh</SwiperName>
                  <SwiperTitle>Member Devplus ++</SwiperTitle>
                </SwiperAuthor>
              </SwiperWrapper>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperWrapper>
                <SwiperDesc>
                  <SwiperInfo>
                    <SwiperImageWrapper>
                      <SwiperImage/>
                    </SwiperImageWrapper>
                    <SwiperDescContent>  
                      I learnt a lot of knowledge from experienced seniors of
                      Dev plus. They help me to understand the procedure in
                      running a real project. Additionally, taking part in
                      activities such as workshops promote my soft skills.
                    </SwiperDescContent>
                  </SwiperInfo>
                  <SwiperWrapperImageAuthor>
                    <SwiperImageAuthor url={ImageAuthor3} />
                  </SwiperWrapperImageAuthor>
                </SwiperDesc>
                <SwiperAuthor>
                  <SwiperName>Quynh Nga</SwiperName>
                  <SwiperTitle>Member Devplus ++</SwiperTitle>
                </SwiperAuthor>
              </SwiperWrapper>
            </SwiperSlide>
          </SwiperWrapperAll>
        </Swiper>
      </TestimonialContainer>
    </TestimonialWrapper>
  );
};

export default Banner;

