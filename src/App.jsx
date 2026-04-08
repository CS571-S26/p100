import { HashRouter } from "react-router-dom";

import NavigationBar from "./navigation/NavigationBar";
import Router from "./navigation/Router";

function App() {
  return (
    <HashRouter>
      <NavigationBar></NavigationBar>
      <Router></Router>
    </HashRouter>
  );
}

export default App;
