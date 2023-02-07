
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import  Screen from "./components/screen";
import './App.css';

function App() {
  return (
   <div>

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Screen />}/>
        
        
    </Routes>
  </BrowserRouter>
   </div>
    
  );
}

export default App;
