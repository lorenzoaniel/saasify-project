import { css } from "styled-components";

export const mainLandingSecondHeadingStyle = css`
	font-family: var(--DefaultFont-inter);
	font-size: 20px;
	line-height: 30px;
	font-weight: 500;
	color: rgba(255, 255, 255, 1);
	text-align: center;
	max-width: 575px;
	letter-spacing: -0.02rem;
	grid-area: ${(props) => props.className};

	justify-self: center;
	align-self: center;
`;
