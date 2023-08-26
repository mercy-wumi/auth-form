import { auth } from '../firsbase';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = () => {
    let isValid = true;
    if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)){
      isValid = false;
        setError("Invalid email address");
    }
    return isValid;
  };

  const LoginUser = (e) => {
    e.preventDefault();
    setError("");
    if (validatePassword()) {
      // Create a new user with email and password using firebase
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res.user);
          navigate("/home");
        })
        .catch((err) => setError(err.message));
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div>
      <p>Login</p>
      {error && <div className='auth__error'>{error}</div>}
      <form onSubmit={LoginUser} name="registration_form">
        <div>
          <label>Email Address</label>
          <input
            type="text"
            placeholder="Mercy"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
