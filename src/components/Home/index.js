import {Component} from 'react'

import {withRouter, Redirect} from 'react-router-dom'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: true}

  onClickLogout = () => {
    const {history} = this.props

    const loginStage = {isLoggedIn: false}
    localStorage.setItem('loginState', JSON.stringify(loginStage))

    history.replace('/login')
  }

  renderLoginPage = () => <Redirect to="/login" />

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="home-container">
        <h1>Welcome User....!!!</h1>
        {isLoggedIn ? (
          <div>
            <ul className="navbar-nav ms-auto ">
              <li
                className="nav-item nav-link logout"
                onClick={this.onClickLogout}
              >
                Logout
              </li>
            </ul>
          </div>
        ) : (
          this.renderLoginPage()
        )}
      </div>
    )
  }
}

export default withRouter(Home)
