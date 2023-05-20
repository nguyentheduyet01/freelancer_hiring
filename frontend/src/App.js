import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MetaData from "./components/metadata/MetaData";
import NotFound from "./pages/NotFound/NotFound";
import FreelanceSearch from "./pages/Search/FreelanceSearch";
import Search from "./pages/Search/Search";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import PostDetail from "./pages/postDetail/PostDetail";
import PostProject from "./pages/postProject/PostProject";
import Profile from "./pages/profile/Profile";
import Setting from "./pages/profile/Setting";
import UpdateProfile from "./pages/profile/UpdateProfile";
import { getUserAction } from "./reducer/actions/userAction";
import ListPost from "./pages/profile/ListPost";
import PrivateRoute from "./components/privateRoute/PrivateRoute";

function App() {
  const dispatch = useDispatch();
  const { account } = useSelector((state) => state.account);

  useEffect(() => {
    // if(account?.í)
    dispatch(getUserAction(account?.data?.id));
  }, [dispatch, account]);

  return (
    <div style={{ overflowX: "hidden" }}>
      {/* {
        pathName =
      } */}
      <MetaData title='Home' />
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
          <Route path='profile' element={<PrivateRoute component={<Profile />} />} />
          <Route path='profile/setting' element={<PrivateRoute component={<Setting />} />}>
            <Route path='password' />
          </Route>
          <Route path='profile/update' element={<PrivateRoute component={<UpdateProfile />} />}>
            <Route path='work_profile' />
            <Route path='capacity_profile' />
          </Route>
          <Route path='posts' element={<PostProject />} />
          <Route path='myposts' element={<PrivateRoute component={<ListPost />} />}>
            <Route path='apply' />
          </Route>
          <Route path='posts/:id' element={<PostDetail />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
