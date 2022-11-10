import './App.scss';
import { Home, Verify, Signup } from './pages';
import {
  // BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Routes>
       <Route index path="/" element={<Home/>} />
        <Route exact path="/verify" element={<Verify />} />
        <Route exact path="/signup" element={<Signup />} />
       </Routes>
     
    </div>
  );
}

export default App;
