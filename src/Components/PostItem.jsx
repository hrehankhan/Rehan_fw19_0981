const PostItem = ({ title, body }) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default PostItem;
