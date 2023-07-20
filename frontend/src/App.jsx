import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./scss/styles.scss";
import AllAds from "./Pages/AllAds";
import PostAd from "./Pages/PostAd";
import Home from "./Pages/Home";
import MyAccount from "./Pages/MyAccount";
import NavLayout from "./Layouts/NavLayout";
import ProtectedLayout from "./Layouts/ProtectedLayout";

function App() {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route element={<NavLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ads" element={<AllAds />} />

          {/* private routes  */}
          <Route element={<ProtectedLayout />}>
            <Route path="/postads" element={<PostAd />} />
            <Route path="/account" element={<MyAccount />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
