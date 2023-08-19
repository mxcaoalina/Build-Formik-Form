import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues:{
      username: '',
      password: ''
    },
    
    onSubmit: (values) => {
      alert("Login Successful");
    },

    validate: values => {
      let errors = {};
      if(!values.username) errors.username = 'Field required';
      else if (!validateEmail(values.username)) errors.username = 'Username should be an email';
      
      if(!values.password) errors.password = 'Field required';

      return errors;
    }
  });

  function validateEmail(email) {
    var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Username:</div>
        <input id="emailField" name="username" type="text" onChange={formik.handleChange} value={formik.values.username}/>
        {formik.errors.username ? <div id="emailError" style={{color:'red'}}>{formik.errors.username}</div>: null}
        
        <div>Password</div>
        <input ud="pswField" name="password" type="text" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div>: null}
        

        <button id="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
