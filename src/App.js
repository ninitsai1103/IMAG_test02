import "./app.scss";
import {useState, useEffect, useRef} from "react";

export default function App() {
  const [btnSelected, setBtnSelected] = useState(false);
  const [mountain, setMountain] = useState("");
  const [sunMoon, setSunMoon] = useState("");

  const handleBtnSelected = () => {
    setBtnSelected(!btnSelected);
  }
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
        <div>&nbsp;</div>
        <div>&</div>
        <div>&nbsp;</div>
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
          handleBtnSelected(true);
        }}>
          Mountain 1
        </div>
        <div className={`btn ${mountain === "mountain2" ? "selected-btn" : ""}`} onClick={() => {
          handleMountain("mountain2");
          handleBtnSelected(true);
        }}>
          Mountain 2
        </div>
        <div className={`btn ${sunMoon === "sun" ? "selected-btn" : ""}`} onClick={() => {
          handleSunMoon("sun");
          handleBtnSelected(true);
        }}>
          Sun
        </div>
        <div className={`btn ${sunMoon === "moon" ? "selected-btn" : ""}`} onClick={() => {
          handleSunMoon("moon");
          handleBtnSelected(true);
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
