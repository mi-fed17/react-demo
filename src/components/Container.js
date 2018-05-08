import React from 'react';

function Container(props){
  return(
    <section className="container-fluid">
      { props.children }
    </section>
  )
}

export default Container;