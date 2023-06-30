import React, { useState } from "react";
import Draggable from "react-draggable";
import Click from "./Click";

const DraggableBox = ({ id, color, size, position, onDrag, onStop }) => {
  return (
    <Draggable
      position={position}
      onDrag={onDrag}
      onStop={(e, data) => onStop(id, data)}
    >
      <div
        style={{
          width: size,
          height: size,
          backgroundColor: color,
        }}
      ></div>
    </Draggable>
  );
};

const App = () => {
  const [boxes, setBoxes] = useState([
    { id: 1, color: "red", size: "100px", position: { x: 0, y: 0 } },
    { id: 2, color: "blue", size: "150px", position: { x: 0, y: 0 } },
    { id: 3, color: "green", size: "200px", position: { x: 0, y: 0 } },
  ]);

  const handleDrag = (id, e, { x, y }) => {
    const updatedBoxes = boxes.map((box) => {
      if (box.id === id) {
        return {
          ...box,
          position: { x, y },
        };
      }
      return box;
    });

    setBoxes(updatedBoxes);
  };

  const handleDragStop = (id, { x, y }) => {
    const updatedBoxes = boxes.map((box) => {
      if (box.id === id) {
        return {
          ...box,
          position: { x, y },
        };
      }
      return box;
    });

    setBoxes(updatedBoxes);
  };

  return (
    <div>
      <Click />
      <h1>드래그</h1>

      {boxes.map((box) => (
        <DraggableBox
          key={box.id}
          id={box.id}
          color={box.color}
          size={box.size}
          position={box.position}
          onDrag={(e, data) => handleDrag(box.id, e, data)}
          onStop={(id, data) => handleDragStop(id, data)}
        />
      ))}
    </div>
  );
};

export default App;
