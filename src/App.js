import "./app.scss";
import {useState, useEffect, useRef} from "react";

export default function App() {
  const [mountain, setMountain] = useState("");
  const [sunMoon, setSunMoon] = useState("");

  const handleMountain = (mountainName) => {
    if (mountain === mountainName) {
      setMountain(""); // 取消選中
    } else {
      setMountain(mountainName); // 設置為選中
    }
  };

  const handleSunMoon = (sunMoonName) => {
    if (sunMoon === sunMoonName) {
      setSunMoon(""); // 取消選中
    } else {
      setSunMoon(sunMoonName); // 設置為選中
    }
  };

  return (
    <div className="container">
      <div className="top-box">
        <div className="show-moutain">&nbsp;</div>
        <div>&</div>
        <div className="show-sunmoon">&nbsp;</div>
      </div>
      <canvas
        id="canvas"
        width={894}
        height={952}
        style={{ backgroundColor: "white" }}
      ></canvas>
      <div className="btns">
        <div className={`btn ${mountain === "mountain1" ? "selected-btn" : ""}`} onClick={() => {
          handleMountain("mountain1");
        }}>
          Mountain 1
        </div>
        <div className={`btn ${mountain === "mountain2" ? "selected-btn" : ""}`} onClick={() => {
          handleMountain("mountain2");
        }}>
          Mountain 2
        </div>
        <div className={`btn ${sunMoon === "sun" ? "selected-btn" : ""}`} onClick={() => {
          handleSunMoon("sun");
        }}>
          Sun
        </div>
        <div className={`btn ${sunMoon === "moon" ? "selected-btn" : ""}`} onClick={() => {
          handleSunMoon("moon");
        }}>
          Moon
        </div>
        <div className="btn btn-download" onClick={() => {}}>
          Download card
        </div>
      </div>
    </div>
  );
}
