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
    name: "Hello",
    counter : 0
  }

  // My own function needs to be in the form of an arrow function
  changeState = (newValue) => {
    console.log(newValue);
    /** 
     * Built in function, takes an object as argument,
     * state should always be changed via this.setState()
     */
    this.setState(
      { 
        // this.state.counter = this.state.counter + 1
        counter: this.state.counter + 1
      }
    );
  }

  // Reacts built in function, doesn't need to be an arrow function
  render() {
    // Render is called when state i changed
    console.log(this.state.counter);
    return (
      <div>
        <p>{ this.state.name }</p>
        <p>{ this.state.counter }</p>
        {
          /**
           * element.addEventListener('click', this.changeState)
           */
        }
        <button onClick={() => this.changeState("New Value")}>
          Click me!
        </button>
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



// element.addEventLister('click', changeState);

// element.addEventListener('click', () => {
//   changeState('Hello');
// })