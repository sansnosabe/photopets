import "./App.css";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ValidatedPage } from "./pages/ValidatedPage";
import { PostsPage } from "./pages/PostsPage";

import Footer from "./components/Footer";

function App() {
  return (
    <main className="flex flex-col min-h-screen text-center">
      <section className="flex-grow flex flex-col justify-center items-center sm:w-full md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users/login" element={<LoginPage />} />
          <Route path="/users/register" element={<RegisterPage />} />
          <Route path="/users/validate/:registrationCode" element={<ValidatedPage />} />
          <Route path="/posts" element={<PostsPage />} />
        </Routes>
      </section>
      <Footer className="mt-auto" />
    </main>
  );
}

export default App;

