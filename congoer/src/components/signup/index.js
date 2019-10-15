import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

function SignUp() {
  return (
    <div className="signup-form">
      <form action="/examples/actions/confirmation.php" method="post">
        <h2>Con-Goers</h2>
        <p class="hint-text">
          Network yourself and make friends along the way!
        </p>
        <h3>Sign Up</h3>

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
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            required="required"
          />
        </div>
        <div className="form-group">
          <input type="checkbox" required="required"></input>
          <label className="checkbox-inline">
            I accept the terms of agreement.
          </label>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-success btn-lg btn-block">
            Sign Up Now
          </button>
        </div>
      </form>
      <div class="text-center">
        Already have an account? <Link to="/signin">Sign in</Link>
      </div>
    </div>
  );
}

export default SignUp;
