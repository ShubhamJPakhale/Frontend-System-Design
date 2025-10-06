import "./App.css";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";
import FQA from "./components/Accordion-page/FQA";
import NestedComments from "./components/Nested-Comments/NestedComments";

function App() {
  const [lang, setLang] = useState("en");
  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          {/* protected route code */}
          <Route element={<ProtectedRoute />}>
            <Route path="/about" element={<AboutUs lang={lang} />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/faq" element={<FQA />} />
          <Route path="/comments" element={<NestedComments />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
