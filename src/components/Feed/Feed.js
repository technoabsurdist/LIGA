import React, { useState, useEffect } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import CreateIcon from "@material-ui/icons/Create";
import Post from "./Post";
import ImageIcon from "@material-ui/icons/Image";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
// import { db } from "../../firebase"; 
// import firebase from "firebase/compat/app"; 


function Feed() {
  // Controlling States
  const [posts, setPosts] = useState([]);
//   const user = useSelector(selectUser)
  const [input, setInput] = useState('');

  // useEffect(() => {
  //   db.collection("posts")
  //     .orderBy("timestamp", "desc")
  //     .onSnapshot((snapshot) => 
  //       setPosts(
  //         snapshot.docs.map((doc) => ({
  //           id: doc.id, 
  //           data: doc.data(),
  //         }))
  //       )
  //     ); 
  // }, []); 

  // const sendPost = e => {
  //   e.preventDefault(); 
  
  //   db.collection("posts").add({
  //     name: "Your Name", 
  //     description: "example@gmail.com",
  //     message: input,
  //     photoUrl: "",
  //     timestamp: firebase.firestore.FieldValue.serverTimestap(), 
  //   }); 
  //   setInput(""); 
  // }

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start a post"
            /> 
            <button onClick={null} type="submit"> 
              Submit
            </button> 
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#E7A33E" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Post"
            color="#F5987E"
          />
        </div>
      <div> 
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        /> 
      ))}
      </div> 
    </div>
  </div> 
  );
}

export default Feed;