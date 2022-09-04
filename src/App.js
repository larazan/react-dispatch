import {
  Routes,
  Route,
} from "react-router-dom";

import Layout from './layouts/layout';
import Dashboard from './layouts/dashboard';
import Home from "./pages/Home";
import News from "./pages/News";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
import Actors from "./pages/Actors";
import Person from "./pages/Person";
import Musics from "./pages/Musics";
import Coba from "./pages/Coba";
import Login from "./pages/Login";
import Content from "./pages/Content";

function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="content" element={<Content />} />
        <Route path="movies" element={<Movies />} /> 
        <Route path="musics" element={<Musics />} /> 
        <Route path="movie" element={<Movie />} /> 
        <Route path="actors" element={<Actors />} />
        <Route path="person" element={<Person />} />
        <Route path="musics" element={<Musics />} />
        <Route path="coba" element={<Coba />} />
        <Route path="login" element={<Login />} />
      </Routes>    
      </Layout> 
    </>
  );
}

export default App;
