import Home from "./Home";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./Main.js";
function App() {
  return (
    <div className="App">
      <Main />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Footer" element={<Footer />} />
        <Route
          exact
          path="/Header"
          element={<Header Comp={{ Home, Footer }} />}
        />
        <Route path="/home/Nav" element={<Nav Home={Home} />} />
      </Routes>
    </div>
  );
}

export default App;
