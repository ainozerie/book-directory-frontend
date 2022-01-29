import './App.css';
import Home from './Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Search from './Search';
import Add from './Add'
import Results from './Results'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='search' element={<Search/>} />
        <Route path='results' element={<Results/>} />
        <Route path='add' element={<Add/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
