import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Search from "./pages/Search/Search";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import PostDetail from "./pages/postDetail/PostDetail";
import PostProject from "./pages/postProject/PostProject";
import { getUserAction } from "./reducer/actions/userAction";

function App() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.account);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserAction(data?.data?.id));
  }, [dispatch, data]);

  return (
    <div style={{ overflowX: "hidden" }}>
      <Header user={user} success={data?.isSuccess} />
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
