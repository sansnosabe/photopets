import "./App.css";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ValidatedPage } from "./pages/ValidatedPage";
import { MyProfilePage } from "./pages/MyProfilePage";
import { EditProfilePage } from "./pages/EditProfilePage";

import Footer from "./components/Footer";

function App() {
	return (
		<main className="flex flex-col min-h-screen">
			<article className="flex-1 flex flex-col justify-center items-center text-center w-full h-full">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/users/login" element={<LoginPage />} />
					<Route path="/users/register" element={<RegisterPage />} />
					<Route path="/users/validate/:registrationCode" element={<ValidatedPage />} />
					<Route path="/:username" element={<MyProfilePage />} />
					<Route path="/accounts/edit" element={<EditProfilePage />} />
				</Routes>
			</article>
			<Footer />
		</main>
	);
}

export default App;
