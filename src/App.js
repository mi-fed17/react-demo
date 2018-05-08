/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    playlists: []
  }

  componentDidMount(){
    this.fetchPlaylists();
  }

  fetchPlaylists = () => {
    fetch('https://folksa.ga/api/playlists?key=flat_eric')
      .then(response => response.json())
      .then((playlists) => {
        /** Key is this.state.playlist
         *  value is array fetched from API
         *  Model.state.playlists = playlists
         *  if key and value have the same name -> combine
         */
        this.setState({ playlists });
      })
  }

  /**
   * This function will return an array of <div>-elements
   */
  renderPlaylists = () => {
    return this.state.playlists.map((playlist) => {
      return (
        <div key={playlist._id}>
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