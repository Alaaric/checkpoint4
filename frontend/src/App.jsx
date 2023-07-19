import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./scss/styles.scss";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import AllAds from "./Pages/AllAds";
import PostAd from "./Pages/PostAd";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<AllAds />} />
        <Route path="/contact" element={<PostAd />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
