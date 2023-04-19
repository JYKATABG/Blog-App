import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config.js";

export const Home = () => {
  const [postList, setPostList] = useState([]);

  let postCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })));
    };

    getPosts();
  }, []);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    setPostList((state) => state.filter((x) => x._id !== id));
  };

  return (
    <div className="homePage">
      <h1>Homepage</h1>
      {postList.map((post) => {
        return (
          <div className="post" key={post.id}>
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
              </div>
              <div className="deletePost">
                <button
                  onClick={() => {
                    deletePost(post.id);
                  }}
                >
                  &#128465;
                </button>
              </div>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            <h3>@ {post.author.name}</h3>
          </div>
        );
      })}
      {postList.length === 0 && <h1>There are no posts yet :(</h1>}
    </div>
  );
};
