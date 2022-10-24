import React from "react";
import styled from "styled-components";

import DefaultHeading from "../../Common/DefaultHeading/DefaultHeading";
import DefaultImgContainer from "../../Common/DefaultImgContainer/DefaultImgContainer";
import ServiceReadMoreBtn from "./ServiceReadMoreBtn/ServiceReadMoreBtn";

import { mainLandingServicesMainTitleStyle } from "../../../Styles/main-landing-services-style/main-landing-services-main-title-style/main-landing-services-main-title-style.js";
import { mainLandingServicesServicecontainerIconStyle } from "../../../Styles/main-landing-services-style/main-landing-services-servicecontainer-style/main-landing-services-servicecontainer-icon-style/main-landing-services-servicecontainer-icon-style.js";
import { mainLandingServicesServicecontainerHeadingStyle } from "../../../Styles/main-landing-services-style/main-landing-services-servicecontainer-style/main-landing-services-servicecontainer-heading-style/main-landing-services-servicecontainer-heading-style.js";
import { mainLandingServicesServicecontainerSecondheadingStyle } from "../../../Styles/main-landing-services-style/main-landing-services-servicecontainer-style/main-landing-services-servicecontainer-secondheading-style/main-landing-services-servicecontainer-secondheading-style.js";

import taskmanagementimg from "../../../Assets/Imgs/Services/taskmanagementicon.png";
import designsystemimg from "../../../Assets/Imgs/Services/designsystemicon.png";
import bestpracticeimg from "../../../Assets/Imgs/Services/bestpracticeicon.png";

const ServicesMainContainer = styled.div`
	width: 100%;
	height: 550px;
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: 25% 70%;
	grid-template-areas: "service-main-title" "service-container-container";
	row-gap: 5%;

	margin-top: 110px;
`;

const ServicesContainerContainer = styled.div`
	grid-area: service-container-container;
	display: flex;
	gap: 1%;
	justify-content: space-around;
`;

const ServicesContainer = styled.div`
	background: #ffffff;
	height: 90%;
	width: 30%;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 25% 20% 35% 5%;
	grid-template-areas: "icon" "mainheading" "secondheading" "readmore";
	justify-content: space-around;
	align-items: center;
	grid-row-gap: 5%;

	padding: 2%;
	border-radius: 1rem;
	box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.07);
	border-radius: 20px;
`;

const Services = (props) => {
	const { classnameprop } = props;

	return (
		<ServicesMainContainer className={classnameprop}>
			<DefaultHeading
				classnameprop={"service-main-title"}
				headingtitleprop={"Our Services Made For You."}
				customstyleprop={mainLandingServicesMainTitleStyle}
			/>
			<ServicesContainerContainer>
				<ServicesContainer className={"service-task-management"}>
					<DefaultImgContainer
						customstyledivprop={mainLandingServicesServicecontainerIconStyle}
						srcprop={taskmanagementimg}
						classnameprop={"service-task-management-icon"}
					/>
					<DefaultHeading
						customstyleprop={mainLandingServicesServicecontainerHeadingStyle}
						headingtitleprop={"Task Management"}
					/>
					<DefaultHeading
						customstyleprop={mainLandingServicesServicecontainerSecondheadingStyle}
						headingtitleprop={
							"The process of managing a task through its life cycle. It involves planning, testing, tracking."
						}
					/>
					<ServiceReadMoreBtn />
				</ServicesContainer>
				<ServicesContainer className={"service-design-system"}>
					<DefaultImgContainer
						customstyledivprop={mainLandingServicesServicecontainerIconStyle}
						srcprop={designsystemimg}
						classnameprop={"service-design-system-icon"}
					/>
					<DefaultHeading
						customstyleprop={mainLandingServicesServicecontainerHeadingStyle}
						headingtitleprop={"Design System"}
					/>
					<DefaultHeading
						customstyleprop={mainLandingServicesServicecontainerSecondheadingStyle}
						headingtitleprop={
							"The technology by which a process or procedure is preformed with minimal human assistance."
						}
					/>
					<ServiceReadMoreBtn />
				</ServicesContainer>
				<ServicesContainer className={"service-best-practice"}>
					<DefaultImgContainer
						customstyledivprop={mainLandingServicesServicecontainerIconStyle}
						srcprop={bestpracticeimg}
						classnameprop={"service-best-practice-icon"}
					/>
					<DefaultHeading
						customstyleprop={mainLandingServicesServicecontainerHeadingStyle}
						headingtitleprop={"Best Practices"}
					/>
					<DefaultHeading
						customstyleprop={mainLandingServicesServicecontainerSecondheadingStyle}
						headingtitleprop={
							"Creating plan to spend your money, This spending planer is called a budgeting tool for business."
						}
					/>
					<ServiceReadMoreBtn />
				</ServicesContainer>
			</ServicesContainerContainer>
		</ServicesMainContainer>
	);
};

export default Services;
