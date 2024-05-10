import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [name, setName] = useState(0);

  useEffect(() => {
    console.log("Pattern 1 component did mount");
  }, []);

  useEffect(() => {
    console.log("Pattern 2 component did update");
  });

  useEffect(() => {
    console.log("Pattern 3 component did update");
  }, [name]);

  useEffect(() => {
    console.log("Pattern 4 component did update");
    return () => {
      console.log("removing component");
    };
  });

  // const changeName = () => {

  // };

  const onClick = () => {
    setName((prevState) => prevState + 1);
  };
  // (e) => setName(e.target.value))

  return (
    <div className="App">
      {console.log("RENDER")};<h1>Hello CodeSandbox</h1>
      <h2>Start {name} </h2>
      <button onClick={onClick}> press</button>
      {/* <input onChange=((e) => changeName(e)) value={name} /> */}
    </div>
  );
}
