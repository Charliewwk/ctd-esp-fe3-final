import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Favorites from "./pages/favorites/Favorites";
import NoPage from "./pages/noPage/NoPage";
import LanguageSelector from "./components/languageSelector/LanguageSelector";
import ThemeSwitch from "./components/themeSwitch/ThemeSwitch";

export default function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
        <LanguageSelector />
        <ThemeSwitch />
      </BrowserRouter>
    </GlobalProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
