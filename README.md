# react-demo

* Code from _7/5_ is on branch: **state-intro**
* Code from _8/5_ is on branch: **fetch-example**
* Code from _14/5_ is on branch: **LoginForm**

## Flowchart

![React Flowchart](react_flowchart.png)

> App knows about the state of LoginForm because we are sending the state with a function that belongs to App. LoginForm does not know about the state of App and do not care about it. LoginForm knows that it should be aware of displaying errors if the input is incorrect. If the input input is correct, LoginForm will call the function passed down from App with its own internal state.

> Header knows only about some of the state of App (the state that is passed down by us explicitly via `props`) but not the state of LoginForm. If we were to store the state 'loggedIn' inside of LoginForm it would be hard to pass it to Header. But now when the state 'loggedIn' is shared between the two components, this becomes easier. Information is not shared between siblings, only through the parent. The children knows about the information that the parent tells them but does not know about its siblings. The children can pass information to the parent if the parent allows it (via a function). The children can have information that the parent doesn't know about and the parent can have information that the children doesn't know anything about. The only way for communication is via `props`.

## TODO

* Divide Bootstrap-form
* Create separate views based on state
* Add prop-types

