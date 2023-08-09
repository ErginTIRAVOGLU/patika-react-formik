import { Field, Form, Formik, useFormik } from "formik";
import "./App.css";

function App() {
  const {handleSubmit, handleChange, values} = useFormik({
    initialValues: {
      firstName: "User",
      lastName: "Surname",
      email: "er@er.com",
      gender: "female",
      hobiler: [],
      country: "usa",
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="App">
      <h1>Sign Up</h1>
      
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              onChange={handleChange}
              placeholder="Jane"
              value={values.firstName}
            />
            <br />
            <br />
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              onChange={handleChange}
              placeholder="Doe"
              value={values.lastName}
            />
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="jane@acme.com"
              type="email"
              value={values.email}
            />
            <br />
            <br />

            <label htmlFor="gender">Gender</label>
            <br />
            <br />
            <span>Male</span>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              checked={values.gender === "male"}
            />
            <span>Female</span>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
              checked={values.gender === "female"}
            />

            <br />
            <br />
            <span>Footbol</span>
            <input
              type="checkbox"
              name="hobiler"
              value="Footbol"
              onChange={handleChange}
            />
            <span>Sinema</span>
            <input
              type="checkbox"
              name="hobiler"
              value="Sinema"
              onChange={handleChange}
            />
            <span>Fotoğrafçılık</span>
            <input
              type="checkbox"
              name="hobiler"
              value="Fotograf"
              onChange={handleChange}
            />
            <br />
            <br />
            <select
              name="country"
              value={values.country}
              id="country"
              onChange={handleChange}
            >
              <option value="tr">Turkey</option>
              <option value="en">England</option>
              <option value="usa">USA</option>
            </select>
            <br />
            <br />
            <button type="submit">Submit</button>
            <br />
            <br />
            {JSON.stringify(values)}
          </form>
        

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
