import { Suspense } from "react";
import PublicRouter from "./routes/PublicRouter";
import { Loading, ErrorBoundary } from "./components";

import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <PublicRouter />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
