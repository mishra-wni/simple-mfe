import React from "react";
import "./App.css";

const Remote1_A = React.lazy(() => import("Remote1/ComponentA"));

function App() {
  return (
    <div>
      <h1>Host</h1>
      <div className="remote-container">
        <React.Suspense fallback="Loading Remote 1">
          <Remote1_A />
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
