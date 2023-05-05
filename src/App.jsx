import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
	return (
		<div className="App bg-primary-100">
			<Navbar />
			<Hero />
			<About />
		</div>
	);
}

export default App;
