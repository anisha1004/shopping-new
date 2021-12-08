import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Demopage from "./pages/Demopage.js";
import { AuthProvider } from "./Context/auth";

function App() {
	return (
		<div className='app'>
			<AuthProvider>
				<div className='left'>
					<Sidebar />
				</div>

				<div className='right'>
					<Navbar />
					<Router>
						<Routes>
							<Route path='/products' element={<Products />} />
							<Route path='/login' element={<Login />} />
							{/* <Homepage /> */}
							{/* <Products /> */}
							<Route path='/demo' element={<Demopage />} />
						</Routes>
					</Router>
				</div>
			</AuthProvider>
		</div>
	);
}

export default App;
