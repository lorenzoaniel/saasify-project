import React from "react";
import styled from "styled-components";

import DefaultButton from "../../Components/Common/DefaultButton/DefaultButton";
import DefaultHeading from "../../Components/Common/DefaultHeading/DefaultHeading";

import { footerSectionMainheadingContainerHeadingStyle } from "../../Styles/footer-section/footer-section-mainheading-container-style/footer-section-mainheading-container-heading-style/footer-section-mainheading-container-heading-style.js";
import { footerSectionMainheadingContainerButtonStyle } from "../../Styles/footer-section/footer-section-mainheading-container-style/footer-section-mainheading-container-button-style/footer-section-mainheading-container-button-style.js";
import { footerSectionLinksContainerLinkslogoLogoStyle } from "../../Styles/footer-section/footer-section-links-container-style/footer-section-links-container-linkslogo-style/footer-section-links-container-linkslogo-logo-style/footer-section-links-container-linkslogo-logo-style.js";
import { footerSectionLinksContainerLinkslogoDescriptionStyle } from "../../Styles/footer-section/footer-section-links-container-style/footer-section-links-container-linkslogo-style/footer-section-links-container-linkslogo-description-style/footer-section-links-container-linkslogo-description-style.js";
import { footerSectionLinksContainerLinksminiHeadingStyle } from "../../Styles/footer-section/footer-section-links-container-style/footer-section-links-container-linksmini-style/footer-section-links-container-linksmini-heading-style/footer-section-links-container-linksmini-heading-style.js";
import { footerSectionLinksContainerLinksminiLinksStyle } from "../../Styles/footer-section/footer-section-links-container-style/footer-section-links-container-linksmini-style/footer-section-links-container-linksmini-links-style/footer-section-links-container-linksmini-links-style.js";

const FooterSectionContainer = styled.div`
	width: 100%;
	height: 861px;
	background: #040335;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

const FooterSectionMiniContainer = styled.div`
	width: 817px;
	height: 300px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
`;

const FooterSectionlinksMiniContainer = styled.div`
	width: 100%;
	height: 386px;

	border-top: 1px solid rgba(255, 255, 255, 0.4);

	padding: 10px;
	display: flex;
`;

const FooterSectionlinksLogoMiniContainer = styled.div`
	width: 40%;
	height: 100%;

	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;

	padding-left: 6%;
`;

const FooterSectionlinksLinksMiniContainer = styled.div`
	width: 60%;
	height: 100%;

	display: flex;
	justify-content: space-around;

	padding: 10px;
`;

const FooterSectionlinksLinksMiniColumnContainer = styled.div`
	height: 100%;
	width: 1fr;
	display: flex;
	flex-direction: column;
	row-gap: 24px;
`;

const FooterSectionCopyrightMiniContainer = styled.div`
	width: 100%;
	height: 98px;

	display: flex;
	justify-content: center;
	align-items: center;

	border-top: 1px solid rgba(255, 255, 255, 0.4);

	padding: 10px;
