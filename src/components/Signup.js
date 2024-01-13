import React,{useRef} from 'react'

const Signup = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();

  const submitHander = async(e) => {
    try {
      e.preventDefault();
      const firstName = firstNameRef.current.value;
      const lastName = lastNameRef.current.value;
      const email = emailRef.current.value;
      const phone = phoneRef.current.value;
      const password = passwordRef.current.value;

      const obj = {firstName,lastName,email,phone,password};
       
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

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form onSubmit={submitHander}>
      <label>First Name</label>
      <input ref={firstNameRef} id="firstName" />
      <label>Last Name</label>
      <input ref={lastNameRef} id="lastName"  />
      <label>Email</label>
      <input ref={emailRef} id="email"  />
      <label>Phone</label>
      <input ref={phoneRef} id="phone"/>
      <label>password</label>
      <input ref={passwordRef} id="phone"/>
      <button>Submit</button>
    </form>
  )
}

export default Signup