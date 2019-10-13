import React from "react";
import "./style.css";

function SignIn() {
  return (
    <div className="signup-form">
      <form action="/examples/actions/confirmation.php" method="post">
        <h2>Con-Goers</h2>
        <p className="hint-text">
          Network yourself and make friends along the way!
        </p>
        <h3>Sign In</h3>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            name="username"
            placeholder="Username"
            required="required"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            name="password"
            placeholder="Password"
            required="required"
          />
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-success btn-lg btn-block">
            Sign in
          </button>
        </div>
      </form>
      <div class="text-center">
        Don't have an account? <a href="/signup">Sign Up Now!</a>
      </div>
    </div>
  );
}

export default SignIn;
