import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./scss/styles.scss";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import AllAds from "./Pages/AllAds";
import PostAd from "./Pages/PostAd";
import Home from "./Pages/Home";
import MyAccount from "./Pages/MyAccount";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ads" element={<AllAds />} />
        <Route path="/postads" element={<PostAd />} />
        <Route path="/account" element={<MyAccount />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
