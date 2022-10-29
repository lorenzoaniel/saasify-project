import React from "react";
import styled from "styled-components";

import DefaultHeading from "../../Components/Common/DefaultHeading/DefaultHeading";
import SlidingToggleButton from "../../Components/SlidingToggleButton/SlidingToggleButton";

import { plansTestimonialSectionPricingMainheadingStyle } from "../../Styles/plans-testimonial-section-style/plans-testimonial-section-pricing-style/plans-testimonial-section-pricing-mainheading-style/plans-testimonial-section-pricing-mainheading-style.js";

const PlansTestimonialSectionContainer = styled.div`
	background-color: orange;
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const PlansTestimonialSectionPricingContainer = styled.div`
	width: 80%;
	height: 902px;
	background-color: grey;
	margin-top: 150px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;

const PlansTestimonialSectionPricingMiniContainer = styled.div`
	width: 80%;
	height: 655px;
	background-color: red;
	margin-top: 73px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;

const PlansTestimonialSectionTestimonialContainer = styled.div`
	width: 80%;
	height: 483px;
	margin-top: 150px;
	background-color: yellow;
`;

const PlansTestimonialSection = () => {
	return (
		<PlansTestimonialSectionContainer>
			<PlansTestimonialSectionPricingContainer>
				<DefaultHeading
					customstyleprop={plansTestimonialSectionPricingMainheadingStyle}
					headingtitleprop={"Get results first. Pick a plan Later."}
				/>
				<SlidingToggleButton />
				<PlansTestimonialSectionPricingMiniContainer></PlansTestimonialSectionPricingMiniContainer>
			</PlansTestimonialSectionPricingContainer>
			<PlansTestimonialSectionTestimonialContainer></PlansTestimonialSectionTestimonialContainer>
		</PlansTestimonialSectionContainer>
	);
};

export default PlansTestimonialSection;
