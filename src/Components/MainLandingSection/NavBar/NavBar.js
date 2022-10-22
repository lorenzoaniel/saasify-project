import React from "react";
import styled from "styled-components";

const NavBarContainer = styled.div`
	height: 90px; //42px base plus margin
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	padding-top: 39px;
`;

const NavBar = (props) => {
	const { children, classnameprop } = props;
	return <NavBarContainer className={classnameprop}>{children}</NavBarContainer>;
};

export default NavBar;
