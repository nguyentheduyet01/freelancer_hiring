import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/'></Route>
      </Routes>
    </>
  );
}

export default App;
