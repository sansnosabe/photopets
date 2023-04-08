import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { PostsPage } from "./pages/PostsPage";
import Footer from "./components/Footer";

function App() {
	return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/users" element={<RegisterPage />} />
        <Route path="/users/validate/:registrationCode" element={<ValidatePage />} />
        <Route path="/users/login" element={<LoginPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/user/profile" element={<UserEditPage />} /> */}

        <Route path="/posts" element={<PostsPage />} />
        {/* <Route path="/posts/myPosts" element={<UserPots />} /> */}
				
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      <Footer />
    </main>
  );

export default App;
