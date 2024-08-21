import React, { useEffect, useState } from "react";

export const Color = (props) => {
  const { change } = props;

  function getRandomColor() {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    setColor("#" + n.slice(0, 6));
  }

  const [locked, setLocked] = useState(false);
  const [color, setColor] = useState("#ffffff");
  useEffect(() => {
    if (!change) {
      getRandomColor();
    }
  }, [change]);

  return (
    <div
      style={{
        backgroundColor: color,
        flexDirection: "column",
        height: "40vh",
        width: "40vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <div
          onClick={() => {
            navigator.clipboard.writeText(color.toUpperCase());
            alert(color.toUpperCase() + " copied!");
          }}
          style={{
            cursor: "pointer",
            display: "flex",
            fontSize: "48px",
            marginBottom: "20px",
          }}
        >
          {color.toUpperCase()}
        </div>
        <button
          style={{
            border: "none",
            cursor: "pointer",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            width: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            color: "white",
          }}
          onClick={() => {
            setLocked((prev) => !prev);
          }}
        >
          {locked ? "🔒" : "🔓"}
        </button>
      </div>
    </div>
  );
};
