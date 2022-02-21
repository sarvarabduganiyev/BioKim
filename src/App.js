import About from "./pages/About/About";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalog from "./pages/catalog/Catalog";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import BlogFull from "./pages/blogFull/BlogFull";
import CatalogFull from "./pages/catalogFull/CatalogFull";


import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';



i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "fr", "ar", "uz"],
    fallbackLng: "en",
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'localStorage', 'subdomain'],
      caches: ["cookie"]
    },

    backend: {
      loadPath: 'ass/local/{{lng}}/translation.json'
    },
    react: { useSuspense: false },

    interpolation: {
      escapeValue: false
    }
  });

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blogfull" element={<BlogFull />}></Route>
        <Route path="/catalogfull" element={<CatalogFull />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// https://biokim.netlify.app/