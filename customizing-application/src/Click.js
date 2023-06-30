import React, { useState } from "react";

const CustomizableBox = ({ color, size }) => {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
      }}
    ></div>
  );
};

const Click = () => {
  const [color, setColor] = useState("black");
  const [size, setSize] = useState(100);

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <div>
      <h1>커스텀 맛있네 👅👅👅</h1>
      <label>
        크기를 골라주세요:
        <input type="number" value={size} onChange={handleSizeChange} />
      </label>
      <br />
      <label>
        색상을 골라주세요:
        <input type="color" value={color} onChange={handleColorChange} />
      </label>
      <CustomizableBox color={color} size={size} />
    </div>
  );
};

export default Click;
