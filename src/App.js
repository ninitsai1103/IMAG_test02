import "./app.scss";
import { useState, useEffect, useRef } from "react";

export default function App() {
  const [mountain, setMountain] = useState("");
  const [sunMoon, setSunMoon] = useState("");
  const [mountainSelected, setMountainSelected] = useState(false);
  const [sunMoonSelected, setSunMoonSelected] = useState(false);
  const canvasRef = useRef(null);

  const drawOnCanvas = (mountainSrc, sunMoonSrc) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height); // 清除畫布

    if (sunMoonSrc) {
      const sunMoonImg = new Image();
      sunMoonImg.onload = function () {
        ctx.drawImage(sunMoonImg, 26, 69, 420, 421);
        if (mountainSrc) {
          const mountainImg = new Image();
          mountainImg.onload = function () {
            ctx.drawImage(mountainImg, 26, 116, 842, 810);
          };
          mountainImg.src = mountainSrc;
        }
      };
      sunMoonImg.src = sunMoonSrc;
    } else if (mountainSrc) {
      const mountainImg = new Image();
      mountainImg.onload = function () {
        ctx.drawImage(mountainImg, 26, 116, 842, 810);
      };
      mountainImg.src = mountainSrc;
    }
  };

  useEffect(() => {
    const mountainSrc = mountain ? `/images/${mountain}.png` : null;
    const sunMoonSrc = sunMoon ? `/images/${sunMoon}.png` : null;
    drawOnCanvas(mountainSrc, sunMoonSrc);
  }, [mountain, sunMoon]);

  const handleMountain = (mountainName) => {
    if (mountain === mountainName) {
      setMountain(""); 
      setMountainSelected(false);
    } else {
      setMountain(mountainName); 
      setMountainSelected(true);
    }
  };

  const handleSunMoon = (sunMoonName) => {
    if (sunMoon === sunMoonName) {
      setSunMoon(""); 
      setSunMoonSelected(false);
    } else {
      setSunMoon(sunMoonName); 
      setSunMoonSelected(true);
    }
  };

  return (
    <div className="container">
      <div className="top-box">
        {mountainSelected ? (
          <div>{mountain === "mountain1" ? "Mountain 1" : "Mountain 2"}</div>
        ) : (
          <div>&nbsp;</div>
        )}
        <div>&</div>
        {sunMoonSelected ? (
          <div>{sunMoon === "sun" ? "Sun" : "Moon"}</div>
        ) : (
          <div>&nbsp;</div>
        )}
      </div>
      <canvas
        ref={canvasRef}
        id="canvas"
        width={894}
        height={952}
        style={{ backgroundColor: "white" }}
      ></canvas>
      <div className="btns">
        <div
          className={`btn ${mountain === "mountain1" ? "selected-btn" : ""}`}
          onClick={() => {
            handleMountain("mountain1");
          }}
        >
          Mountain 1
        </div>
        <div
          className={`btn ${mountain === "mountain2" ? "selected-btn" : ""}`}
          onClick={() => {
            handleMountain("mountain2");
          }}
        >
          Mountain 2
        </div>
        <div
          className={`btn ${sunMoon === "sun" ? "selected-btn" : ""}`}
          onClick={() => {
            handleSunMoon("sun");
          }}
        >
          Sun
        </div>
        <div
          className={`btn ${sunMoon === "moon" ? "selected-btn" : ""}`}
          onClick={() => {
            handleSunMoon("moon");
          }}
        >
          Moon
        </div>
        <div className="btn btn-download" onClick={() => {}}>
          Download card
        </div>
      </div>
    </div>
  );
}
