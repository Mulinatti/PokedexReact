import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import PokemonPage from "./components/PokemonPage/PokemonPage";

function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="pokemon/:id" element={<PokemonPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
