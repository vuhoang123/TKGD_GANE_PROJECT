import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";

const Home = lazy(() => import("./Pages/Home/Home"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));
const LandingPage = lazy(() => import("./Pages/LandingPage/LandingPage"));
const Loading = lazy(() => import("./components/Loading/Loading"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={Loading}>
          <Routes>
            <Route path="/" element={LandingPage} exact />
            <HomeTemplate path="/home" element={Home} />
            <Route path="*" element={NotFound} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
