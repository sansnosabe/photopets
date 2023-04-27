import "./App.css";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ValidatedPage } from "./pages/ValidatedPage";
import { MyProfilePage } from "./pages/MyProfilePage";
import { EditProfilePage } from "./pages/EditProfilePage";
import { UserProfilePage } from "./pages/UserProfilePage";

import { Footer } from "./components/Footer";
import { HeaderSmall } from "./components/HeaderSmall";

import { useUsers } from "./hooks/useUsers";

function App() {
	const { user } = useUsers();

	return (
		<main className="flex flex-col justify-start items-center min-h-screen">
			{user ? (
				<article className="flex-grow flex flex-col text-center">
					<HeaderSmall />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/:username" element={<MyProfilePage />} />
						<Route path="users/:username/:id" element={<UserProfilePage />} />
						<Route path="/accounts/edit" element={<EditProfilePage />} />
					</Routes>
				</article>
			) : (
				<article className="flex-grow flex flex-col justify-center items-center text-center w-full h-full">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/users/login" element={<LoginPage />} />
						<Route path="/users/register" element={<RegisterPage />} />
						<Route path="/users/validate/:registrationCode" element={<ValidatedPage />} />
					</Routes>
				</article>
			)}
			<Footer />
		</main>
	);
}

export default App;
