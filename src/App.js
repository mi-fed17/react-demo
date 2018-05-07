/* eslint-disable no-unused-vars */
import React from 'react';
import Button from './Button';

class App extends React.Component {

  // ES7 syntax to create the state variable
  state = {
    name: "Hello",
    counter : 0,
    inputValue: '',
    cats: [
      {
        name: "misse",
        id: 5,
      },
      {
        name: "Okej",
        id: 44,
      }
    ]
  }

  // My own function needs to be in the form of an arrow function
  changeState = (event) => {
    console.log(this.state.inputValue);
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

  // Every event listener knows about its own event
  changeInput = (event) => {
    /* event.target === <input type="text" /> */
    console.log(event.target.value);
    /* This will change a slice of the state, grab
     * the value of the target and put it in this.state.inputValue */
    this.setState({ inputValue: event.target.value })

  }

  logCat = (id) => {
    console.log(id);
  }

  // Reacts built in function, doesn't need to be an arrow function
  render() {
    // Render is called when state is changed
    let listOfCats = [];

    for(const cat of this.state.cats){
      listOfCats.push(
        <li key={cat.id} onClick={() => this.logCat(cat.id)}> 
          {cat.name}
        </li>
      );  
    }

    return (
      <div>
        <ul>
          { listOfCats }
        </ul>
        {
          /**
           * element.addEventListener('click', this.changeState)
           */
        }
        <button onClick={this.changeState}>
          Click me!
        </button>
        { 
          /* The value of the input will be stored in state,
           * the value of the input field must be updated
           * from the state 
           */
        }
        <input 
          value={this.state.inputValue}
          type="text"
          onChange={this.changeInput} />

        { /* State is being passed down as props */}
        <Header greeting={this.state.inputValue} />

        <Button primary onClick={this.changeState} />
        <Button secondary />
        <Button />

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
 * Props children is unique, it is the value of 
 * whatever is inside of the tag:
 * <SecondHeader> these are the children </SecondHeader>
 */
function SecondHeader(props){ 
  return <h1> { props.children } </h1>
}
