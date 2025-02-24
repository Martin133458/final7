import React, { useEffect, useState } from "react";
import "./Custom.css";

const Custom = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Обновляем позицию курсора
  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    >
      <img src="/sushi.png" alt="Sticker" />
    </div>
  );
};

export default Custom;