import React from "react";
import Track from "../track/track.component";

import "./track-list.styles.css";

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map((track) => {
          return <Track track={track} key={track.id} />;
        })}
      </div>
    );
  }
}

export default TrackList;
