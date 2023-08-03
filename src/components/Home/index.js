// Write your code here
import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLoggedIn: false}

  onClicking = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === false) {
      this.setState(() => ({isLoggedIn: true}))
    } else {
      this.setState(() => ({isLoggedIn: false}))
    }
  }

  render() {
    const {isLoggedIn} = this.state
    let authContent
    if (isLoggedIn === false) {
      authContent = (
        <div className="card-container">
          <Message message="Please Login" />
          <Login name="Login" onClick={this.onClicking} />
        </div>
      )
    } else {
      authContent = (
        <div className="card-container">
          <Message message="Welcome User" />
          <Logout name="Logout" onClick={this.onClicking} />
        </div>
      )
    }
    return <div className="home-container">{authContent}</div>
  }
}

export default Home
