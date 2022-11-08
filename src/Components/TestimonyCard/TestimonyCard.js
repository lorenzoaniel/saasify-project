import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";

import DefaultImgContainer from "../Common/DefaultImgContainer/DefaultImgContainer";
import DefaultHeading from "../Common/DefaultHeading/DefaultHeading";

import { plansTestimonialSectionTestimonialsCardProfilenameStyle } from "../../Styles/plans-testimonial-section-style/plans-testimonial-section-testimonials-style/plans-testimonial-section-testimonials-card-style/plans-testimonial-section-testimonials-card-profilename-style/plans-testimonial-section-testimonials-card-profilename-style.js";
import { plansTestimonialSectionTestimonialsCardProfilelocationStyle } from "../../Styles/plans-testimonial-section-style/plans-testimonial-section-testimonials-style/plans-testimonial-section-testimonials-card-style/plans-testimonial-section-testimonials-card-profilelocation-style/testimonials-card-profilelocation-style.js";

import startimg from "../../Assets/Imgs/TestimonialSection/star.png";

const generateStars = (numbOfStars) => {
	let starList = [];
	for (let currStar = 0; currStar < numbOfStars; currStar++) {
		starList.push(<DefaultImgContainer key={nanoid()} srcprop={startimg} />);
	}

	return starList;
};

const TestimonyCard = (props) => {
	const { descriptionProp, numberOfStarsProp, imgsrcprop, profilenameProp, profilelocationprop } =
		props;

	return (
		<TestimonyCardContainer>
			<TestimonyCardStarContainer>{generateStars(numberOfStarsProp)}</TestimonyCardStarContainer>
			<TestimonyCardDescriptionContainer>{descriptionProp}</TestimonyCardDescriptionContainer>
			<TestimonyCardProfileMiniContainer>
				<DefaultImgContainer srcprop={imgsrcprop} />
				<TestimonyCardProfileNameMiniContainer>
					<DefaultHeading
						customstyleprop={plansTestimonialSectionTestimonialsCardProfilenameStyle}
						headingtitleprop={profilenameProp}
					/>
					<DefaultHeading
						customstyleprop={plansTestimonialSectionTestimonialsCardProfilelocationStyle}
						headingtitleprop={profilelocationprop}
					/>
				</TestimonyCardProfileNameMiniContainer>
			</TestimonyCardProfileMiniContainer>
		</TestimonyCardContainer>
	);
};

const TestimonyCardContainer = styled.div`
	width: 380px;
	height: 367px;
	background-color: #ffffff;
	padding: 25px;
	/* margin: 15px; */
	border-radius: 20px;
	box-shadow: 0 0 0.8rem 0.2rem rgba(0, 0, 0, 0.1);
`;

const TestimonyCardStarContainer = styled.div`
	width: 100%;
	height: 16.36px;
	margin-top: 14px;

	display: flex;
`;

const TestimonyCardDescriptionContainer = styled.div`
	width: 100%;
	height: 112px;
	margin-top: 33px;
`;

const TestimonyCardProfileMiniContainer = styled.div`
	width: 100%;
	height: 50px;
	margin-top: 50px;

	display: flex;
	align-items: center;
	column-gap: 10px;
`;

const TestimonyCardProfileNameMiniContainer = styled.div`
	width: 75%;
	height: fit-content;

	display: flex;
	flex-direction: column;
`;

export default TestimonyCard;
