import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Login from "./pages/login/Login";
import Slider from "./components/slider/Slider";
function App() {
  return (
    <div>
      <Header />
      <Login />
      {/* <Slider /> */}
      <Routes>
        <Route path='/'></Route>
      </Routes>
    </div>
  );
}

export default App;
