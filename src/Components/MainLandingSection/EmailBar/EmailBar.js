import React from "react";
import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import DefaultButton from "../../Common/DefaultButton/DefaultButton";
import { mainLandingEmailbarButtonStyle } from "../../../Styles/main-landing-emailbar-button-style/main-landing-emailbar-button-style.js";

const EmailBarContainer = styled.div`
	background-color: rgba(255, 255, 255, 1);
	width: 575px;
	height: 67px;
	display: flex;
	border-radius: 5rem;
	padding: 0.5rem;
	border: none;
	align-items: center;
	grid-area: registeremail;
	align-self: center;
	justify-self: center;
`;

const EmailBarIconContainer = styled.div`
	width: 21.2px;
	height: 19px;
	border: none;
	margin-left: 1rem;
	svg {
		height: 100%;
		width: 100%;
		fill: rgba(0, 0, 0, 0.7);
	}
`;

const EmailBarInput = styled.input`
	color: rgba(0, 0, 0, 0.7);
	font-family: var(--DefaultFont-inter);
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	height: 25px;
	border: none;
	margin: 0 1rem;
	width: calc(100% - 21.2px - 171px);
	outline: none;
`;

const EmailBar = (props) => {
	const { classnameprop } = props;

	return (
		<EmailBarContainer className={classnameprop}>
			<EmailBarIconContainer>
				<AiOutlineMail />
			</EmailBarIconContainer>
			<EmailBarInput placeholder={"Enter your email"} />
			<DefaultButton
				classnameprop={"mainlanding-emailbar-button"}
				btntitleprop={"Start for free"}
				customstyleprop={mainLandingEmailbarButtonStyle}
			/>
		</EmailBarContainer>
	);
};

export default EmailBar;