`;

const FooterSection = () => {
	return (
		<FooterSectionContainer>
			<FooterSectionMiniContainer>
				<DefaultHeading
					customstyleprop={footerSectionMainheadingContainerHeadingStyle}
					headingtitleprop={"We are here to help you grow your business"}
				/>
				<DefaultButton
					customstyleprop={footerSectionMainheadingContainerButtonStyle}
					btntitleprop={"Get Started Now"}
				/>
			</FooterSectionMiniContainer>
			<FooterSectionlinksMiniContainer>
				<FooterSectionlinksLogoMiniContainer>
					<DefaultHeading
						customstyleprop={footerSectionLinksContainerLinkslogoLogoStyle}
						headingtitleprop={"SAASIFY"}
						classnameprop={"footer-saasify-logo"}
					/>
					<DefaultHeading
						customstyleprop={footerSectionLinksContainerLinkslogoDescriptionStyle}
						headingtitleprop={"Data visualization, and expense management for your business."}
						classnameprop={"footer-description"}
					/>
				</FooterSectionlinksLogoMiniContainer>
				<FooterSectionlinksLinksMiniContainer>
					<FooterSectionlinksLinksMiniColumnContainer className={"link-column-product"}>
						<DefaultHeading
							customstyleprop={footerSectionLinksContainerLinksminiHeadingStyle}
							className={"link-column-product-heading"}
							headingtitleprop={"Product"}
						/>
						<DefaultHeading
							customstyleprop={footerSectionLinksContainerLinksminiLinksStyle}
							headingtitleprop={"Digital Invoice"}
						/>
						<DefaultHeading
							customstyleprop={footerSectionLinksContainerLinksminiLinksStyle}
							headingtitleprop={"Insights"}
						/>
						<DefaultHeading
							customstyleprop={footerSectionLinksContainerLinksminiLinksStyle}
							headingtitleprop={"Reimbursements"}
						/>
						<DefaultHeading
							customstyleprop={footerSectionLinksContainerLinksminiLinksStyle}
							headingtitleprop={"Virtual Assistant"}
						/>
						<DefaultHeading
							customstyleprop={footerSectionLinksContainerLinksminiLinksStyle}
							headingtitleprop={"Artificial Intelligence"}
						/>
					</FooterSectionlinksLinksMiniColumnContainer>
					<FooterSectionlinksLinksMiniColumnContainer>
						<DefaultHeading
							customstyleprop={footerSectionLinksContainerLinksminiHeadingStyle}
							className={"link-column-company-heading"}
							headingtitleprop={"Company"}
						/>
						<DefaultHeading
							customstyleprop={footerSectionLinksContainerLinksminiLinksStyle}
							headingtitleprop={"About Us"}
						/>
						<DefaultHeading
							customstyleprop={footerSectionLinksContainerLinksminiLinksStyle}
							headingtitleprop={"Newsletters"}
						/>
						<DefaultHeading
							customstyleprop={footerSectionLinksContainerLinksminiLinksStyle}
							headingtitleprop={"Our Partners"}
						/>
						<DefaultHeading
							customstyleprop={footerSectionLinksContainerLinksminiLinksStyle}
							headingtitleprop={"Career"}
						/>
						<DefaultHeading
							customstyleprop={footerSectionLinksContainerLinksminiLinksStyle}
							headingtitleprop={"Contact Us"}
						/>
					</FooterSectionlinksLinksMiniColumnContainer>
					<FooterSectionlinksLinksMiniColumnContainer>
						<DefaultHeading
							customstyleprop={footerSectionLinksContainerLinksminiHeadingStyle}
							className={"link-column-resources-heading"}
							headingtitleprop={"Resources"}
						/>
						<DefaultHeading
							customstyleprop={footerSectionLinksContainerLinksminiLinksStyle}
							headingtitleprop={"Blog"}
						/>
						<DefaultHeading
							customstyleprop={footerSectionLinksContainerLinksminiLinksStyle}
							headingtitleprop={"Pricing"}
						/>
						<DefaultHeading
							customstyleprop={footerSectionLinksContainerLinksminiLinksStyle}
							headingtitleprop={"FAQ"}
						/>
						<DefaultHeading
							customstyleprop={footerSectionLinksContainerLinksminiLinksStyle}
							headingtitleprop={"Events"}
						/>
						<DefaultHeading
							customstyleprop={footerSectionLinksContainerLinksminiLinksStyle}
							headingtitleprop={"Ebook & Guide"}
						/>
					</FooterSectionlinksLinksMiniColumnContainer>
					<FooterSectionlinksLinksMiniColumnContainer>
						<DefaultHeading
							customstyleprop={footerSectionLinksContainerLinksminiHeadingStyle}
							className={"link-column-follow-us-heading"}
							headingtitleprop={"Follow Us"}
						/>
						<DefaultHeading
							customstyleprop={footerSectionLinksContainerLinksminiLinksStyle}
							headingtitleprop={"LinkedIn"}
						/>
						<DefaultHeading
							customstyleprop={footerSectionLinksContainerLinksminiLinksStyle}
							headingtitleprop={"Twitter"}
						/>
						<DefaultHeading
							customstyleprop={footerSectionLinksContainerLinksminiLinksStyle}
							headingtitleprop={"Instagram"}
						/>
						<DefaultHeading
							customstyleprop={footerSectionLinksContainerLinksminiLinksStyle}
							headingtitleprop={"Facebook"}
						/>
						<DefaultHeading
							customstyleprop={footerSectionLinksContainerLinksminiLinksStyle}
							headingtitleprop={"Youtube"}
						/>
					</FooterSectionlinksLinksMiniColumnContainer>
				</FooterSectionlinksLinksMiniContainer>
			</FooterSectionlinksMiniContainer>
			<FooterSectionCopyrightMiniContainer></FooterSectionCopyrightMiniContainer>
		</FooterSectionContainer>
	);
};

export default FooterSection;
