import React from "react";
import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import DefaultButton from "../../Common/DefaultButton/DefaultButton";
import { mainLandingEmailbarButtonStyle } from "../../../Styles/main-landing-emailbar-button-style/main-landing-emailbar-button-style.js";

const EmailBarContainer = styled.div`
	height: 67px; //67px base plus margin
	width: 575px;

	background-color: rgba(255, 255, 255, 1);
	border-radius: 5rem;
	padding: 0.5rem;
	border: 0.1rem solid rgba(240, 240, 240, 1);
	box-shadow: 0 0 1rem 0.1rem rgba(100, 100, 100, 0.5);

	display: flex;
	align-items: center;

	margin-top: 40px;
`;

const EmailBarIconContainer = styled.div`
	width: 21.2px;
	height: 25px;
	border: none;
	margin-left: 1rem;
	svg {
		height: 100%;
		width: 100%;
		fill: rgba(0, 0, 0, 0.7);
	}
`;

const EmailBarInput = styled.input`
	width: calc(100% - 21.2px - 220px);
	height: 25px;

	color: rgba(0, 0, 0, 0.7);
	font-family: var(--DefaultFont-inter);
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;

	border: none;
	outline: none;

	margin: 0 1rem;
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
