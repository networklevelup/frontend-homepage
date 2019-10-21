import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import "./Video.css";

const MyVideoPlayer: React.FC = () => {
  return (
    <div className="container video">
      <Video
        controls={[
          "PlayPause",
          "Seek",
          "Time",
          "Volume",
          "Fullscreen",
          "Captions"
        ]}
        poster="./img/poster.jpg"
        // onCanPlayThrough={() => {
        //   // Do stuff
        // }}
      >
        <source src="/img/levelUP-Video.mp4" type="video/mp4" />
        <track
          label="Spanish"
          kind="subtitles"
          srcLang="es"
          src="/img/videoSubtitles_es.vtt"
          default
        />
        <track
          label="English"
          kind="subtitles"
          srcLang="en"
          src="/img/videoSubtitles_en.vtt"
          default
        />
        <track
          label="German"
          kind="subtitles"
          srcLang="ge"
          src="/img/videoSubtitles_ge.vtt"
          default
        />
      </Video>
    </div>
  );
};

export default MyVideoPlayer;
