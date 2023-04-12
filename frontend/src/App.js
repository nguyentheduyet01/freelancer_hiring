import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <Routes>
        <Route path='/' element={<Outlet />}>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
