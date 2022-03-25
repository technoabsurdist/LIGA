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
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [linkedURL, setLinkedinURL] = useState(""); 
  const [interests, setInterests] = useState(""); 
  const [twitterURL, setTwitterURL] = useState(""); 
  const [githubURL, setGithubURL] = useState(""); 
  const [password, setPassword] = useState("");
  const [isSignInClicked,setIsSignInClicked] = useState(false);
  const [isRegisterClicked, setIsRegisterClicked] = useState(false);  

  const dispatch = useDispatch();
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

  const handleSubmit = e => {
    e.preventDefault();
    var self = this;
    // On submit of the form, send a POST request with the data to the server.
    fetch('/users', { 
        method: 'POST',
        data: {
          name: refs.name,
          email: refs.email,
          interests: refs.interests,
          linkedin: refs.linkedin,
          twitter: refs.twitter,
          github: regs.github, 
          password: refs.password
        }
      })
      .then(function(response) {
        return response.json()
      }).then(function(body) {
        console.log(body);
      });
  }
  //     username: name,
  //     email: email,
  //     profile_picture : imageUrl,
  //     linkedInURL: linkedInURL, 
  //     twitterURL: twitterURL, 
  //     githubURL: githubURL, 
  //     password: password,
  //   });
  // }

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
            ref="name"
          /> 

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            ref="email"
          />

          <input
            placeholder="Interests (e.g., Web Development, Business)"
            type="text"
            value={profilePic}
            onChange={(e) => setInterests(e.target.value)}
            ref="interests"
          /> 

          <input
            placeholder="LinkedIn URL"
            type="text"
            required
            value={profilePic}
            onChange={(e) => setLinkedinURL(e.target.value)}
            ref="linkedin"
          />   

          <input
            placeholder="Twitter URL (Optional)"
            type="text"
            value={profilePic}
            onChange={(e) => setTwitterURL(e.target.value)}
            ref="twitter"
          />   
 
          <input
            placeholder="Github URL (Optional)"
            type="text"
            value={profilePic}
            onChange={(e) => setGithubURL(e.target.value)}
            ref="github"
          />   
 
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            ref="password"
          />
          
          <button className="login__register" onClick={register}> 
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
      <footer> 
      <h4 id="my_footer">
        {/* by{" "} */}
        {/* <a href="https://twitter.com/technoabsurdist"> */}
          {/* {" "} */}
          {/* @technoabsurdist */}
        {/* </a>{" "} */}
      </h4>
      </footer> 
   </div>
  );
}