import React from "react";
import styled from "styled-components";

const DefaultLinkSpan = styled.span`
	font-family: var(--DefaultFont-inter);
	${(props) => props.customstyleprop}
`;

const DefaultLink = (props) => {
	const { linktitleprop, classnameprop, customstyleprop } = props;
	return (
		<DefaultLinkSpan className={classnameprop} customstyleprop={customstyleprop}>
			{linktitleprop}
		</DefaultLinkSpan>
	);
};

export default DefaultLink;
