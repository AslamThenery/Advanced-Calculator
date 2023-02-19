
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Calculator from "./pages/Calculator";
import './App.css';


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
