import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="outer">
      <div className="inner">
        <form>
          <h3>Register</h3>

          <div className="form-group">
            <label>User name</label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Register
          </button>
          <p className="forgot-password text-right">
            Already registered <Link to="./login">log in?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
