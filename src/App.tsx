import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import SignInPage from "./pages/SignInPage.tsx";
import SignUp from "./components/Signup.tsx";
import StickyFooter from "./components/StickyFooter.tsx";
import Home from "./pages/Home.tsx";
import EditProfile from "./pages/EditProfileUser.tsx"
import ProfileUser from "./pages/ProfileUser.tsx"

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/ProfileUser" element={<ProfileUser />} />
      </Routes>
      <StickyFooter />
    </BrowserRouter>
  );
}
