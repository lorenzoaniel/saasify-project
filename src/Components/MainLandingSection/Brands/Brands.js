import React from "react";
import styled from "styled-components";

import DefaultImgContainer from "../../Common/DefaultImgContainer/DefaultImgContainer";

import { mainLandingBrandsDivStyle } from "../../../Styles/main-landing-brands-style/main-landing-brands-div-style/main-landing-brands-div-style.js";
import { mainLandingBrandsImgStyle } from "../../../Styles/main-landing-brands-style/main-landing-brands-img-style/main-landing-brands-img-style.js";

import slackimg from "../../../Assets/Imgs/slackicon.png";
import airbnbimg from "../../../Assets/Imgs/airbnbicon.png";
import amazonimg from "../../../Assets/Imgs/amazonicon.png";
import googleimg from "../../../Assets/Imgs/googleicon.png";
import netfliximg from "../../../Assets/Imgs/netflixicon.png";

const BrandsContainer = styled.div`
	width: 80%;
	height: auto;
	margin-top: 150px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
`;

const Brands = () => {
	return (
		<BrandsContainer>
			<DefaultImgContainer
				classnameprop={"slack-icon"}
				customstyledivprop={mainLandingBrandsDivStyle}
				customstyleimgprop={mainLandingBrandsImgStyle}
				altprop={"slack icon"}
				srcprop={slackimg}
			/>
			<DefaultImgContainer
				classnameprop={"airbnb-icon"}
				customstyledivprop={mainLandingBrandsDivStyle}
				customstyleimgprop={mainLandingBrandsImgStyle}
				altprop={"airbnb icon"}
				srcprop={airbnbimg}
			/>
			<DefaultImgContainer
				classnameprop={"amazon-icon"}
				customstyledivprop={mainLandingBrandsDivStyle}
				customstyleimgprop={mainLandingBrandsImgStyle}
				altprop={"amazon icon"}
				srcprop={amazonimg}
			/>
			<DefaultImgContainer
				classnameprop={"google-icon"}
				customstyledivprop={mainLandingBrandsDivStyle}
				customstyleimgprop={mainLandingBrandsImgStyle}
				altprop={"google icon"}
				srcprop={googleimg}
			/>
			<DefaultImgContainer
				classnameprop={"netflix-icon"}
				customstyledivprop={mainLandingBrandsDivStyle}
				customstyleimgprop={mainLandingBrandsImgStyle}
				altprop={"netflix icon"}
				srcprop={netfliximg}
			/>
		</BrandsContainer>
	);
};

export default Brands;
