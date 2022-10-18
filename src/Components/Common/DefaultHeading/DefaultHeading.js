import React from "react";
import styled from "styled-components";

const DefaultHeadingSpan = styled.span`
	${(props) => props.customstyleprop}
`;

const DefaultHeading = (props) => {
	const { headingtitleprop, customstyleprop, classnameprop } = props;

	return (
		<DefaultHeadingSpan className={classnameprop} customstyleprop={customstyleprop}>
			{headingtitleprop}
		</DefaultHeadingSpan>
	);
};

export default DefaultHeading;
