import React, { useState } from "react";
import "./Login.css";
import { login } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [name, setName] = useState("");
  // const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            // displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const register = () => {
    // if (!name) {
    //   return alert("A full name is required to register.");
    // }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            // displayName: name,
            // photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                // displayName: name,
                // photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img 
        src="/assets/images/liga-logos_transparent.png"
        alt="liga logo"
      />
      <form>
        {/* <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
          type="text"
          autoComplete="new-password"
        /> */}

        {/* <input
          placeholder="Profile picture URL (optional)"
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        /> */}
{/* 
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          autoComplete="new-password"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
      */ }
        <button type="submit" onClick={loginToApp}> 
          Sign In As Club Member
        </button>
        <button type="submit" onClick={loginToApp}>
          Sign In As Recruiter 
        </button>
      </form>
      <p>
        Not a member? {""}
        <span className="login__register" onClick={register}>
          {" "}
          Register Now
        </span>
      </p>
      <div id="my_footer"> 
      <h4>
        © 2022 LIGA by{" "}
        <a href="https://www.linkedin.com/in/emi-andere/">
          {" "}
          Emilio Andere
        </a>{" "}
      </h4>
      </div>
   </div>
  );
}