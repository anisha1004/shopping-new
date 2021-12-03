import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";

function App() {
	return (
		<div className='app'>
			<div className='left'>
				<Sidebar />
			</div>

			<div className='right'>
				<Navbar />
				{/* <Homepage /> */}
				<Products />
			</div>
		</div>
	);
}

export default App;
