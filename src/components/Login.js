import React,{useRef} from 'react';
import { useHistory } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const submitHander = async(e) => {
    try {
      e.preventDefault();
  
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      const obj = {email,password};
       
      const res = await fetch("http://localhost:5000/user",{
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(!res.ok) {
        const err = await res.json();
        throw new Error(err)
      }
      const data = await res.json();
      console.log(data);
      history.replace("/afterLogin")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form onSubmit={submitHander}>
      <label>Email</label>
      <input ref={emailRef} id="email"  />
      <label>password</label>
      <input ref={passwordRef} id="phone"/>
      <button>Submit</button>
    </form>
  )
}

export default Login