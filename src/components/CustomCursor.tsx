import React, { useEffect, useState } from "react";
import { lightTheme } from "../styles/theme";

export default function CustomCursor() {
  const [cursorX, setCursorX] = useState(window.innerWidth / 2);
  const [cursorY, setCursorY] = useState(window.innerHeight / 2);
  const [lastPos, setLastPos] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const color = lightTheme?.colors?.pink;
  const trailDuration = 200; // how long each line stays (ms)

  const isTouchDevice = () => {
    try {
      document.createEvent("TouchEvent");
      return true;
    } catch (e) {
      return false;
    }
  };

  const move = (e: MouseEvent | TouchEvent) => {
    const touchEvent = "touches" in e ? e.touches[0] : null;
    const x = !isTouchDevice()
      ? (e as MouseEvent).clientX
      : touchEvent?.clientX || 0;
    const y = !isTouchDevice()
      ? (e as MouseEvent).clientY
      : touchEvent?.clientY || 0;

    setCursorX(x);
    setCursorY(y);

    const cursor = document.getElementById("cursor");
    if (cursor) {
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    }

    // draw trail line between lastPos and new position
    createLine(lastPos.x, lastPos.y, x, y);
    setLastPos({ x, y });
  };

  // ✅ create DOM line between two points
  const createLine = (x1: number, y1: number, x2: number, y2: number) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const length = Math.sqrt(dx * dx + dy * dy);
    if (length < 1) return; // skip tiny moves

    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    const line = document.createElement("div");

    line.style.position = "fixed";
    line.style.left = `${x1}px`;
    line.style.top = `${y1}px`;
    line.style.width = `${length}px`;
    line.style.height = "3px";
    line.style.backgroundColor = color;
    line.style.transformOrigin = "0 50%";
    line.style.transform = `rotate(${angle}deg)`;
    line.style.pointerEvents = "none";
    line.style.opacity = "1";
    line.style.transition = "opacity 0.3s ease-out";
    line.style.zIndex = "9998";

    document.body.appendChild(line);

    // fade + remove after a short delay
    setTimeout(() => {
      line.style.opacity = "0";
      setTimeout(() => line.remove(), 300);
    }, trailDuration);
  };

  useEffect(() => {
    document.addEventListener("mousemove", move);
    document.addEventListener("touchmove", move);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("touchmove", move);
    };
  }, [lastPos]);

  return (
    <div>
      <style>
        {`
        * { cursor: none; margin: 0; }

        #cursor {
          position: fixed;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: ${color};
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 9999;
        }

        body {
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          background-color: transparent;
        }
        `}
      </style>

      {/* Pink Dot */}
      <div
        id="cursor"
        style={{ left: `${cursorX}px`, top: `${cursorY}px` }}
      ></div>
    </div>
  );
}
