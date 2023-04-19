import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config.js";
import { useNavigate } from "react-router-dom";

export const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  let navigate = useNavigate();
  const postCollectionRef = collection(db, "posts");

  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="create-post">
      <div className="cp-container">
        <h1>Create Posts</h1>
        <div className="post-title">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            placeholder="Post title..."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="post-title">
          <label htmlFor="information">Post information:</label>
          <textarea
            placeholder="Main information..."
            onChange={(e) => setPostText(e.target.value)}
          ></textarea>
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  );
};
