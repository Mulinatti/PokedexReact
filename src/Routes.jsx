import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";

function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="pokemon/:id"/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
