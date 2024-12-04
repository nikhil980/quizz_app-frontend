import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import { Quiz } from './pages/Quiz';
import { Result } from './pages/Result';


function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth/login" element={<Login/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/result" element={<Result/>}/>
      </Routes>
    </div>
  );
}

export default App;
