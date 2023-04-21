import "./App.css";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ValidatedPage } from "./pages/ValidatedPage";
import { MyProfilePage } from "./pages/MyProfilePage";
import { SettingsPage } from "./pages/SettingsPage";

import Footer from "./components/Footer";

function App() {
	return (
		<main className="flex flex-col h-screen">
			<article className="flex-1 flex flex-col justify-center items-center text-center w-full h-full ">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/users/login" element={<LoginPage />} />
					<Route path="/users/register" element={<RegisterPage />} />
					<Route path="/users/validate/:registrationCode" element={<ValidatedPage />} />
					<Route path="/:username" element={<MyProfilePage />} />
					<Route path="/settings" element={<SettingsPage />} />
				</Routes>
			</article>
			<Footer />
		</main>
	);
}

export default App;
// sm:w-full md:w-4/5 lg:w-3/5 xl:w-2/5 