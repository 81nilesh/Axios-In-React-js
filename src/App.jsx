import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setMyData(res.data))
      .catch((error) => setIsError(error.message));
  }, []);

  return (
    <>
      <h1>Axios Tutorial</h1>
      {isError !== "" && <h2>{isError}</h2>}
      <div className="grid">
        {myData.map((post) => {
          const { id, title, body } = post;
          return (
            <div className="card" key={id}>
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
