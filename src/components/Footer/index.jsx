import React from "react";
import {
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
} from "../../components/Footer/index.styled";
import { useState, useEffect } from 'react';
import { getFooter } from '../../service/BaseApi';

const Footer = () => {

  const [footer, setFooter] = useState({footerRow: []});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFooter();
      setFooter(data.data[0]);
    }

    fetchData()
      .catch(console.error);;
  }, []);

  return (
    <>
      {
        footer.footerRow.length > 0 ?
          <FooterContainer>
            <DivFooterTop>
              <DivContainer className="container">
                <DivRow className="row">
                {
                    footer.footerRow.map((item, index) => {
                      return (
                        <DivItem className="col-12 col-lg-3 padding-footer">
                          <H4Title>
                            { item.heading }
                          </H4Title>
                          <UlSideMap className={ item.items.icon === "" ? "site-map" : "address-widget" }>
                            {
                              item.items.map((itemRow, indexRow) => {
                              return (
                                <li className={ itemRow.icon === "" ? "color" : "" }>
                                  {
                                    itemRow.icon === "" ?
                                      <>
                                        {
                                          index === 0 ?
                                            <>{ itemRow.title }</> :
                                            <Link className="pointer">
                                              { itemRow.title }
                                            </Link> 
                                        }
                                      </>
                                      :
                                      <>
                                        <i className={ itemRow.icon }></i>
                                        <div className="desc">
                                          { itemRow.title }
                                        </div>
                                      </>
                                  }
                                </li>
                              );
                              })
                            }
                          </UlSideMap>
                        </DivItem>
                      );
                    })
                  }
                </DivRow>
              </DivContainer>
            </DivFooterTop>
            <DivBottom>
              <DivBottomContainer className="container">
                <DivRowBottom className="row y-middle">
                  <DivContentBottom className="col-lg-4 md-mb-20">
                    <DivItemBottom className="footer-logo md-text-center">
                      <LinkBottomLeft>
                        <ImgLogoBottom
                          loading="lazy"
                          alt="Logo Bottom"
                          src={ footer.logoImg }
                        />
                      </LinkBottomLeft>
                    </DivItemBottom>
                  </DivContentBottom>
                  <DivContentBottom className="col-lg-4 md-mb-20 center-h0">
                    <div className="copyright text-center md-text-start"></div>
                  </DivContentBottom>
                  <DivContentBottom className="col-lg-4 text-end md-text-start padding-facebook text-alines">
                    <ul className="footer-social">
                      <li>
                        <LinkBottom
                          className="right"
                          target="_blank"
                          href="https://www.facebook.com/Devplusprogramme"
                        >
                          <i className={ footer.icon }></i>
                        </LinkBottom>
                      </li>
                      <li>{ footer.text }</li>
                    </ul>
                  </DivContentBottom>
                </DivRowBottom>
              </DivBottomContainer>
            </DivBottom>
          </FooterContainer> 
          : 
          <></>
      }
    </>
  );
};

export default Footer;
