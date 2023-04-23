import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Footer from "./components/footer/Footer";
import PostProject from "./pages/postProject/PostProject";
import PostDetail from "./pages/postDetail/PostDetail";
import Search from "./pages/Search/Search";
import "./App.css";
function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <Routes>
        <Route path='/' element={<Outlet />}>
          <Route path='/' element={<Home />} />
          <Route path='search' element={<Search />}>
            <Route path='passtime' />
            <Route path='fulltime' />
          </Route>
          <Route path='posts' element={<PostProject />} />
          <Route path='posts/:id' element={<PostDetail />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
