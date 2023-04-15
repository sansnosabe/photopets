import "./App.css";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { PostsPage } from "./pages/PostsPage";
import Footer from "./components/Footer";

function App() {
	return (
    <body>
      <main className='w-auto h-auto'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/users/login' element={<LoginPage />} />
          <Route path='/users' element={<RegisterPage />} />
          {/* 
          <Route path="/users/validate/:registrationCode" element={<ValidatePage />} />
          <Route path="/user" element={<UserPage />} />
        <Route path="/user/profile" element={<UserEditPage />} /> */}

          <Route path='/posts' element={<PostsPage />} />
          {/* <Route path="/posts/myPosts" element={<UserPots />} /> */}

          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </body>
  );
}
export default App;
