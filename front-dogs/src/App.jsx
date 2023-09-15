import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Landing from './components/Landing';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} ></Route>
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}

export default App;
