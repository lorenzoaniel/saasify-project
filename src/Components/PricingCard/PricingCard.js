import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";

import DefaultButton from "../Common/DefaultButton/DefaultButton";
import DefaultHeading from "../Common/DefaultHeading/DefaultHeading";
import DefaultImgContainer from "../Common/DefaultImgContainer/DefaultImgContainer";

import { plansTestimonialSectionPricingPriceheadingStyle } from "../../Styles/plans-testimonial-section-style/plans-testimonial-section-pricing-style/plans-testimonial-section-pricing-priceheading-style/plans-testimonial-section-pricing-priceheading-style.js";
import { plansTestimonialSectionPricingPriceAmountHeadingStyle } from "../../Styles/plans-testimonial-section-style/plans-testimonial-section-pricing-style/plans-testimonial-section-pricing-priceamountheading-style/plans-testimonial-section-pricing-priceamountheading-style.js";
import { plansTestimonialSectionPricingPriceTimeRangeStyle } from "../../Styles/plans-testimonial-section-style/plans-testimonial-section-pricing-style/plans-testimonial-section-pricing-pricetimerange-style/plans-testimonial-section-pricing-pricetimerange-style.js";
import { plansTestimonialSectionPricingPriceAmountDescriptionStyle } from "../../Styles/plans-testimonial-section-style/plans-testimonial-section-pricing-style/plans-testimonial-section-pricing-priceamountdescription-style/plans-testimonial-section-pricing-priceamountdescription-style.js";
import { plansTestimonialSectionPricingGetStartedBtnStyle } from "../../Styles/plans-testimonial-section-style/plans-testimonial-section-pricing-style/plans-testimonial-section-pricing-getstartedbtn-style/plans-testimonial-section-pricing-getstartedbtn-style.js";

import checkmarkimg from "../../Assets/Imgs/PricingSection/checkmark.png";

const PricingCardContainer = styled.div`
	width: 30%;
	height: 90%;

	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 3%;
	row-gap: 10px;

	background: #ffffff;
	box-shadow: 0 0 0.5rem 0.3rem rgba(0, 0, 0, 0.1);
	border-radius: 15px;
`;

const PriceAmountMiniContainer = styled.div`
	height: 17%;
	width: 100%;
`;

const LineSeparator = styled.div`
	width: 100%;
	height: 0px;

	opacity: 0.2;
	border: 1px solid #000000;
`;

const DescriptionContainer = styled.div`
	height: 65%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	row-gap: 15px;
`;

const DescriptionMiniContainer = styled.div`
	display: flex;
	column-gap: 10px;
`;

const PricingCard = (props) => {
	const {
		descriptionListProp,
		cardHeadingProp,
		priceAmountProp,
		priceTimeRangeProp,
		priceAmountDescriptionProp,
	} = props;

	const listToDescriptionComponent = descriptionListProp.map((currSentence) => (
		<DescriptionMiniContainer key={nanoid()}>
			<DefaultImgContainer srcprop={checkmarkimg} />
			<DefaultHeading headingtitleprop={currSentence} />
		</DescriptionMiniContainer>
	));

	return (
		<PricingCardContainer>
			<DefaultHeading
				customstyleprop={plansTestimonialSectionPricingPriceheadingStyle}
				headingtitleprop={cardHeadingProp}
			/>
			<PriceAmountMiniContainer>
				<DefaultHeading
					customstyleprop={plansTestimonialSectionPricingPriceAmountHeadingStyle}
					headingtitleprop={priceAmountProp}
					classnameprop={"price-amount"}
				/>
				<DefaultHeading
					customstyleprop={plansTestimonialSectionPricingPriceTimeRangeStyle}
					headingtitleprop={priceTimeRangeProp}
					classnameprop={"price-amount-per-timespan"}
				/>
			</PriceAmountMiniContainer>
			<DefaultHeading
				customstyleprop={plansTestimonialSectionPricingPriceAmountDescriptionStyle} //todo
				headingtitleprop={priceAmountDescriptionProp}
				classnameprop={"price-amount-description"}
			/>
			<LineSeparator />
			<DescriptionContainer>{listToDescriptionComponent}</DescriptionContainer>
			<DefaultButton
				customstyleprop={plansTestimonialSectionPricingGetStartedBtnStyle}
				btntitleprop={"Get Started"}
			/>
		</PricingCardContainer>
	);
};

export default PricingCard;
