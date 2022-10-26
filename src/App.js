import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Pricing from "./components/Pricing/Pricing";

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Features />
				<Pricing />
			</main>
			<Footer />
		</>
	);
};

export default App;
