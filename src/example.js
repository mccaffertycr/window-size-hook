import React from "react";
import { useWindowSize } from "./windowsize";

function App() {
  let size = useWindowSize();
  const breakpoints = [768, 991, 1199];
  const getDevice = size => {
    if (size.innerWidth <= breakpoints[0]) return "mobile";
    else if (size.innerWidth <= breakpoints[1]) return "tablet";
    else return "desktop";
  };
  return <div className="App">{getDevice(size)}</div>;
}

export default App;
