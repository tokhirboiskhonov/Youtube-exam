import React from "react";
import Navbar from '../Page/Navbar/Navbar';
import Header from '../Page/Header/Header';
import VideoMedium from '../Page/VideoMedium/VideoMedium'

function VideoPlayer() {
    return(
        <>
        <Navbar/>

        <div>
            <Header/>
            <VideoMedium/>
        </div>
        </>
    )
}

export default VideoPlayer;