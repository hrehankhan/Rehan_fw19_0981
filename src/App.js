import "./styles.css";
import React from "react";
import PostItem from "./Components/PostItem";
import getData from "./utils/getData";

export default function App() {
  const [data, setData] = React.useState([]);

  const fetchAndUpdateData = async () => {
    try {
      // waiting for response from API call
      const response = await getData();
      // console.log(data);
      //updating local state data value with API response
      setData(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="App">
      <h1>Posts</h1>
      <button onClick={fetchAndUpdateData}>GET POSTS</button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "10px"
        }}
      >
        {data.map((post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}
