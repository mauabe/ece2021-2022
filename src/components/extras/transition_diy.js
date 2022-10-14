import { useState } from "react";
import "./styles.css";

// const mountedStyle = {
//   animation: "inAnimation 250ms ease-in"
// };
// const unmountedStyle = {
//   animation: "outAnimation 270ms ease-out",
//   animationFillMode: "forwards"
// };

export default function Content() {
  const [showDiv, setShowDiv] = useState(false);
  return (
    <div
      className="content-area transition"
      style={showDiv ? mountedStyle : unmountedStyle}
    >
    </div>
  );
}
