/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    playlists: [
      {
        title: "Super hip playlist",
        id: "567432sdf43woihhfiugsgiuraui",
        genres: ["Hip", "Hop"]
      },
      {
        title: "Chill and coffee",
        id: "45ubsff0348374afhauirg4",
        genres: ["Whatever", "Another Genre"]
      }
    ]
  }

  /**
   * This function will return an array of <div>-elements
   */
  renderPlaylists = () => {
    return this.state.playlists.map((playlist) => {
      return (
        <div key={playlist.id}>
          <p> {playlist.title} </p>
          <p> {playlist.genres.join(', ')} </p>
        </div>
      );
    });
  }

  render(){ 
    return(
      <div>
        { this.renderPlaylists() }
      </div>
    )
  }
}

export default App;