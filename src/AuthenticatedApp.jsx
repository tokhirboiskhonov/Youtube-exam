import React from "react";
import Home from '././Components/Home/Home';
import {Routes, Route} from 'react-router-dom'
import Trending from "./Components/Page/Trending/Trending";
import Subscriptions from "./Components/Page/Subscriptions/Subscriptions";
import Library from "./Components/Page/Library/Library";
import History from "./Components/Page/History/History";
import WatchLater from "./Components/Page/WatchLater/WatchLater";
import Favourites from "./Components/Page/Favourites/Favourites";
import LikedVideos from "./Components/Page/LikedVideos/LikedVideos";
import Music from "./Components/Page/Music/Music";
import Games from "./Components/Page/Games/Games";
import Channels from "./Components/Channels/Channels";
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

function AuthenticatedApp() {
    return <>
    <div className="container">

    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/trending" element={<Trending/>}/>
    <Route path="/subscriptions" element={<Subscriptions/>}/>
    <Route path="/library" element={<Library/>}/>
    <Route path="/history" element={<History/>}/>
    <Route path="/watchlater" element={<WatchLater/>}/>
    <Route path="/favourites" element={<Favourites/>}/>
    <Route path="/likedvideos" element={<LikedVideos/>}/>
    <Route path="/music" element={<Music/>}/>
    <Route path="/games" element={<Games/>}/>
    <Route path="/channel" element={<Channels/>}/>
    <Route path="/videoplayer" element={<VideoPlayer/>}/>
    </Routes>

    </div>
    </>
}
export default AuthenticatedApp;