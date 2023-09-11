import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/bootstrap.css";
import "./assets/css/style.css";
import "./assets/css/newcss.css";
import "./assets/css/stylenew.css";
import "./assets/css/mynewstyle.css";
import "./assets/css/tooltip.css";
import "./assets/css/mystyle.css";
import "./assets/css/color-switcher-design.css";

import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </div>
  );
}

export default App;
