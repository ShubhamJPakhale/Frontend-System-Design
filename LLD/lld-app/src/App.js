import "./App.css";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/about" element={<AboutUs />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
