import { Route, Router, Routes } from "react-router-dom";
import Overview from "./Overview";
import Edit from "./Edit";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ Overview }></Route>
        <Route exact path="/edit" element={ Edit }></Route>
      </Routes>
    </Router>
  );
}

export default App;
