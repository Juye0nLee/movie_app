import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Movie from "./Pages/Movie";
import  TV from "./Pages/TV";
import Celebirity from "./Pages/Celebirity";
import Header from "./Components/Header";
import MovieDetail from "./Pages/MovieDetail";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";

function App() {
  return (
    <div>
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movie" element={<Movie/>} />
          <Route path='/movie/:title' element={<MovieDetail/>}/>
          <Route path="/tv" element={<TV/>} />
          <Route path="/celebirity" element={<Celebirity/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;