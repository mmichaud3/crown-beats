import React from "react";
import TrackList from "../track-list/track-list.component";

import "./play-list.styles.css";

class PlayList extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"NewPlaylist"} />
        {/* <TrackList /> */}
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default PlayList;
