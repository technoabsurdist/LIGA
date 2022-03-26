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
  const [password, setPassword] = useState("");
  const [isSignInClicked,setIsSignInClicked] = useState(false);
  const [isRegisterClicked, setIsRegisterClicked] = useState(false);  
  const [linkedinURL, setLinkedinURL] = useState(""); 
  const [twitterURL, setTwitterURL] = useState(""); 
  const [ghURL, setGhURL] = useState(""); 
  const [rsoList, setRsoList] = useState([]);
  const [major, setMajor] = useState("");
  const [interests, setInterests] = useState("");

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
            displayLinkedinURL: userAuth.user.displayLinkedinURL,
            displayTwitterURL: userAuth.user.displayTwitterURL,
            displayGhURL: userAuth.user.displayGhURL,
            displayRSOList: userAuth.user.displayRSOList,
            displayMajors: userAuth.user.displayMajors,
            displayInterests: userAuth.user.displayInterests
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
            displayLinkedinURL: linkedinURL,
            displayTwitterURL: twitterURL,
            displayGhURL: ghURL,
            displayRSOList: rsoList,
            displayMajors: major,
            displayInterests: interests
            
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                displayLinkedinURL: linkedinURL,
                displayTwitterURL: twitterURL,
                displayGhURL: ghURL,
                displayRSOList: rsoList,
                displayMajors: major,
                displayInterests: interests
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
      
        <span className="login__register" onClick={loginToApp}>
          Sign In 
        </span>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
          />

          <input
            value={linkedinURL}
            onChange={(e) => setLinkedinURL(e.target.value)}
            placeholder="Linkedin URL"
            type="linkedin"
          />

          <input
            value={twitterURL}
            onChange={(e) => setTwitterURL(e.target.value)}
            placeholder="Twitter URL (Optional)"
            type="twitter"
          />

          <input
            value={ghURL}
            onChange={(e) => setGhURL(e.target.value)}
            placeholder="Github URL (Optional)"
            type="github"
          />

          <input
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            placeholder=" Major(s)/Minor(s) (Optional)"
            type="major"
          />

          <input
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            placeholder="Interests (Optional)"
            type="interests"
          />

          <select name="rsos" className="rsos" multiple>
            <option value="blockchain" onClick={(e) => setRsoList(oldArray => [...oldArray, e.target.value])}
              className="item-rsos">Chicago Blockchain</option>

            <option value="bluechips" onClick={(e) => setRsoList(oldArray => [...oldArray, e.target.value])}
              className="item-rsos">Blue Chips</option>

            <option value="eckhart" onClick={(e) => setRsoList(oldArray => [...oldArray, e.target.value])}
              className="item-rsos">Eckhart</option>

            <option value="maroon" onClick={(e) => setRsoList(oldArray => [...oldArray, e.target.value])}
              className="item-rsos">Maroon Capital</option>

            <option value="paragon" onClick={(e) => setRsoList(oldArray => [...oldArray, e.target.value])}
              className="item-rsos">Paragon National Group</option>

            <option value="pareto" onClick={(e) => setRsoList(oldArray => [...oldArray, e.target.value])} 
              className="item-rsos">Pareto Solutions</option>

            <option value="pareto" onClick={(e) => setRsoList(oldArray => [...oldArray, e.target.value])} 
              className="item-rsos">AKPsi</option>

          </select>

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
          
          <span className="login__register" onClick={register}>
            Register
          </span>
          </form>} 

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