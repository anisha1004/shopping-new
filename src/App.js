import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<div className='app'>
			<div className='left'>
				<Sidebar />
			</div>

			<div className='right'>
				<Navbar />
			</div>
		</div>
	);
}

export default App;
