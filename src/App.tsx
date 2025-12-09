import { Route, Routes } from "react-router-dom";
import Main from "./components/shared/main/main";
import Navbar from "./components/shared/navbar/navbar";
import NavItems from "./page/NavItems";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/navItems" element={<NavItems />} />
      </Routes>
    </div>
  );
}

export default App;
