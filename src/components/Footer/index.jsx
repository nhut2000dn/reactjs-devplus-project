import React from 'react';
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
} from '../../components/Footer/index.styled';
import Logo from '../../assets/images/logo.png';

const Footer = () => {
	return (
		<>
			<FooterContainer>
				<DivFooterTop>
					<DivContainer className="container">
						<DivRow className="row">
							<DivItem className="col-12 col-lg-3 padding-footer">
								<H4Title>
									DEVELOP THE SKILLS TO MOVE FAST AND STAY AHEAD.
								</H4Title>
								<UlSideMap className="site-map">
									<li className="color">
										Devplus is not a training center, it’s battle campus for you
										to level up your skillsets and ready to onboard any projects
										in our “kindest” companies listing
									</li>
								</UlSideMap>
							</DivItem>
							<DivItem className="col-12 col-lg-3 padding-footer">
								<H4Title>For Devplus</H4Title>
								<UlSideMap className="site-map">
									<li className="color">
										<Link href="https://devplus.edu.vn/" target="_blank">
											Training space
										</Link>
									</li>
									<li className="color">
										<Link
											href="https://www.facebook.com/Devplusprogramme"
											target="_blank"
										>
											Alumni network
										</Link>
									</li>
									<li className="color">
										<Link href="https://conext.asia/" target="_blank">
											Connect with experts
										</Link>
									</li>
								</UlSideMap>
							</DivItem>
							<DivItem className="col-12 col-lg-3 padding-footer">
								<H4Title>Our campus</H4Title>
								<UlSideMap className="site-map">
									<li className="color">
										<Link className="pointer">
											One plus (+) Programing foundation
										</Link>
									</li>
									<li className="color">
										<Link className="pointer">
											Two plus (++) Skill up and onboard
										</Link>
									</li>
									<li className="color">
										<Link className="pointer">
											Three plus (+++) Become a senior
										</Link>
									</li>
								</UlSideMap>
							</DivItem>
							<DivItem className="col-12 col-lg-3 padding-footer">
								<H4Title>Address</H4Title>
								<UlSideMap className="address-widget">
									<li>
										<i className="bi bi-geo-alt"></i>
										<div className="desc">
											368 Đường Trần Hưng Đạo, An Hải, An Hải Tây, Sơn Trà, Đà
											Nẵng
										</div>
									</li>
									<li>
										<i className="bi bi-telephone"></i>
										<div className="desc">
											<Link href="tel:0368492885">(+84) 368492885</Link>
										</div>
									</li>
									<li>
										<i className="bi bi-envelope"></i>
										<div className="desc">
											<Link href="mailto:hello@stunited.vn">
												hello@stunited.vn
											</Link>
										</div>
									</li>
								</UlSideMap>
							</DivItem>
						</DivRow>
					</DivContainer>
				</DivFooterTop>
				<DivBottom>
					<DivBottomContainer className="container">
						<DivRowBottom className="row y-middle">
							<DivContentBottom className="col-lg-4 md-mb-20">
								<DivItemBottom className="footer-logo md-text-center">
									<LinkBottomLeft>
										<ImgLogoBottom src={Logo}></ImgLogoBottom>
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
											<i className="bi bi-facebook"></i>
										</LinkBottom>
									</li>
									<li>Facebook</li>
								</ul>
							</DivContentBottom>
						</DivRowBottom>
					</DivBottomContainer>
				</DivBottom>
			</FooterContainer>
		</>
	);
};

export default Footer;
