import React from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

const ServiceReadMoreBtnBtn = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	font-family: var(--DefaultFont-inter);
	font-weight: 600;
	font-size: 16px;
	line-height: 100%;
	color: #0f0bc7;

	border: none;
	background: none;

	svg {
		fill: #0f0bc7;
		height: 1em;
		width: 2em;
	}
`;

const ServiceReadMoreBtn = () => {
	return (
		<ServiceReadMoreBtnBtn>
			Read More
			<FaArrowRight />
		</ServiceReadMoreBtnBtn>
	);
};

export default ServiceReadMoreBtn;
