/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    playlists: []
  }

  componentDidMount(){
    /** 
     * When Component is "ready", call the function 
     * that will fetch the data and store it in state
     */
    this.fetchPlaylists();
  }

  fetchPlaylists = () => {
    fetch('https://folksa.ga/api/playlists?key=flat_eric')
      .then(response => response.json())
      .then((playlists) => {
        /** Key is this.state.playlist
         *  value is array fetched from API
         *  App.state.playlists = playlists
         *  if key and value variable have the same name -> combine
         *  We do not need to output to HTML here, React will do it for us
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
        <div key={playlist._id}> { /* key is always needed */}
          <p> {playlist.title} </p>
          <p> {playlist.genres.join(', ')} </p> { /* .join() will create a string out of the array */}
        </div>
      );
    });
  }

  render(){ 
    return(
      <section>
        { /* this.renderPlaylists will return an array
           * of <div> tags, React will know how to render this */ }
        { this.renderPlaylists() }
      </section>
    )
  }
}

export default App;