import { useFormik } from "formik";
import React from "react";
import validations from "./validation";

function Signup() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
    initialValues: {
      email: "er@er.com",
      password: "",
      passwordConfirm: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema:validations
  });
 // console.log(errors);
  return (
    <div>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          onChange={handleChange}
          placeholder="jane@acme.com"
          type="email"
          value={values.email}
        />
        {errors.email && touched.email && (<div>{errors.email}</div>)}
        <br />
        <br />

        <label htmlFor="password">Password</label>

        <input
          id="password"
          name="password"
          onChange={handleChange}
          placeholder="password"
          value={values.password}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && <div>{errors.password}</div>}
        <br />
        <br />
        <label htmlFor="passwordConfirm">Password Confirm</label>
        <input
          id="passwordConfirm"
          name="passwordConfirm"
          onChange={handleChange}
          placeholder="passwordConfirm"
          value={values.passwordConfirm}
          onBlur={handleBlur}
        />
        {errors.passwordConfirm && touched.passwordConfirm && <div>{errors.passwordConfirm}</div>}
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        {JSON.stringify(values)}
      </form>
    </div>
  );
}

export default Signup;
