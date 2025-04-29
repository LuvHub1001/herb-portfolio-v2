import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { withCommonLayout } from "../hoc";
import { ScrollToTop } from "../components";

const MainPage = lazy(() => import("../pages/MainPage"));
const WrappedMainPage = withCommonLayout(MainPage);

const PortfolioPage = lazy(() => import("../pages/PortfolioPage"));
const WrappedPortfolioPage = withCommonLayout(PortfolioPage);

const PortfolioDetailPage = lazy(() => import("../pages/PortfolioDetailPage"));
const WrappedPortfolioDetailPage = withCommonLayout(PortfolioDetailPage);

function PublicRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<WrappedMainPage />} />
        <Route path="/portfolio" element={<WrappedPortfolioPage />} />
        <Route
          path="/portfolio/:title"
          element={<WrappedPortfolioDetailPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default PublicRouter;
