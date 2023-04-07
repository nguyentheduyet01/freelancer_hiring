import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/'></Route>
      </Routes>
    </div>
  );
}

export default App;
