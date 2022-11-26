import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";

const Home = lazy(() => import("./Pages/Home/Home"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));
const LandingPage = lazy(() => import("./Pages/LandingPage/LandingPage"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={LandingPage} exact />
          <HomeTemplate path="/home" element={Home} exact />
          <Route path="*" element={NotFound} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
