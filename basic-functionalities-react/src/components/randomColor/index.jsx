import { useState } from "react";

export default function randomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#ffffff");

  const randomNumberGenerator = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleHexColorGenerator = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomNumberGenerator(hex.length)];
    }
    setColor(hexColor);
  };

  

  return (
    <section style={{backgroundColor: color}}>
      <div>
        <button onClick={handleHexColorGenerator}>HEX Color</button>
        <button>RGB Color</button>
        <button>Generate Color</button>
      </div>
      <div>
        <h4>Color</h4>
      </div>
    </section>
  );
}
