const getData = () => {
  return fetch(`https://jsonplaceholder.typicode.com/posts`).then((res) =>
    res.json()
  );
};

export default getData;
