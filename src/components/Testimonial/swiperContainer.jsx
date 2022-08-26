import styled from "styled-components";

import { Pagination, Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import ItemSwiper from "./item";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";

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

const SwiperContainer = (props) => {
  return (
    <>
      { props.testimonials.length > 0 ?
        <Swiper
          modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            991: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperWrapperAll>
            {
              props.testimonials.map((item, index) => {
                return <SwiperSlide key={index}>
                  <ItemSwiper testimonial={item} />
                </SwiperSlide>
              })
            }
          </SwiperWrapperAll>
        </Swiper> : <div></div>
      }
    </>
  );
}

export default SwiperContainer;