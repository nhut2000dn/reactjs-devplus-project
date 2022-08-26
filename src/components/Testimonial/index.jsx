import styled from "styled-components";

import { mobile } from "../../responsive";
import SwiperContainer from "./swiperContainer";
import { useState, useEffect } from 'react';
import { getTestimonial } from '../../service/BaseApi';

const TestimonialWrapper = styled.div`
  padding: 100px 0 350px;
  margin: 0 100px;
  overflow: hidden;
  ${mobile({
    margin: "0 10px",
  })}
`;

const TestimonialContainer = styled.div`
  padding: 0;
  border-radius: 5px;
  height: max-content;
`;

const TestimonialHeading = styled.h2`
  text-align: center;
  margin-bottom: 50px;
  font-size: 36px;
`;

const Banner = () => {

  const [testimonial, setTestimonial] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTestimonial();
      setTestimonial(data.data[0]);
    }

    fetchData()
      .catch(console.error);;
  }, []);

  return (
    <>
      {
        Object.keys(testimonial).length > 0 ?
        <TestimonialWrapper>
          <TestimonialContainer className="container">
            <TestimonialHeading>What alumni saying</TestimonialHeading>
            <SwiperContainer testimonials={ testimonial.testimonials }/>
          </TestimonialContainer>
        </TestimonialWrapper> : <></>
      }
    </>
  );
};

export default Banner;
