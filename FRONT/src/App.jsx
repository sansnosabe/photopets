import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PostPage from "./pages/HomePage";

function App() {
	return (
		<main>
			<Routes>
				<Route path="/" element={<HomePage/>} />
				<Route path="/login" element={<LoginPage/>} />
				<Route path="/register" element={<RegisterPage/>} />
				<Route path="/post/:id" element={<PostPage/>} />
			</Routes>
			<Footer />
		</main>
	);
}

export default App;
