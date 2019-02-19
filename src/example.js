import React from "react";
import { useWindowSize } from "./windowsize";

function App() {
  let width = useWindowSize();
  const breakpoints = [768, 991, 1199];
  const getDevice = size => {
    if (size <= breakpoints[0]) return "mobile";
    else if (size <= breakpoints[1]) return "tablet";
    else return "desktop";
  };
  return <div className="App">{getDevice(width)}</div>;
}

export default App;
