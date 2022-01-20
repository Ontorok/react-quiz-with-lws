import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";

const initialState = {
  email: "nishgro@gmail.com",
  password: "nasir123",
};

const LoginForm = () => {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();
  const { login } = useAuth();
  const history = useHistory();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(state.email, state.password);
      history.push("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Login  failed");
    }
  };

  return (
    <Form style={{ height: "330px" }} autoComplete="off" onSubmit={onSubmit}>
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

      <Button type="submit" disabled={loading}>
        Submit Now
      </Button>
      {error && <p className="error">{error}</p>}

      <div className="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </Form>
  );
};

export default LoginForm;
