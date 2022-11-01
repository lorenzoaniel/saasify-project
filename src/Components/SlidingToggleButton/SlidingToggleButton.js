import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const SlidingToggleButton = () => {
	const [toggleSlider, setToggleSlider] = useState(false);

	const onButtonClick = (event) => {
		if (event.target.id === "btn-true" && toggleSlider === false) {
			setToggleSlider((curr) => !curr);
		}
		if (event.target.id === "btn-false" && toggleSlider === true) {
			setToggleSlider((curr) => !curr);
		}
	};

	const SlidingToggleButtonVariants = {
		SlidingToggleButtonSlider: {
			initial: {
				left: "3%",
			},
			toggledTrue: {
				left: "50%",
				transition: {
					duration: 0.5,
				},
			},
			toggledFalse: {
				left: "3%",
				transition: {
					duration: 0.5,
				},
			},
		},
	};

	const SlidingToggleButtonMotionProps = {
		SlidingToggleButtonSlider: {
			initial: SlidingToggleButtonVariants.SlidingToggleButtonSlider.initial,
			animate: toggleSlider
				? SlidingToggleButtonVariants.SlidingToggleButtonSlider.toggledTrue
				: SlidingToggleButtonVariants.SlidingToggleButtonSlider.toggledFalse,
		},
	};

	return (
		<SlidingToggleButtonContainer>
			<SlidingToggleButtonEclipse>
				<SlidingToggleButtonSlider {...SlidingToggleButtonMotionProps.SlidingToggleButtonSlider} />
				<SlidingToggleButtonBtn
					style={{ color: toggleSlider ? "#000000" : "#FFFFFF" }}
					id={"btn-false"}
					onClick={(event) => onButtonClick(event)}
				>
					Monthly
				</SlidingToggleButtonBtn>
				<SlidingToggleButtonBtn
					style={{ color: toggleSlider ? "#FFFFFF" : "#000000" }}
					id={"btn-true"}
					onClick={(event) => onButtonClick(event)}
				>
					Anually
				</SlidingToggleButtonBtn>
			</SlidingToggleButtonEclipse>
		</SlidingToggleButtonContainer>
	);
};

const SlidingToggleButtonContainer = styled.div`
	width: 300px;
	height: 82px;

	margin-top: 34px;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const SlidingToggleButtonEclipse = styled.div`
	width: 192px;
	height: 48px;
	background: rgb(236, 235, 255);
	border-radius: 48px;
	display: flex;
	justify-content: space-around;
	align-items: center;

	position: relative; //for slider to know where it is basing position of
`;

const SlidingToggleButtonSlider = styled(motion.div)`
	position: absolute;
	width: 91px;
	height: 36px;
	z-index: 1;

	background: linear-gradient(106.75deg, #2272ff 0%, #0d03c3 100%);
	border-radius: 55px;
`;

const SlidingToggleButtonBtn = styled.button`
	width: 61px;
	height: 24px;
	z-index: 2;

	background-color: transparent;
	border: none;

	font-family: "Manrope";
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	letter-spacing: -0.41px;
	transition: color 1s;
`;

export default SlidingToggleButton;
