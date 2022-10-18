import React from "react";
import styled from "styled-components";

const LogoContainer = styled.span`
	${(props) => props.customstyleprop}
`;

const Logo = (props) => {
	const { titleprop, classnameprop, customstyleprop } = props;
	return (
		<LogoContainer className={classnameprop} customstyleprop={customstyleprop}>
			{titleprop}
		</LogoContainer>
	);
};

export default Logo;
