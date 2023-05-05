import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Hero />
			<About />
			<Products />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
