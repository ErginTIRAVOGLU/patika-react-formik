import { Field, Form, Formik, useFormik } from "formik";
import "./App.css";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Signup />

      {/*
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />
      <br />
      <br />
        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </Form>
    */}
    </div>
  );
}

export default App;
