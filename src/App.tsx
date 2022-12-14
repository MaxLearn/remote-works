import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import SignInPage from "./pages/SignInPage.tsx";
import SignUp from "./components/Signup.tsx";
import StickyFooter from "./components/StickyFooter.tsx";
import Home from "./pages/Home.tsx";
import ProfilePage from "./pages/Profile.tsx"
import Search from "./pages/Search.tsx"

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <StickyFooter />
    </BrowserRouter>
  );
}
