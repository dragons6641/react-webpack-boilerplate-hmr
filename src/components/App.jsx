import { hot } from "react-hot-loader/root";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import importedComponent from "react-imported-component";

import Home from "./Home";
import Loading from "./Loading";

const AsyncDynamicPage = importedComponent(() => import("./DynamicPage"), {
  LoadingComponent: Loading,
});
const AsyncNoMatch = importedComponent(() => import("./NoMatch"), {
  LoadingComponent: Loading,
});

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dynamic" element={<AsyncDynamicPage />} />
          <Route element={<AsyncNoMatch />} />
        </Routes>
      </div>
    </Router>
  );
};

export default hot(App);
