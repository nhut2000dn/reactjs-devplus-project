import React from 'react'
import styled from 'styled-components'
import admission from '../../assets/images/admission.png'

const AdmissionWrapper = styled.div`
  padding: 70px 0 0;
  width: 100%;
  height: auto;
  background-color: #f3f8f9;
  display: flex;
  overflow: hidden;
`;

const Row = styled.div`
  width: 100%;
  margin-top: 50px;
  padding-right: 15px;
  transition: all 0.3s ease;
`;

const Col = styled.div`

`;

const ImageLeft = styled.img`
  width: 100%;
  height: auto;
  `;

const AdmissionTitle = styled.h2`
  margin-top: 20px;
  padding-left: 90px;
  padding-right: 15px;
`;

const AdmissionContent = styled.div`
  margin-top: 50px;
  padding-left: 90px;
  padding-right: 15px;
  transition: all 0.3s ease;
`;


const AdmissionDes = styled.p`
  margin: 0px;
  font-size: 15px;
  font-family: "Rubik", sans-serif;
  line-height: 1.8;
  color: #505050;
`;

const BtApply = styled.button`
  margin-top: 40px;
  font-weight: 600;
  padding: 16px 60px;
  background-color: #226fb7;
  color: #ffff;
  border: none;
  border-radius: 30px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
  background-color: #067b86;
  }
`;

const Admission = () => {
  return (
    <AdmissionWrapper>
      <Row className='row'>
        <Col className='col-lg-6 left'>
          <ImageLeft src={admission}/>  
        </Col>
        <Col className='col-lg-6 right'>
          <AdmissionTitle> Admission for 2021 </AdmissionTitle>
          <AdmissionContent>
            <AdmissionDes>
              Disclaimer: This position is expected to 
              start around Feb 2022 and continue through the entire Summer term.
              We ask for a minimum of 12 weeks, full-time, for most internships. 
              Please consider before submitting an application.
            </AdmissionDes>
            <AdmissionDes>
              Devplus aims to provide students the chance to work with our clients and 
              awesome mentors to level up your programing skillset in the RIGHT path.
              With your education and experience, you will be able to take on real-world challenges from day one.
            </AdmissionDes>
            <BtApply className='bt-apply mb-4'>APPLY NOW</BtApply>
          </AdmissionContent>
         
        </Col>
      </Row>
    </AdmissionWrapper>
  )
}
 
export default Admission