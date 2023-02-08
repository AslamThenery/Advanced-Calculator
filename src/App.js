
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import  Screen from "./components/screen";
import Calculator from "./pages/Calculator";
import './App.css';
// import Calculator from "./pages/Calculator";

function App() {
  return (
   <div>

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Calculator />}/>
        
        
    </Routes>
  </BrowserRouter>
   </div>
    
  );
}

export default App;
