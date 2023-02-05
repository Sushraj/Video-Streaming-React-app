import React, { useRef } from "react";
import "./SignupScreen.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseApp } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignupScreen() {
  const auth = getAuth(firebaseApp);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((response) => {
        console.log(response);
        toast.success("Congratulations, your account has been successfully registered");

        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
      })
      .catch((error) => {
        alert(error.message);
        if (error.message === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
          toast.error("Password should be at least 6 characters");
        }
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        alert(error.message);
        if (error.message === "Firebase: Error (auth/wrong-password).") {
          toast.error("Please check the Password");
        }
        if (error.message === "Firebase: Error (auth/user-not-found).") {
          toast.error("Please check the Email");
        }
        if (error.message === "Firebase: Error (auth/invalid-email).") {
          toast.error("Please enter valid email ");
        }
      });

  };
  return (
    <div className="SignupScreen">
      <ToastContainer />
      <form>
        <h1> Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signupScreen_gray"> New to Netflix? </span>
          <span className="signupScreen_link" onClick={register}>
            Sign up now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
