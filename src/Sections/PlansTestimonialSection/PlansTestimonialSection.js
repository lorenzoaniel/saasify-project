import React from "react";
import styled from "styled-components";

import DefaultHeading from "../../Components/Common/DefaultHeading/DefaultHeading";
import PricingCard from "../../Components/PricingCard/PricingCard";
import SlidingToggleButton from "../../Components/SlidingToggleButton/SlidingToggleButton";
import TestimonyCard from "../../Components/TestimonyCard/TestimonyCard";

import { plansTestimonialSectionPricingMainheadingStyle } from "../../Styles/plans-testimonial-section-style/plans-testimonial-section-pricing-style/plans-testimonial-section-pricing-mainheading-style/plans-testimonial-section-pricing-mainheading-style.js";
import { plansTestimonialSectionTestimonialsMainheadingStyle } from "../../Styles/plans-testimonial-section-style/plans-testimonial-section-testimonials-style/plans-testimonial-section-testimonials-mainheading-style/plans-testimonial-section-testimonials-mainheading-style.js";

import profile1 from "../../Assets/Imgs/TestimonialSection/profilepics/profile1.png";
import profile2 from "../../Assets/Imgs/TestimonialSection/profilepics/profile2.png";
import profile3 from "../../Assets/Imgs/TestimonialSection/profilepics/profile3.png";

const PlansTestimonialSectionContainer = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const PlansTestimonialSectionPricingContainer = styled.div`
	width: 80%;
	height: 902px;

	margin-top: 150px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;

const PlansTestimonialSectionPricingMiniContainer = styled.div`
	width: 100%;
	height: 655px;

	margin-top: 73px;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const PlansTestimonialSectionTestimonialContainer = styled.div`
	width: 80%;
	height: 483px;
	margin-top: 150px;

	display: flex;
	align-items: center;
	flex-direction: column;
`;

const PlansTestimonialSectionTestimonialMiniContainer = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: space-around;
	align-items: center;
	column-gap: 30px;
	padding: 0 20px;
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
				<PlansTestimonialSectionPricingMiniContainer>
					<PricingCard
						priceAmountProp={"$30"}
						priceTimeRangeProp={"/month"}
						priceAmountDescriptionProp={"For Small Business"}
						descriptionListProp={[
							"3 Social profiles",
							"12 Team members",
							"5 Competitors per profile",
						]}
						cardHeadingProp={"Pro"}
					/>
					<PricingCard
						priceAmountProp={"$60"}
						priceTimeRangeProp={"/month"}
						priceAmountDescriptionProp={"For Medium Business"}
						descriptionListProp={[
							"5 Social profiles",
							"12 Team members",
							"5 Competitors per profile",
							"Hashtags per profile",
						]}
						cardHeadingProp={"Popular"}
					/>
					<PricingCard
						priceAmountProp={"$100"}
						priceTimeRangeProp={"/month"}
						priceAmountDescriptionProp={"For Enterprise Business"}
						descriptionListProp={[
							"3 Social profiles",
							"12 Team members",
							"5 Competitors per profile",
							"Hashtags per profile",
							"Dedicated Priority Support",
							"2 Admin Panels",
						]}
						cardHeadingProp={"Advanced"}
					/>
				</PlansTestimonialSectionPricingMiniContainer>
			</PlansTestimonialSectionPricingContainer>
			<PlansTestimonialSectionTestimonialContainer>
				<DefaultHeading
					customstyleprop={plansTestimonialSectionTestimonialsMainheadingStyle}
					headingtitleprop={"What people are saying about us"}
				/>
				<PlansTestimonialSectionTestimonialMiniContainer>
					<TestimonyCard
						profilenameProp={"Kartik Bansal"}
						profilelocationprop={"Kota, Rajasthan"}
						imgsrcprop={profile1}
						descriptionProp={
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
						}
						numberOfStarsProp={5}
					/>
					<TestimonyCard
						profilenameProp={"Anil Dvivedi"}
						profilelocationprop={"New Delhi"}
						imgsrcprop={profile2}
						descriptionProp={
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
						}
						numberOfStarsProp={4}
					/>
					<TestimonyCard
						profilenameProp={"Srjan Sirasikar"}
						profilelocationprop={"Bhadrak"}
						imgsrcprop={profile3}
						descriptionProp={
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
						}
						numberOfStarsProp={3}
					/>
				</PlansTestimonialSectionTestimonialMiniContainer>
			</PlansTestimonialSectionTestimonialContainer>
		</PlansTestimonialSectionContainer>
	);
};

export default PlansTestimonialSection;
