import {
  Routes,
  Route,
} from "react-router-dom";

import Layout from './layouts/layout';
import Dashboard from './layouts/dashboard';
import Home from "./pages/Home";
import News from "./pages/News";
import Movies from "./pages/Movies";
import Actors from "./pages/Actors";
import Person from "./pages/Person";
import Musics from "./pages/Musics";
import Music from "./pages/Music";
import Coba from "./pages/Coba";
import Login from "./pages/Login";
import Content from "./pages/Content";
import Podcasts from "./pages/Podcasts";
import Podcast from "./pages/Podcast";
import Empat04 from "./pages/Empat04";
import Checkout from "./pages/Checkout";
import Store from "./pages/Store";
import Detail from "./pages/Detail";
import Blog from "./pages/Blog";
import List from "./pages/List";
import Overview from "./pages/Overview";
import Rating from "./pages/Rating";
import Discuss from "./pages/Discuss";
import Cast from "./pages/CastsNCrew";

import Frontend from "./hoc/Frontend"
import Register from "./pages/Register";

import Profile from "./hoc/Profile"
import Setting from "./hoc/Setting";
import Movie from "./hoc/Movie";
import Celeb from "./hoc/Celeb";

import SettingProfile from "./pages/SettingProfile";
import SettingAccount from "./pages/SettingAccount";
import SettingNotification from "./pages/SettingNotification";
import SettingSharing from "./pages/SettingSharing";
import SettingSession from "./pages/SettingSession";
import SettingDelete from "./pages/SettingDelete";
import Watchlist from "./pages/Watchlist";

import MovieDiscussion from "./pages/MovieDiscussion";
import MovieDiscuss from "./pages/MovieDiscuss";
import MovieReview from "./pages/MovieReview";
import MovieOverview from "./pages/MovieOverview";
import MovieMedia from "./pages/MovieMedia";

import CelebMedia from "./pages/CelebMedia";
import CelebDiscussion from "./pages/CelebDiscussion";

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Frontend />} >
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="content" element={<Content />} />
          <Route path="movies" element={<Movies />} /> 
          <Route path="musics" element={<Musics />} /> 
          <Route path="music" element={<Music />} /> 
          
          <Route path="cast" element={<Cast />} /> 
          <Route path="actors" element={<Actors />} />
          <Route path="person" element={<Celeb />} >
            <Route index element={<Person />} />
            <Route path="discussion" element={<CelebDiscussion />} />
            <Route path="media" element={<CelebMedia />} />
          </Route>
          <Route path="musics" element={<Musics />} />
          <Route path="coba" element={<Coba />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} >
            <Route index element={<Overview />} />
            <Route path="discussion" element={<Discuss />} />
            <Route path="list" element={<List />} />
            <Route path="rating" element={<Rating />} />
            <Route path="watchlist" element={<Watchlist />} />
          </Route>
          <Route path="movie" element={<Movie />} >
            <Route index element={<MovieOverview />} />
            <Route path="cast" element={<Cast />} />
            <Route path="discussion" element={<MovieDiscussion />} />
            <Route path="discuss" element={<MovieDiscuss />} />
            <Route path="review" element={<MovieReview />} />
            <Route path="media" element={<MovieMedia />} />
          </Route> 
          <Route path="settings" element={<Setting />} >
            <Route index element={<SettingProfile />} />
            <Route path="account" element={<SettingAccount />} />
            <Route path="notification" element={<SettingNotification />} />
            <Route path="sharing" element={<SettingSharing />} />
            <Route path="session" element={<SettingSession />} />
            <Route path="delete-account" element={<SettingDelete />} />
          </Route>
          <Route path="podcasts" element={<Podcasts />} />
          <Route path="podcast" element={<Podcast />} />
          <Route path="store" element={<Store />} />
          <Route path="product" element={<Detail />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<Empat04 />} />
        </Route>
      </Routes>    
      
    </>
  );
}

export default App;
