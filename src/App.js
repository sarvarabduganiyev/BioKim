import About from "./pages/About/About";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalog from "./pages/catalog/Catalog";
import Blog from "./pages/blog/Blog";
import BlogFull from "./pages/blogFull/BlogFull";
import CatalogFull from "./pages/catalogFull/CatalogFull";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// https://biokim.netlify.app/