import { Routes, Route} from "react-router-dom"
import './App.css';
import Homepage from "./Homepage"
import Singlepage from "./Singlepage"
import Errorpage from "./Errorpage";
import FavouriteFilms from "./FavouriteFilms";


function App() {
  return (
    <div className="App">
  
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="movie/:id" element={<Singlepage/>}/>
        <Route path="/favourites" element={<FavouriteFilms/>}/>
        <Route path="*" element={<Errorpage/>}/>
      </Routes>

    </div>
  );
}

export default App;
