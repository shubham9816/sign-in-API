import React from "react";

const SignIn = ({ setEmail, setPassword }) => {
  function setDetails(e) {
    e.preventDefault();

    setEmail(() => e.target.elements["email"].value);
    setPassword(() => e.target.elements["password"].value);
  }

  return (
    <div className="sign-in">
      <div className="sign-in-page">
        <div className="sign-in-header">
          <h3>Welcome back! 👋</h3>
          <h1>Sign in to your account</h1>
        </div>

        <form className="sign-in-form" onSubmit={setDetails}>
          <label htmlFor="email">Your email</label>
          <input type="text" id="email" name="email" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />

          <button type="submit">CONTINUE</button>
        </form>
        <h3 className="forgot-password">Forget your password?</h3>
      </div>

      <div className="sign-up">
        <h3>Don't have an account?</h3>
        <h3>Sign up</h3>
      </div>
    </div>
  );
};

export default SignIn;
