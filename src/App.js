import MainLandingSection from "./Sections/MainLandingSection/MainLandingSection";
import { GlobalBaseStyle } from "./Styles/GlobalBaseStyle/GlobalBaseStyle";

function App() {
	return (
		<>
			<GlobalBaseStyle />
			<div className="App">
				<MainLandingSection />
			</div>
		</>
	);
}

export default App;
