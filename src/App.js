import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Homepage from "./pages/Homepage";

function App() {
	return (
		<div className='app'>
			<div className='left'>
				<Sidebar />
			</div>

			<div className='right'>
				<Navbar />
				<Homepage />
			</div>
		</div>
	);
}

export default App;
