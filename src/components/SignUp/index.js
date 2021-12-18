import {Component} from 'react'
import Navbar from '../Navbar'

import './index.css'

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    showSubmitError: false,
    errorMsg: '',
  }

  validateForm = () => {
    const {name, email, password, confirmPassword, company} = this.state

    if (name === '') {
      this.setState({
        showSubmitError: true,
        errorMsg: 'Enter valid Name',
      })
    } else if (email === '') {
      this.setState({
        showSubmitError: true,
        errorMsg: 'Enter valid Email',
      })
    } else if (password !== confirmPassword) {
      this.setState({
        showSubmitError: true,
        errorMsg: 'Passwords do not match',
      })
    } else if (company === '') {
      this.setState({
        showSubmitError: true,
        errorMsg: 'Enter valid Company',
      })
    } else {
      this.setState({showSubmitError: false, errorMsg: ''})
    }
  }

  onClickSignUp = async event => {
    const {email, password} = this.state
    event.preventDefault()
    const data = {email, password}
    await this.validateForm()

    const {showSubmitError} = this.state
    if (!showSubmitError) {
      await localStorage.setItem('myData', JSON.stringify(data))
      this.setState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        company: '',
        showSubmitError: true,
        errorMsg: 'Registered successfully ',
      })
    }
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeConfirmPassword = event => {
    this.setState({confirmPassword: event.target.value})
  }

  onChangeCompany = event => {
    this.setState({company: event.target.value})
  }

  render() {
    const {
      name,
      email,
      password,
      confirmPassword,
      company,
      showSubmitError,
      errorMsg,
    } = this.state
    return (
      <>
        <Navbar />
        <div className="login-form-container">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <form
                onSubmit={this.onClickSignUp}
                autoComplete="off"
                className="container"
              >
                <h3>Sign Up</h3>
                <div className="form-group mb-3">
                  <label htmlFor="inlineFormInputGroupUsername2">name</label>
                  <div className="input-group mb-2 mr-sm-2">
                    <input
                      type="text"
                      className="form-control"
                      id="inlineFormInputGroupUsername2"
                      placeholder="name"
                      value={name}
                      onChange={this.onChangeName}
                    />
                  </div>
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="inlineFormInputGroupUserEmail">Email</label>
                  <div className="input-group mb-2 mr-sm-2">
                    <input
                      type="text"
                      className="form-control"
                      id="inlineFormInputGroupUserEmail"
                      placeholder="Email"
                      value={email}
                      onChange={this.onChangeEmail}
                    />
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="inlineFormInputPassword">Password</label>
                  <div className="input-group mb-2 mr-sm-2">
                    <input
                      type="password"
                      className="form-control"
                      id="inlineFormInputPassword"
                      placeholder="Password"
                      value={password}
                      onChange={this.onChangePassword}
                    />
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="inlineFormInputConfirmPassword">
                    Confirm Password
                  </label>
                  <div className="input-group mb-2 mr-sm-2">
                    <input
                      type="password"
                      className="form-control"
                      id="inlineFormInputConfirmPassword"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={this.onChangeConfirmPassword}
                    />
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="inlineFormInputCompany">Company</label>
                  <div className="input-group mb-2 mr-sm-2">
                    <input
                      type="text"
                      className="form-control"
                      id="inlineFormInputCompany"
                      placeholder="company"
                      value={company}
                      onChange={this.onChangeCompany}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary  w-100">
                  Create Your Free account
                </button>
                {showSubmitError && (
                  <p className="error-message">*{errorMsg}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default SignUp
