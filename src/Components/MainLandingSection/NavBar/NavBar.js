import React from "react";
import styled from "styled-components";

const NavBarContainer = styled.div`
	height: 42px;
	width: 85%;
	display: flex;
	justify-content: center;
	align-items: center;

	grid-area: ${(props) => props.className};
	justify-self: center;
	align-self: flex-start;

	margin-top: 39px;
`;

const NavBar = (props) => {
	const { children, classnameprop } = props;
	return <NavBarContainer className={classnameprop}>{children}</NavBarContainer>;
};

export default NavBar;
