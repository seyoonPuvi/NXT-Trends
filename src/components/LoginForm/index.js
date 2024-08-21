// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: ''}

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onFailureSubmit = result => {
    this.setState({errorMsg: result.error_msg})
  }

  onSuccessSubmit = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, option)
    const result = await response.json()

    if (response.ok === true) {
      this.onSuccessSubmit()
    } else {
      this.onFailureSubmit(result)
    }
  }

  render() {
    const {username, password, errorMsg} = this.state
    const text = errorMsg !== '' ? `*${errorMsg}` : ''

    return (
      <div className="login-form-app-cont">
        <div className="login-form-main-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-img"
          />

          <div className="login-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="nxtwave-logo"
            />

            <form className="input-cont" onSubmit={this.onSubmit}>
              <div className="username-cont">
                <label className="userInput-label" htmlFor="username">
                  USERNAME
                </label>
                <input
                  type="text"
                  id="username"
                  className="userInput"
                  placeholder="Username"
                  value={username}
                  onChange={this.onChangeUserName}
                />
              </div>

              <div className="username-cont">
                <label className="userInput-label" htmlFor="password">
                  PASSWORD
                </label>
                <input
                  type="password"
                  id="password"
                  className="userInput"
                  placeholder="password"
                  value={password}
                  onChange={this.onChangePassword}
                />
              </div>
              <p className="error-msg">{text}</p>
              <button type="submit" className="login-btn">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
