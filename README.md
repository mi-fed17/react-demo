# react-demo

* Code from _7/5_ is on branch: **state-intro**
* Code from _8/5_ is on branch: **fetch-example**
* Code from _14/5_ is on branch: **LoginForm**

## Flowchart

![React Flowchart](react_flowchart.png)

> App knows about the state of LoginForm because we are sending the state with a function that belongs to App. LoginForm does not know about the state of App and do not care about it. LoginForm knows that it should be aware of displaying errors if the input is incorrect. If the input input is correct, LoginForm will call the function passed down from App with its own internal state.

> Header knows only about some of the state of App (the state that is passed down by us explicitly via `props`) but not the state of LoginForm. If we were to store the state 'loggedIn' inside of LoginForm it would be hard to pass it to Header. But now when the state 'loggedIn' is shared between the two components, this becomes easier. Information is not shared between siblings, only through the parent. The children knows about the information that the parent tells them but does not know about its siblings. The children can pass information to the parent if the parent allows it (via a function). The children can have information that the parent doesn't know about and the parent can have information that the children doesn't know anything about. The only way for communication is via `props`.

## TODO

* Create a Bootstrap login-form
* Hook up some state
* Display error message on failed login
* Send state up to `App`

_Bootstrap HTML Reference_
```html
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```
