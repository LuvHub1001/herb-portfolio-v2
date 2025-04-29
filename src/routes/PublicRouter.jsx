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

const ResumePage = lazy(() => import("../pages/ResumePage"));
const WrappedResumePage = withCommonLayout(ResumePage);

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
        <Route path="/resume" element={<WrappedResumePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PublicRouter;
