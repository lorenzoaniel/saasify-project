import styled from "styled-components";
import MainLandingSection from "./Sections/MainLandingSection/MainLandingSection";
import { GlobalBaseStyle } from "./Styles/GlobalBaseStyle/GlobalBaseStyle";

const AppContainer = styled.div``;

function App() {
	return (
		<>
			<GlobalBaseStyle />
			<AppContainer className={"App-Container"}>
				<MainLandingSection />
			</AppContainer>
		</>
	);
}

export default App;
