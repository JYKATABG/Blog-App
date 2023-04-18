export const CreatePost = () => {
  return (
    <div className="create-post">
      <div className="cp-container">
        <h1>Create Posts</h1>
        <div className="post-title">
          <label htmlFor="title">Title:</label>
          <input type="text" placeholder="Post title..." />
        </div>
        <div className="post-title">
          <label htmlFor="information">Post information:</label>
          <textarea placeholder="Main information..."></textarea>
        </div>
        <button>Submit Post</button>
      </div>
    </div>
  );
};
