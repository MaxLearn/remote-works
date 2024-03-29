import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import SignInPage from "./pages/SignInPage.tsx";
import StickyFooter from "./components/StickyFooter.tsx";
import Home from "./pages/Home.tsx";
import EditProfile from "./pages/EditProfileUser.tsx"
import ProfileUser from "./pages/ProfileUser.tsx"
import ProfileBusiness from "./pages/ProfileBusiness.tsx"
import EditProfileBusiness from "./pages/EditProfileBusiness"
import EditPostingBusiness from "./pages/EditPostingBusiness"
import Favorites from "./pages/Favorites";
import SignUpPage from "./pages/SignUpPage";
import FilterPosting from "./pages/FilterPosting";

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/remote-works" element={<Home />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/ProfileUser" element={<ProfileUser />} />
        <Route path="/ProfileBusiness" element={<ProfileBusiness />} />
        <Route path="/EditProfileBusiness" element={<EditProfileBusiness />} />
        <Route path="/EditPostingBusiness" element={<EditPostingBusiness />} />
        <Route path="/SearchPosting" element={<FilterPosting />} />
      </Routes>
      <StickyFooter />
    </BrowserRouter>
  );
}
