import PropTypes from 'prop-types';
import React from 'react';

Container.propTypes = {
  children: PropTypes.element
}

function Container(props){
  return(
    <section className="container-fluid">
      { props.children }
    </section>
  )
}

export default Container;