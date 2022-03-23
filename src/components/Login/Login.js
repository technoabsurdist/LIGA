import React, { useState } from "react";
import "./Login.css";
import { Link } from 'react-router-dom'
import { login } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase";
import "../Form/Form"; 
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();
  // const [enteredUsername,setEnteredUsername] = useState('');
  // const [enteredPassword,setEnteredPassword] = useState('');
  // const [isTrue,setTrue] = useState(true);
  const [isSignInClicked,setIsSignInClicked] = useState(false);
  const [isRegisterClicked, setIsRegisterClicked] = useState(false);  

  const navigate = useNavigate();
  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert("A full name is required to register.");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  const onSubmitClickHandler =()=>{
    setIsSignInClicked(true);
  }

  const onRegisterClickHandler = () => {
    setIsRegisterClicked(true); 
  }
  return (
    <div className="login">
      {(isSignInClicked || isRegisterClicked) && <header> 
        <form>
          <button id="back" onClick={() => navigate('/home')}>🏠</button>
        </form>
      </header>}

      <img 
        src="/assets/images/liga-logos_transparent.png"
        alt="liga logo"
      />
      {isSignInClicked && <form>
        {/* <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
          type="text"
          autoComplete="new-password"
        /> */}

        {/* <input
          placeholder="Profile picture URL (optional)"
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />         
  */}
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

        <button type="submit" onClick={loginToApp}> 
          Sign In 
        </button>
        </form>} 

        {isRegisterClicked && <form>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            type="text"
            autoComplete="new-password"
          /> 

          <input
            placeholder="Profile picture URL (optional)"
            type="text"
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
          />         

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

          <button type="submit" onClick={register}> 
            Register
          </button>
          </form>} 
        {/* Show buttons if botn not clicked */}
        {!isSignInClicked && !isRegisterClicked && <form>
        <button type="submit" onClick={onSubmitClickHandler}> 
          Sign In
        </button>
        <button type="submit" onClick={onRegisterClickHandler}>
          Register
        </button>
      </form>}

   </div>
  );
}