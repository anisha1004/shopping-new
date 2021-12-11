import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Products from "./pages/Products";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Context/auth";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
	return (
		<div className='app'>
			<AuthProvider>
				<Router>
					<div className='left'>
						<Sidebar />
					</div>
					<div className='right'>
						<Navbar />
						<Routes>
							<Route path='/products' element={<Products />} />
							<Route path='/login' element={<Login />} />
							<Route path='/register' element={<Register />} />
							{/* <Products /> */}
							<Route path='/cart' element={<Cart />} />
							<Route path='/checkout' element={<Checkout />} />
						</Routes>
					</div>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
