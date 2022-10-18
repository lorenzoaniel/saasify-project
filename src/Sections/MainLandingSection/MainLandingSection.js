import React from "react";
import styled from "styled-components";

import DefaultLink from "../../Components/Common/DefaultLink/DefaultLink";
import NavBar from "../../Components/MainLandingSection/NavBar/NavBar";
import NavBarMenu from "../../Components/MainLandingSection/NavBar/NavBarMenu/NavBarMenu";
import Logo from "../../Components/MainLandingSection/Logo/Logo";
import DefaultButton from "../../Components/Common/DefaultButton/DefaultButton";
import DefaultHeading from "../../Components/Common/DefaultHeading/DefaultHeading";
import EmailBar from "../../Components/MainLandingSection/EmailBar/EmailBar";
import DefaultImgContainer from "../../Components/Common/DefaultImgContainer/DefaultImgContainer";

import { pageMenuLinksStyle } from "../../Styles/page-menu-links-style/page-menu-links-style";
import { pageMenuLinksButtonStyle } from "../../Styles/page-menu-links-style/page-menu-links-button-style/page-menu-links-button-style";
import { pageMenuLogoStyle } from "../../Styles/page-menu-links-style/page-menu-logo-container-style/page-menu-logo-style/page-menu-logo-style";
import { pageMenuLogoContainerStyle } from "../../Styles/page-menu-links-style/page-menu-logo-container-style/page-menu-logo-container-style";
import { pageMenuSignupContainerStyle } from "../../Styles/page-menu-links-style/page-menu-signup-container-style/page-menu-signup-container-style";
import { pageMenuSignupButtonStyle } from "../../Styles/page-menu-links-style/page-menu-signup-container-style/page-menu-signup-button-style/page-menu-signup-button-style";
import { mainLandingHeadingStyle } from "../../Styles/main-landing-heading-style/main-landing-heading-style.js";
import { mainLandingSecondHeadingStyle } from "../../Styles/main-landing-heading-style/main-landing-second-heading-style/main-landing-second-heading-style";
import { mainLandingDashboardDivStyle } from "../../Styles/main-landing-dashboard-style/main-landing-dashboard-div-style/main-landing-dashboard-div-style.js";
import { mainLandingDashboardImgStyle } from "../../Styles/main-landing-dashboard-style/main-landing-dashboard-img-style/main-landing-dashboard-img-style.js";

import dashboardimg from "../../Assets/Imgs/dashboard_saasify_example.png";

const MainLandingSectionContainer = styled.div`
	height: 2502px;
	width: 100%;
`;

const MainLandingSectionWaveContainer = styled.div`
	background: var(--MainLandingSection-bg-gradient);
	height: 1520.5px;
	width: 100%;
	clip-path: var(--clipshape-MainLandingSection-wave);

	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: 10% 20% 5% 10% 55%;
	grid-template-areas: "navbar" "mainlandingheading" "mainlandingsecondheading" "registeremail" ".";
`;

const MainLandingSection = () => {
	return (
		<MainLandingSectionContainer>
			<MainLandingSectionWaveContainer>
				<NavBar classnameprop={"navbar"}>
					<NavBarMenu classnameprop={"page-menu-logo"} customstyleprop={pageMenuLogoContainerStyle}>
						<Logo
							titleprop={"Saasify"}
							classnameprop={"logo-saasify"}
							customstyleprop={pageMenuLogoStyle}
						/>
					</NavBarMenu>
					<NavBarMenu classnameprop={"page-menu-links"} customstyleprop={pageMenuLinksStyle}>
						<DefaultLink linktitleprop={"Product"} customstyleprop={pageMenuLinksButtonStyle} />
						<DefaultLink linktitleprop={"Solution"} customstyleprop={pageMenuLinksButtonStyle} />
						<DefaultLink linktitleprop={"Customer"} customstyleprop={pageMenuLinksButtonStyle} />
						<DefaultLink linktitleprop={"Pricing"} customstyleprop={pageMenuLinksButtonStyle} />
						<DefaultLink linktitleprop={"About us"} customstyleprop={pageMenuLinksButtonStyle} />
					</NavBarMenu>
					<NavBarMenu
						classnameprop={"page-menu-signup"}
						customstyleprop={pageMenuSignupContainerStyle}
					>
						<DefaultButton
							classnameprop={"navbar-signup"}
							btntitleprop={"Sign up"}
							customstyleprop={pageMenuSignupButtonStyle}
						/>
					</NavBarMenu>
				</NavBar>
				<DefaultHeading
					headingtitleprop={"The Fastest Way For Startups To Do Any Analysis"}
					customstyleprop={mainLandingHeadingStyle}
					classnameprop={"mainlandingheading"}
				/>
				<DefaultHeading
					headingtitleprop={
						"Equals is the only spreadsheet with built-in connections to any database, versioning, and collaboration"
					}
					customstyleprop={mainLandingSecondHeadingStyle}
					classnameprop={"mainlandingsecondheading"}
				/>
				<EmailBar classnameprop={"registeremail"} />
			</MainLandingSectionWaveContainer>
			<DefaultImgContainer
				customstyledivprop={mainLandingDashboardDivStyle}
				customstyleimgprop={mainLandingDashboardImgStyle}
				altprop={"dashboard example"}
				srcprop={dashboardimg}
			/>
		</MainLandingSectionContainer>
	);
};

export default MainLandingSection;
