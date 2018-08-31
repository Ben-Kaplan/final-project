import React, { Component } from 'react'

class UsernameForm extends Component {
 constructor(props) {
   super(props)
   this.state = {
     username: '',
   }

 }

 onSubmit = (e) => {
   e.preventDefault()
   this.props.onSubmit(this.state.username)
 }

 onChange = (e) => {
    this.setState({ username: e.target.value })
  }

  render() {
    return (
      <div>
        <div>
          <h1>Talk A Lot</h1>
          <h2>Login</h2>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="Enter Your Username"
              onChange={this.onChange}
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

 export default UsernameForm