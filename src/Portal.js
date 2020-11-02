import React from 'react'
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap'
import { AuthenInput } from './components/AuthenInput'
import getAllUrlParams from './utils/urlparams'
import styled from 'styled-components';

const Styles = styled.div`

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
  text-align: center !important;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="text"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
`;

var params = document.getElementById('params');
var results = document.getElementById('results');

// document.querySelector('input').addEventListener('keyup', function() {
//   params.innerText = this.value;
//   results.innerText = JSON.stringify(getAllUrlParams("http://test.com/?" + this.value), null, 2);
// });


export class Portal extends React.Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
      console.log(e.target.value);
      this.setState({username: e.target.value})
  }
  static propTypes = {
    // loginError: PropTypes.shape({
    //   inputError: PropTypes.string,
    //   inputErrorMessage: PropTypes.string,
    // }),
    loginInputError: PropTypes.string,
    loginInputErrorMessage: PropTypes.string,
    usernameInput: PropTypes.string,
    passwordInput: PropTypes.string,
    setLoginInputError: PropTypes.func.isRequired,
    clearLoginInputError: PropTypes.func.isRequired,
    loginUsernameInputChange: PropTypes.func.isRequired,
    loginPasswordInputChange: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.doLogin = this.doLogin.bind(this);
    this.handleForgetPassword = this.handleForgetPassword.bind(this);
  }

  componentDidMount() {
    // TODO check localStorage for jwt token
    // console.log('**Component Did Mount**');
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    switch (name) {
      case 'username' : this.props.loginUsernameInputChange(value);
      break;
      case 'password' : this.props.loginPasswordInputChange(value);
      break;
      default:
    }
    console.log(this.props.usernameInput);
  }

  handleForgetPassword(event) {
    this.props.history.push('/password');
  }

  doLogin(event) {
    event.preventDefault(); // Don't refresh onSubmit action
    // Clear Error
    this.props.clearLoginInputError();
    // TODO add loading animate button
    const details = {
      username: this.props.usernameInput,
      password: this.props.passwordInput,
    };
    fetch(userAPI, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        authorization: `Bearer ${token}`,
      },
      body: formBody(details),
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            if (!data.ok) { // New Error
              this.props.setLoginInputError({
                inputError: data.component.name,
                inputErrorMessage: data.component.message,
              });
            }
            if (data.ok) {
              localStorage.setItem('token', data.token);
              document.authForm.submit(); // Submit form
            }
          });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return(
      <Styles>
        <Form className="form-signin" >
      {/* <img class="mb-4" src="/static/assets/kkh-logo.png" alt="" width="100%" height="100%" /> */}
        <h1 class="h3 mb-3 font-weight-normal">Please sign in{this.props.usernameInput},{this.props.passwordInput}</h1>
          <label for="username" class="sr-only">Username</label>
          <AuthenInput className="form-control" placeholder="Username" type="text" id="username" onChange={this.handleChange}/>
          <label for="password" class="sr-only">Password</label>
          <AuthenInput className="form-control" placeholder="Password" type="password" id="password" onChange={this.handleInputChange} />
          <Button className="btn btn-lg btn-primary btn-block" type="submit">
            Login
          </Button>
        <label >{this.state.username}</label>
        </Form>
      </Styles>
    )
  }
}
