import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { withCommonLayout } from "../hoc";

const MainPage = lazy(() => import("../pages/MainPage"));
const WrappedMainPage = withCommonLayout(MainPage);

const PortfolioPage = lazy(() => import("../pages/PortfolioPage"));
const WrappedPortfolioPage = withCommonLayout(PortfolioPage);

function PublicRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WrappedMainPage />} />
        <Route path="/portfolio" element={<WrappedPortfolioPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PublicRouter;
