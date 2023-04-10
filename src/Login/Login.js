import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import app from "../firebase/firebase.init";
const auth = getAuth(app);
const Login = () => {
  const [Success, setSuccess] = useState(false);
  const [userEmail,setUserEmail] = useState('');

  const HandleLoginFrom = (event) => {
    event.preventDefault();
    setSuccess(false);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };
const handleEmailBlur = event =>{
  const email = event.target.value;
  setUserEmail(email)
  console.log(email)

}
  const handleForgetPassword =() =>{
    if(! userEmail){
      alert('please enter your email address !!')
      return;
    }
    sendPasswordResetEmail(auth,userEmail)
    .then(()=>{
      alert('password reset email send. Please check your email !!')
    })
    .catch(error =>{
      console.error(error)
    })
  }
  return (
    <div className="w-50 mx-auto">
      <h3>Please Login !!!</h3>
      <form onSubmit={HandleLoginFrom}>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Example label
          </label>
          <input onBlur={handleEmailBlur}
            type="email"
            name="email"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter your Email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Another label
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter Your Password"
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
    
  {Success && <p className="text-primary fw-light">Successfully Login !! </p>}
      <p>
        <small>
          New To This Website? Please <Link to="/register">Register</Link>
        </small>
      </p>
    <small>
    <p>Forget Password? <button type="button" onClick={handleForgetPassword} className="btn btn-link"> Reset password</button></p>
    </small>
    </div>
  );
};

export default Login;
