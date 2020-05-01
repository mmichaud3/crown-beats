import React from "react";
import TrackList from "../track-list/track-list.component";

import "./search-results.styles.css";

class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResults} />
      </div>
    );
  }
}

export default SearchResults;
