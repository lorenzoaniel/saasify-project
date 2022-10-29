import styled from "styled-components";

import ConversionSection from "./Sections/ConversionSection/ConversionSection";
import MainLandingSection from "./Sections/MainLandingSection/MainLandingSection";
import PlansTestimonialSection from "./Sections/PlansTestimonialSection/PlansTestimonialSection";
import VideoSection from "./Sections/VideoSection/VideoSection";

import { GlobalBaseStyle } from "./Styles/GlobalBaseStyle/GlobalBaseStyle";

const AppContainer = styled.div``;

function App() {
	return (
		<>
			<GlobalBaseStyle />
			<AppContainer className={"App-Container"}>
				<MainLandingSection />
				<ConversionSection />
				<VideoSection />
				<PlansTestimonialSection />
			</AppContainer>
		</>
	);
}

export default App;
