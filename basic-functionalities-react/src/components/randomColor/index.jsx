import { useEffect, useState } from "react";

export default function randomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

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

  const handleRgbColorGenerator = () => {
    const r = randomNumberGenerator(256);
    const g = randomNumberGenerator(256);
    const b = randomNumberGenerator(256);
    const color = `rgb(${r},${g},${b})`;
    setColor(color);
  };

  useEffect(() => {
    if (typeOfColor === "hex") handleHexColorGenerator();
    else handleRgbColorGenerator();
  }, [typeOfColor]);

  return (
    <section style={{ backgroundColor: color, width: "100%", height: "100vh" }}>
      <div>
        <button onClick={() => setTypeOfColor("hex")}>HEX Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>RGB Color</button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleHexColorGenerator
              : handleRgbColorGenerator
          }
        >
          Generate Color
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h4>Color: {color}</h4>
        <h5>{typeOfColor === "hex" ? "Hex color" : "RGB color"}</h5>
      </div>
    </section>
  );
}
