import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Outlet />}>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
