import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Maker from "./components/maker/maker";

function App({authService}) {
  return (
    <div className="wrap">
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={<Login authService={authService} />} 
          />
          <Route 
            path="/maker"
            element={<Maker authService={authService} />} 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
