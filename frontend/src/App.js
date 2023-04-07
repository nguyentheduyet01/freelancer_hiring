import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Login from "./pages/login/Login";
function App() {
  return (
    <>
      <Header />
      <Login/>
      <Routes>
        <Route path='/'>

        </Route>
      </Routes>

    </>
  );
}

export default App;
