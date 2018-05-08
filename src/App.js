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

  render(){
    const list = this.state.playlists.map((playlist) => {
      return(
        <div key={playlist.id}> 
          <p> { playlist.title } </p> 
          <p> { playlist.genres.join(', ') } </p>
        </div>
      );
    });
    return(
      <div>
        { list }
      </div>
    )
  }
}

export default App;