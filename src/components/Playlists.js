import PropTypes from 'prop-types';
import React from 'react';

function Playlists(props){
  return props.playlists.map((playlist) => {
    if (playlist.title.includes(props.searchTerm)) {
      return (
        <div key={playlist._id}> { /* key is always needed */}
          <p> {playlist.title} </p>
          <p> {playlist.genres.join(', ')} </p> { /* .join() will create a string out of the array */}
        </div>
      );
    }
    return null;
  });
}

Playlists.propTypes = {
  playlists: PropTypes.array,
  searchTerm: PropTypes.string
}

export default Playlists;