import { BrowserRouter as Router } from "react-router-dom";
import { AnimatedRoutes } from "./pages/AnimatedRoutes";

import styles from "./App.module.scss";

export function App() {
  return (
    <div className={styles.container}>
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  );
}
