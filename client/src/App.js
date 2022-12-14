import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
// import PostsListPage from "./pages/PostsListPage";
// import PostFormPage from "./pages/PostFormPage";
import MenuPage from "./pages/menuPage";
// import ShowPostPage from "./pages/ShowPostPage";
import AboutUsPage from "./pages/AboutUsPage";
import LoginPage from "./pages/LoginPage";
import PrivateRouteRequiresAuth from "./components/PrivateRouteRequiresAuth";
import SignupPage from "./pages/SignupPage";
import LandingPage from "./pages/LandingPage";

import "./App.css";
import { AuthProvider } from "./pages/context/AuthContext";
import AuthButton from "./components/AuthButton";
import 'bootstrap/dist/css/bootstrap.min.css';


function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          VocaOrder
        </Link>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/menus">
              Menus
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about-us">
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
      <AuthButton />
    </nav>
  );
}

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
          <div className="container-xl text-center">
            <div className="row justify-content-center">
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route
                  path="/menus"
                  element={
                    <PrivateRouteRequiresAuth>
                      <MenuPage />
                    </PrivateRouteRequiresAuth>
                  }
                />
                {/* <Route path="/posts/:id" element={<ShowPostPage />} /> */}
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/" element={<LandingPage />} />
                <Route path="/signuppage" element={<SignupPage />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
