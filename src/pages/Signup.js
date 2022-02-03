import { useState } from "react";
import axios from "axios";
import env from "react-dotenv";

const Signup = (props) => {
  //   console.log(env);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    axios
      .post(`${env.BACKEND_URL}/users`, {
        email,
        password,
      })
      .then((response) => {
        //   console.log(response);
        localStorage.setItem("userId", response.data.user.id);
        props.setUser(response.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={submitForm}>
      <div>
        <label htmlFor='email'>Email:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <input
          value={password}
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <input type='submit' value='Sign up!' />
      </div>
    </form>
  );
};

export default Signup;
