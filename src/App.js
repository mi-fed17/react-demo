import React from 'react';

class App extends React.Component {

  // This is the same
  // constructor(){
  //   super();
  //   this.state = {
  //     name: "Steffe"
  //   }
  // }

  // ES7
  state = {
    name: "Hello"
  }

  // My own function
  changeState = () => {
    // Built in function, takes an object as argument
    this.setState({ name: "Steffe" });
  }

  // Reacts function
  render() {
    return (
      <div>
        <SecondHeader>
          { this.state.name } { /* props.children*/ }
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