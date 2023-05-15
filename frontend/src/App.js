import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import FreelanceSearch from "./pages/Search/FreelanceSearch";
import Search from "./pages/Search/Search";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import PostDetail from "./pages/postDetail/PostDetail";
import PostProject from "./pages/postProject/PostProject";
import Profile from "./pages/profile/Profile";
import UpdateProfile from "./pages/profile/UpdateProfile";
import { getUserAction } from "./reducer/actions/userAction";
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useDispatch();
  const { account } = useSelector((state) => state.account);

  useEffect(() => {
    dispatch(getUserAction(account?.data?.id));
  }, [dispatch, account]);

  return (
    <div style={{ overflowX: "hidden" }}>
      <Header success={account?.isSuccess} />
      <Routes>
        <Route path='/' element={<Outlet />}>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='search' element={<Search />}>
            <Route path='passtime' />
            <Route path='fulltime' />
          </Route>
          <Route path='freelancer' element={<FreelanceSearch />} />
          <Route path='profile' element={<Profile />} />
          <Route path='profile/update' element={<UpdateProfile />}>
            <Route path='work_profile' />
            <Route path='capacity_profile' />
          </Route>
          <Route path='posts' element={<PostProject />} />
          <Route path='posts/:id' element={<PostDetail />} />
        </Route>
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
