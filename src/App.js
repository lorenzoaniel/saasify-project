import styled from "styled-components";
import ConversionSection from "./Sections/ConversionSection/ConversionSection";
import MainLandingSection from "./Sections/MainLandingSection/MainLandingSection";
import { GlobalBaseStyle } from "./Styles/GlobalBaseStyle/GlobalBaseStyle";

const AppContainer = styled.div``;

function App() {
	return (
		<>
			<GlobalBaseStyle />
			<AppContainer className={"App-Container"}>
				<MainLandingSection />
				<ConversionSection />
			</AppContainer>
		</>
	);
}

export default App;
