import { BrowserRouter as Router } from "react-router-dom";

import { AnimatedRoutes } from "./pages/AnimatedRoutes";

import "./App.scss";

export function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}
