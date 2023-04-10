import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth'
import app from "../firebase/firebase.init";
import { useState } from "react";
import { Link } from "react-router-dom";
const auth = getAuth(app);

function Register() {
    const [passwordError,setPasswordError] = useState('');
    const [success,setSuccess] = useState(false);
  const handleRegister = (event) => {
    event.preventDefault();
    setSuccess(false);
    const form = event.target;
    const name = form.target.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email,password);
    if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
        setPasswordError('please provide at list two uppercase')
        return;
    }
 
    if(password.length < 6){
        setPasswordError('please provide at list 6 character')
        return;

    }
   
    if(!/(?=.*[!@#$&*])/.test(password)){
        setPasswordError('please at last special character')
        return;
    }
   
    setPasswordError('')

    createUserWithEmailAndPassword(auth,email,password)
    .then(result =>{
        const user = result.user;
        console.log(user)
        setSuccess(true)
       form.reset();
       verifyEmail();
       UpdateUserName(name);
       
    })
    .catch(error =>{
        console.error('error',error);
        setPasswordError(error.message)
    })
  };

const verifyEmail = () =>{
  sendEmailVerification(auth.currentUser)
  .then(()=>{
alert('please check your email and verify!!')
  })
}
const UpdateUserName = (name) =>{
  updateProfile(auth.currentUser,{
    displayName:name
  })
  .then(()=>{
    console.log('Display Named Updated !!')
  })
  .catch(error =>{
    console.log(error)
  })

}
  return (
    <Form onSubmit={handleRegister} className="w-50 mx-auto mt-5">
      <h2 className="text-primary">Please Register !!</h2>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label> Enter your Name </Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter Name" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control  type="password" name="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      {success && <p className="text-success">User created Successfully</p>}
      <p className="text-danger">{passwordError}</p>
      <Button variant="primary" type="submit">
        Register
      </Button>
      <p><small>Already have an account Please? <Link to='/login'>Log in</Link></small></p>
    </Form>

  );
}

export default Register;
