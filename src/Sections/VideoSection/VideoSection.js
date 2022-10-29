import React from "react";
import styled from "styled-components";

import DefaultButton from "../../Components/Common/DefaultButton/DefaultButton";
import DefaultHeading from "../../Components/Common/DefaultHeading/DefaultHeading";
import DefaultImgContainer from "../../Components/Common/DefaultImgContainer/DefaultImgContainer";

import { videoSectionGetstartedMainheadingStyle } from "../../Styles/video-section/video-section-getstarted-style/video-section-getstarted-mainheading-style.js";
import { videoSectionGetstartedGetstartedbuttonStyle } from "../../Styles/video-section/video-section-getstarted-style/video-section-getstarted-getstartedbutton-style/video-section-getstarted-getstartedbutton-style.js";
import { videoSectionStepsvideoStepsIconDivStyle } from "../../Styles/video-section/video-section-stepsvideo-style/video-section-stepsvideo-steps-style/video-section-stepsvideo-steps-icon-style/video-section-stepsvideo-steps-icon-div-style.js";
import { videoSectionStepsvideoStepsIconImgStyle } from "../../Styles/video-section/video-section-stepsvideo-style/video-section-stepsvideo-steps-style/video-section-stepsvideo-steps-icon-style/video-section-stepsvideo-steps-icon-img-style.js";
import { videoSectionStepsvideoStepsIconDescriptionStyle } from "../../Styles/video-section/video-section-stepsvideo-style/video-section-stepsvideo-steps-style/video-section-stepsvideo-steps-description-style/video-section-stepsvideo-steps-description-style.js";
import { videoSectionStepsvideoStepsIconMainheadingStyle } from "../../Styles/video-section/video-section-stepsvideo-style/video-section-stepsvideo-steps-style/video-section-stepsvideo-steps-mainheading-style/video-section-stepsvideo-steps-mainheading-style.js";

import oneicon from "../../Assets/Imgs/VideoSection/oneicon.png";
import twoicon from "../../Assets/Imgs/VideoSection/twoicon.png";
import threeicon from "../../Assets/Imgs/VideoSection/threeicon.png";
import videosample from "../../Assets/Imgs/VideoSection/videosample.png";

const VideoSectionContainer = styled.div`
	height: 848px;
	width: 100%;
	background: linear-gradient(106.75deg, #2272ff 0%, #0d03c3 100%);

	display: grid;
	grid-template-columns: 80%;
	grid-template-rows: 40% 60%;
	grid-template-areas: "getstarted" "stepsvideo";
	justify-content: center;
`;

const VideoSectionGetStartedSegment = styled.div`
	/* background-color: orange; */
	width: 100%;
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const VideoSectionStepsVideoSegment = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	padding-bottom: 5rem;
`;

const VideoSectionStepsSegment = styled.div`
	width: 45%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const VideoSectionStepsMiniContainer = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 30% 70%;
	grid-template-rows: 50% 50%;
	grid-template-areas: "icon mainheading" "icon description";
	justify-content: center;
	align-items: center;
`;

const VideoSectionVideoSegment = styled.div`
	background-color: green;
	width: 55%;
	height: 100%;
	background: url("${videosample}");
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
`;

const VideoSection = () => {
	return (
		<VideoSectionContainer>
			<VideoSectionGetStartedSegment>
				<DefaultHeading
					customstyleprop={videoSectionGetstartedMainheadingStyle}
					headingtitleprop={"Work smarter with easy access for user..."}
				/>
				<DefaultButton
					customstyleprop={videoSectionGetstartedGetstartedbuttonStyle}
					btntitleprop={"Get Started Now"}
				/>
			</VideoSectionGetStartedSegment>
			<VideoSectionStepsVideoSegment>
				<VideoSectionStepsSegment>
					<VideoSectionStepsMiniContainer>
						<DefaultImgContainer
							customstyledivprop={videoSectionStepsvideoStepsIconDivStyle}
							customstyleimgprop={videoSectionStepsvideoStepsIconImgStyle}
							srcprop={oneicon}
						/>
						<DefaultHeading
							customstyleprop={videoSectionStepsvideoStepsIconMainheadingStyle}
							headingtitleprop={"Create Account"}
						/>
						<DefaultHeading
							customstyleprop={videoSectionStepsvideoStepsIconDescriptionStyle}
							headingtitleprop={
								"After learning about your customer service needs, we will get you up"
							}
						/>
					</VideoSectionStepsMiniContainer>
					<VideoSectionStepsMiniContainer>
						<DefaultImgContainer
							customstyledivprop={videoSectionStepsvideoStepsIconDivStyle}
							customstyleimgprop={videoSectionStepsvideoStepsIconImgStyle}
							srcprop={twoicon}
						/>
						<DefaultHeading
							customstyleprop={videoSectionStepsvideoStepsIconMainheadingStyle}
							headingtitleprop={"Install Tracking Code"}
						/>
						<DefaultHeading
							customstyleprop={videoSectionStepsvideoStepsIconDescriptionStyle}
							headingtitleprop={
								"After learning about your customer service needs, we will get you up"
							}
						/>
					</VideoSectionStepsMiniContainer>
					<VideoSectionStepsMiniContainer>
						<DefaultImgContainer
							customstyledivprop={videoSectionStepsvideoStepsIconDivStyle}
							customstyleimgprop={videoSectionStepsvideoStepsIconImgStyle}
							srcprop={threeicon}
						/>
						<DefaultHeading
							customstyleprop={videoSectionStepsvideoStepsIconMainheadingStyle}
							headingtitleprop={"Track Analysis"}
						/>
						<DefaultHeading
							customstyleprop={videoSectionStepsvideoStepsIconDescriptionStyle}
							headingtitleprop={
								"After learning about your customer service needs, we will get you up"
							}
						/>
					</VideoSectionStepsMiniContainer>
				</VideoSectionStepsSegment>
				<VideoSectionVideoSegment />
			</VideoSectionStepsVideoSegment>
		</VideoSectionContainer>
	);
};

export default VideoSection;
