import { Route, Routes, Outlet } from "react-router-dom";
import Main from "./shared/main/main";
import NavItems from "../page/NavItems";
import Navbar from "./shared/navbar/navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/navItems" element={<NavItems />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
