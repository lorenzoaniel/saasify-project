import React from "react";
import styled from "styled-components";

const NavBarMenuContainer = styled.div`
	${(props) => props.customstyleprop}
`;

const NavBarMenu = (props) => {
	const { children, classnameprop, customstyleprop } = props;

	return (
		<NavBarMenuContainer className={classnameprop} customstyleprop={customstyleprop}>
			{children}
		</NavBarMenuContainer>
	);
};

export default NavBarMenu;
