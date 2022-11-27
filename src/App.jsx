import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeTemplateRoutes } from "./routes/HomeTemplateRoutes";

const HomeTemplate = lazy(() =>
  import("./templates/HomeTemplate/HomeTemplate")
);
const NotFound = lazy(() => import("./components/NotFound/NotFound"));
const LandingPage = lazy(() => import("./Pages/LandingPage/LandingPage"));
const Loading = lazy(() => import("./components/Loading/Loading"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={Loading}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route element={<HomeTemplate />}>
              {HomeTemplateRoutes.map((route, index) => {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={<route.Element />}
                  />
                );
              })}
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
