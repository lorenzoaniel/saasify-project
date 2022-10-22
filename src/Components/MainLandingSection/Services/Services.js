import React from "react";
import styled from "styled-components";

import DefaultButton from "../../Common/DefaultButton/DefaultButton";
import DefaultHeading from "../../Common/DefaultHeading/DefaultHeading";
import DefaultImgContainer from "../../Common/DefaultImgContainer/DefaultImgContainer";

import { mainLandingServicesMainTitleStyle } from "../../../Styles/main-landing-services-style/main-landing-services-main-title-style/main-landing-services-main-title-style.js";

import taskmanagementimg from "../../../Assets/Imgs/Services/taskmanagementicon.png";
import designsystemimg from "../../../Assets/Imgs/Services/designsystemicon.png";
import bestpracticeimg from "../../../Assets/Imgs/Services/bestpracticeicon.png";

const ServicesMainContainer = styled.div`
	background-color: pink;
	width: 100%;
	height: 550px;
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: 1fr 70%;
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
	background-color: orange;
	height: 90%;
	width: 30%;

	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	/* font-family: var(--DefaultFont-inter);
	font-weight: 700;
	font-size: 24px;
	line-height: 100%; */

	/* identical to box height, or 24px */
	letter-spacing: -0.03em;

	padding: 1rem;
	border-radius: 1rem;
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
						srcprop={taskmanagementimg}
						classnameprop={"service-task-management-icon"}
					/>
					<DefaultHeading headingtitleprop={"Task Management"} />
					<DefaultHeading
						headingtitleprop={
							"The process of managing a task through its life cycle. It involves planning, testing, tracking."
						}
					/>
					<DefaultButton />
				</ServicesContainer>
				<ServicesContainer className={"service-design-system"}>
					<DefaultImgContainer
						srcprop={designsystemimg}
						classnameprop={"service-design-system-icon"}
					/>
					<DefaultHeading headingtitleprop={"Design System"} />
					<DefaultHeading
						headingtitleprop={
							"The technology by which a process or procedure is preformed with minimal human assistance."
						}
					/>
					<DefaultButton />
				</ServicesContainer>
				<ServicesContainer className={"service-best-practice"}>
					<DefaultImgContainer
						srcprop={bestpracticeimg}
						classnameprop={"service-best-practice-icon"}
					/>
					<DefaultHeading headingtitleprop={"Best Practices"} />
					<DefaultHeading
						headingtitleprop={
							"Creating plan to spend your money, This spending planer is called a budgeting tool for business."
						}
					/>
					<DefaultButton />
				</ServicesContainer>
			</ServicesContainerContainer>
		</ServicesMainContainer>
	);
};

export default Services;
