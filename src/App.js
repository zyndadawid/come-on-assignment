import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Games from "./routes/games/games.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} >
        <Route index element={<Authentication />} />
        <Route path="/games" element={<Games />} />
      </Route>
    </Routes>


  );
}

export default App;
