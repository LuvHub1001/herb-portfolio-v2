import { Suspense } from "react";
import { Loading, ErrorBoundary } from "./components";

import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}></Suspense>
    </ErrorBoundary>
  );
}

export default App;
