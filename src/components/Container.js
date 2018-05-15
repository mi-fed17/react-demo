import PropTypes from 'prop-types';
import React from 'react';

function Container(props){
  return(
    <section className="container-fluid">
      { props.children }
    </section>
  )
}

Container.propTypes = {
  children: PropTypes.array
}

export default Container;