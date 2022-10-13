import { useState } from "react";
import "./styles.css";

const mountedStyle = {
  animation: "inAnimation 250ms ease-in"
};
const unmountedStyle = {
  animation: "outAnimation 270ms ease-out",
  animationFillMode: "forwards"
};

export default function App() {
  const [showDiv, setShowDiv] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShowDiv(!showDiv)}>Show/Hide</button>
      <div
        className="transitionDiv"
        style={showDiv ? mountedStyle : unmountedStyle}
      ></div>
    </div>
  );
}



//.styles css

.App {
  font-family: sans-serif;
  text-align: center;
}

.transitionDiv {
  background: red;
  height: 100px;
  width: 200px;
  margin: 0 auto;
}

@keyframes inAnimation {
  0% {
    opacity: 0;
    visibility: hidden;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
}

@keyframes outAnimation {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}
