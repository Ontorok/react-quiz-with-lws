import React from "react";
import signupImg from "../../assets/images/signup.svg";
import Illustration from "../Illustration";
import SignUpForm from "../SignUpForm";

const SignUp = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration imgSource={signupImg} />
        <SignUpForm />
      </div>
    </>
  );
};

export default SignUp;
