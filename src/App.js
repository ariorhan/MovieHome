import './App.css';
import CustomRoutes from "./routes/CustomRoutes";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div >
     <BrowserRouter>
        <CustomRoutes />
      </BrowserRouter>
     
    </div>
  );
}

export default App;
