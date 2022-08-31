import React from "react";
import "./Login.css";
class Login extends React.Component {
  
  constructor(props) {
    super(props);
    const container = document.getElementById("container");;
  }
  toggle = () => {
    this.container.classList.toggle("sign-in");
    this.container.classList.toggle("sign-up");
  };
componentDidMount(){
  this.container = document.getElementById("container");
  setTimeout(() => {
    this.container.classList.toggle("sign-in");
  }, 200);
}
render(){
  return (
    <div id="container" className="container">
      <div className="row1">
        <div className="col align-items-center flex-col sign-up">
          <div className="form-wrapper align-items-center">
            <div className="form sign-up">
              <div className="input-group">
                <i className="bx bxs-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-group">
                <i className="bx bx-mail-send"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-group">
                <i className="bx bxs-lock-alt"></i>
                <input type="password" placeholder="Password" />
              </div>
              <div className="input-group">
                <i className="bx bxs-lock-alt"></i>
                <input type="password" placeholder="Confirm password" />
              </div>
              <button>Sign up</button>
              <p>
                <span>Already have an account?</span>
                <b onClick={this.toggle} className="pointer">
                  Sign in here
                </b>
              </p>
            </div>
          </div>
        </div>
        <div className="col align-items-center flex-col sign-in">
          <div className="form-wrapper align-items-center">
            <div className="form sign-in">
              <div className="input-group">
                <i className="bx bxs-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-group">
                <i className="bx bxs-lock-alt"></i>
                <input type="password" placeholder="Password" />
              </div>
              <button>Sign in</button>
              <p>
                <b>Forgot password?</b>
              </p>
              <p>
                <span>Don't have an account?</span>
                <b onClick={this.toggle} className="pointer">
                  Sign up here
                </b>
              </p>
            </div>
          </div>
          <div className="form-wrapper"></div>
        </div>
      </div>
      <div className="row1 content-row">
        <div className="col align-items-center flex-col">
          <div className="text sign-in">
            <h2>Welcome</h2>
          </div>
          <div className="img sign-in"></div>
        </div>
        <div className="col align-items-center flex-col">
          <div className="img sign-up"></div>
          <div className="text sign-up">
            <h2>Join with us</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
 
}

export default Login;
