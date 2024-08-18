import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import ResponsiveAppBar from "./components/Navbar";

import Home from "./pages/Home";
import AboutUsPage from "./pages/AboutUsPage";
import HowWeWorkPage from "./pages/HowWeWorkPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  const isLoggedIn = false;

  return (
    <>
      <ResponsiveAppBar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUsPage/>}/>
        <Route path="/howwework" element={<HowWeWorkPage/>}/>
        <Route path="/signIn" element={<SignIn/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
