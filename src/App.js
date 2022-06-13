import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// PAGES
import Home from "./pages/Home";
import Register from "./pages/LoginStuff/Register";
import Signin from "./pages/LoginStuff/Signin";
import Madrid from "./pages/Cities/Madrid";
import Lisboa from "./pages/Cities/Lisboa";
import Rome from "./pages/Cities/Rome";
import London from "./pages/Cities/London";
import Article1 from "./pages/ArticlePage/Article1";
import Article2 from "./pages/ArticlePage/Article2";
import Article3 from "./pages/ArticlePage/Article3";
import SearchResults from "./pages/SearchResults/SearchResults";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          {/* Login Stuff */}
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          {/* Cities */}
          <Route path="/cities/madrid" element={<Madrid />} />
          <Route path="/cities/lisboa" element={<Lisboa />} />
          <Route path="/cities/rome" element={<Rome />} />
          <Route path="/cities/london" element={<London />} />
          {/* Articles */}
          <Route path="/article/1" element={<Article1 />} />
          <Route path="/article/2" element={<Article2 />} />
          <Route path="/article/3" element={<Article3 />} />
          {/* Search Results */}
          <Route path="/search-results" element={<SearchResults />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
