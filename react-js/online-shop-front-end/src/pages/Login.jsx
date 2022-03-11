import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(
      `https://6221aca0afd560ea69b68260.mockapi.io/api/v1/users?email=${email}`
    )
      .then((response) => response.json())
      .then((users) => setUsers(users))
  }, [email, password]);

  function handleLogin() {
    console.log({email, password});
    console.log(test);
  }

  return (
    <div className="outer">
      <div className="inner">
        <form>
          <h2 className="page-header">
            {users.map((user) => (
                <p key={user.id} > Login with {user.username}</p>
              ))}
          </h2>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-dark btn-lg btn-block"
            onClick={handleLogin}
          >
            Sign in
          </button>
          <p className="register text-right">
            <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
