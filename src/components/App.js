/* eslint-disable no-unused-vars */
import React from 'react';
import Playlists from './Playlists';
import InputField from './InputField';
import Container from './Container';
import Header from './Header';
import '../App.css';

class App extends React.Component {

  state = {
    playlists: [],
    searchTerm: ''
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

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  render(){ 
    return(
      <Container>
        <Header />
        <InputField handleChange={this.handleChange}
                    searchTerm={this.state.searchTerm}
        />
        <Playlists playlists={this.state.playlists}
                   searchTerm={this.state.searchTerm}
        />
      </Container>
    )
  }
}

export default App;