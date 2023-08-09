import { Field, Form, Formik } from "formik";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
       /*
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          console.log(values);
          alert(JSON.stringify(values, null, 2));
        }}
        */
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" onChange={handleChange} placeholder="Jane" />
            <br />
            <br />
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" onChange={handleChange} placeholder="Doe" />
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              onChange={handleChange} 
              placeholder="jane@acme.com"
              type="email"
            />
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        )}

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
      </Formik>
    </div>
  );
}

export default App;
