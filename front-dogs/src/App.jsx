import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import Home from './components/Home'
import Landing from './components/Landing';
import CreateDog from './components/CreateDog'
import Nav from './components/Nav';
import Detail from './components/Detail';

function App() {
  const location = useLocation()
   const isLogin = location.pathname === '/'

  return (<>
  {!isLogin && <Nav />}
    <Routes>
      <Route path='/' element={<Landing />} ></Route>
      <Route path='/home' element={<Home />} />
      <Route path='/addDog' element={<CreateDog />} />
      <Route path='/detail/:id' element={<Detail />} />
    </Routes>
  </>
  );
}

export default App;
