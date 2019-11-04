import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import videoConnect from "react-html5video";
import "./Video.css";

const MyVideoPlayer: React.FC = () => {
  return (
    <div className="container video">
      <Video
        autoPlay
        controls={[
          "PlayPause",
          "Seek",
          "Time",
          "Volume",
          "Fullscreen",
          "Captions"
        ]}
        poster="./img/poster.jpg"
        onCanPlayThrough={() => {
          // Do stuff
        }}
      >
        <source src="/video/LevelUP-Video.mp4" type="video/mp4" />
        <track
          label="Spanish"
          kind="subtitles"
          srcLang="es"
          src="/video/videoSubtitles_es.vtt"
          default
        />
        <track
          label="English"
          kind="subtitles"
          srcLang="en"
          src="/video/videoSubtitles_en.vtt"
          default
        />
        <track
          label="German"
          kind="subtitles"
          srcLang="ge"
          src="/video/videoSubtitles_ge.vtt"
          default
        />
      </Video>
    </div>
  );
};

export default videoConnect(MyVideoPlayer);
