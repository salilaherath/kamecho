import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
	return (
		<div className="App bg-primary-100">
			<Navbar />
			<Hero />
			<About />
			<Products />
		</div>
	);
}

export default App;
