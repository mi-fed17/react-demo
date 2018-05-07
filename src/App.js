import React from 'react';

class App extends React.Component {

  // This is the same as below, this will also create a state variable
  // constructor(){
  //   super();
  //   this.state = {
  //     name: "Steffe"
  //   }
  // }

  // ES7 syntax to create the state variable
  state = {
    name: "Hello"
  }

  // My own function needs to be in the form of an arrow function
  changeState = () => {
    /** 
     * Built in function, takes an object as argument,
     * state should always be changed via this.setState()
     */
    this.setState({ name: "Steffe" });
  }

  // Reacts built in function, doesn't need to be an arrow function
  render() {
    return (
      <div>
        <SecondHeader>
          { /* Referencing the state variable, printing whatever value that is stored */ }
          { this.state.name } { /* props.children*/ }
        </SecondHeader>
      </div>
    );
  }
}

export default App;

// function Header(props) {
//   if(props.size === 1 ){
//     return <h1> { props.greeting } </h1>;
//   }
//   return <h2> { props.greeting } </h2>;
// }

/**
 * Props children is unique
 */
function SecondHeader(props){
  return <h1> { props.children } </h1>
}