import { css } from "styled-components";

export const mainLandingHeadingStyle = css`
	font-family: var(--DefaultFont-inter);
	font-size: 72px;
	line-height: 80px;
	font-weight: 800;
	letter-spacing: -0.03rem;
	color: rgba(255, 255, 255, 1);
	text-align: center;
	max-width: 964px;
	grid-area: ${(props) => props.className};

	justify-self: center;
	align-self: center;
`;
