import React from "react";
import styled from "styled-components";

import DefaultHeading from "../../Components/Common/DefaultHeading/DefaultHeading";
import DefaultButton from "../../Components/Common/DefaultButton/DefaultButton";
import DefaultImgContainer from "../../Components/Common/DefaultImgContainer/DefaultImgContainer";

import { conversionSectionDescriptionMaintitle } from "../../Styles/conversion-section/conversion-section-description/conversion-section-description-maintitle.js";
import { conversionSectionDescriptionMaindesc } from "../../Styles/conversion-section/conversion-section-description/conversion-section-description-maindesc.js";
import { conversionSectionDescriptionBtn } from "../../Styles/conversion-section/conversion-section-description/conversion-section-description-btn.js";
import { conversionSectionConversionimage } from "../../Styles/conversion-section/conversion-section-image/conversion-section-conversionimage.js";
import { conversionSectionConversiondiv } from "../../Styles/conversion-section/conversion-section-image/conversion-section-conversiondiv.js";

import conversionimg from "../../Assets/Imgs/ConversionSection/conversionimg.png";

const ConversionSectionContainer = styled.div`
	background-color: #f6f5ff;
	display: flex;
	height: 825px;
	width: 100%;
	padding: 0 10%;
`;

const DescriptionSection = styled.div`
	height: 100%;
	width: 50%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

const ImageSection = styled.div`
	height: 100%;
	width: 50%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
`;

const ConversionSection = () => {
	return (
		<ConversionSectionContainer>
			<DescriptionSection>
				<DefaultHeading
					customstyleprop={conversionSectionDescriptionMaintitle}
					headingtitleprop={"Powerful and easy to use SaaS platform"}
				/>
				<DefaultHeading
					customstyleprop={conversionSectionDescriptionMaindesc}
					headingtitleprop={
						"Use marketing automation to identify hot leads and email your sales team telling them to follow up. Nurture and contact leads at the opportune time to maximize."
					}
				/>
				<DefaultButton
					customstyleprop={conversionSectionDescriptionBtn}
					btntitleprop={"GET STARTED"}
				/>
			</DescriptionSection>
			<ImageSection>
				<DefaultImgContainer
					altprop={"conversion image"}
					srcprop={conversionimg}
					customstyleimgprop={conversionSectionConversionimage}
					customstyledivprop={conversionSectionConversiondiv}
				/>
			</ImageSection>
		</ConversionSectionContainer>
	);
};

export default ConversionSection;
