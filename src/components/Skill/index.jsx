import React from "react";
import { useState, useEffect } from 'react';
import { getSkill } from '../../service/BaseApi';
import Container from "react-bootstrap/Container";
import {
  ContainerSkill,
  RowDiv,
  DivTitle,
  RowContent,
  ColRow,
  ColItem,
  NavLink,
  DivIcon,
  ImgIcon,
  DivContent,
} from "../../components/Skill/index.styled";
const Skill = () => {

  const [skill, setSkill] = useState({container: []});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSkill();
      setSkill(data.data[0]);
    }

    fetchData()
      .catch(console.error);;
  }, []);

  return (
    <>
      {
        Object.keys(skill).length > 0 ?
        <ContainerSkill>
          <Container>
            <RowDiv>
              <ColRow className="col-md-12">
                <DivTitle>
                  <h2 className="title mb-0">
                    What an engineer after Devplus will must have?
                  </h2>
                </DivTitle>
              </ColRow>
            </RowDiv>
            <RowContent className="row ">
              {
                skill.container.map((item, index) => {
                  return ( 
                    <ColItem key={index} className="col-lg-4 col-md-6 mb-30 wow fadeInUp col-item">
                      <NavLink className="categories-item">
                        <DivIcon className="icon">
                          <ImgIcon
                            loading="lazy"
                            alt="icon"
                            src={item.image}
                            className="img"
                          ></ImgIcon>
                        </DivIcon>
                        <DivContent>
                          <h4 className="title">{item.title}</h4>
                          <span className="courses">{item.desc}</span>
                        </DivContent>
                      </NavLink>
                    </ColItem>
                  );
                })
              }
            </RowContent>
          </Container>
        </ContainerSkill> : <></>
      }
    </>
  );
};

export default Skill;
