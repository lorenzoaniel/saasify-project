import React from "react";
import styled from "styled-components";

const DefaultButtonBtn = styled.button`
	${(props) => props.customstyleprop}
`;

const DefaultButton = (props) => {
	const { btntitleprop, customstyleprop, classnameprop } = props;

	return (
		<DefaultButtonBtn className={classnameprop} customstyleprop={customstyleprop}>
			{btntitleprop}
		</DefaultButtonBtn>
	);
};

export default DefaultButton;
