import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

const initialState = {
  username: "nasir",
  email: "nishgro@gmail.com",
  password: "nasir123",
  confirmPassword: "nasir123",
  agree: true,
};

const SignUpForm = () => {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();
  const { signup } = useAuth();
  const history = useHistory();

  const onInputChange = (e) => {
    const { type, name, value, checked } = e.target;

    if (type === "checkbox") {
      setState({ ...state, [name]: checked });
    } else {
      setState({ ...state, [name]: value });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (state.password !== state.confirmPassword) {
      setError("Password did not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(state.email, state.password, state.username);
      history.push("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Sign UP faild");
    }
  };
  return (
    <Form style={{ height: "500px" }} autoComplete="off" onSubmit={onSubmit}>
      <TextInput
        type="text"
        name="username"
        placeholder="Enter user name"
        required
        value={state.username}
        onChange={onInputChange}
        icon="person"
      />
      <TextInput
        type="email"
        name="email"
        placeholder="Enter email"
        required
        value={state.email}
        onChange={onInputChange}
        icon="alternate_email"
      />
      <TextInput
        type="password"
        name="password"
        placeholder="Enter password"
        required
        value={state.password}
        onChange={onInputChange}
        icon="lock"
      />
      <TextInput
        type="password"
        name="confirmPassword"
        placeholder="Confirm password"
        required
        value={state.confirmPassword}
        onChange={onInputChange}
        icon="lock_clock"
      />

      <Checkbox
        text="I agree to the Terms &amp; Conditions"
        name="agree"
        required
        checked={state.agree}
        onChange={onInputChange}
      />
      <Button type="submit" disabled={loading}>
        Submit Now
      </Button>

      {error && <p className="error">{error}</p>}

      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
};

export default SignUpForm;
