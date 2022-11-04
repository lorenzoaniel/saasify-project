import React from "react";
import styled from "styled-components";

const DefaultImgContainerDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	${(props) => props.customstyledivprop}
`;

const DefaultImgContainerImg = styled.img`
	${(props) => props.customstyleimgprop}
	background: url(${(props) => props.srcprop})
`;

const DefaultImgContainer = (props) => {
	const { classnameprop, srcprop, altprop, customstyledivprop, customstyleimgprop } = props;
	return (
		<DefaultImgContainerDiv customstyledivprop={customstyledivprop}>
			<DefaultImgContainerImg
				id={classnameprop}
				customstyleimgprop={customstyleimgprop}
				src={srcprop}
				alt={altprop}
			/>
		</DefaultImgContainerDiv>
	);
};

export default DefaultImgContainer;
