import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header greeting="Hello" size={1} />

        <SecondHeader>
          Hello { /* props.children*/ }
        </SecondHeader>
      </div>
    );
  }
}

export default App;

function Header(props) {
  if(props.size === 1 ){
    return <h1> { props.greeting } </h1>;
  }
  return <h2> { props.greeting } </h2>;
}

/**
 * Props children is unique
 */
function SecondHeader(props){
  return <h1> { props.children } </h1>
}