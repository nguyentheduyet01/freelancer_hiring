import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Routes>
        <Route path='/'></Route>
      </Routes>
    </div>
  );
}

export default App;
