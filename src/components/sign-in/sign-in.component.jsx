import { useState } from "react";
import { Navigate } from "react-router-dom";
import { updatePlayerDetails } from "../../features/playerSlice";
import { useDispatch } from "react-redux";

import Button from "../button/button.component";

import "./sign-in.styles.scss";

const defaultFormFields = {
  name: "",
  password: "",
};

const SignIn = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, password } = formFields;
  const [playerDetails, setPlayerDetails] = useState({});

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const login = await fetch("http://localhost:3001/login", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formFields.name,
          password: formFields.password,
        }),
      });
      // Response from api
      const player = await login.json();

      setPlayerDetails(player);

      resetFormFields();
    } catch (error) {
      console.log("player sign in failed", error);
    }
  };

  const updateState = () => dispatch(updatePlayerDetails(playerDetails));
  updateState();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      {playerDetails.status && (
        <h3>Incorrect username or password, try again!</h3>
      )}
      <form onSubmit={handleSubmit}>
        <input
          label="Name"
          required
          placeholder="Username"
          onChange={handleChange}
          name="name"
          value={name}
        />
        <input
          label="Password"
          type="password"
          placeholder="Password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <Button type="submit">Login</Button>
      </form>
      {playerDetails.status === "success" && <Navigate to="/games" />}
    </div>
  );
};

export default SignIn;
