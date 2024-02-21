import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [isMultiple, setIsMultiple] = useState(false);
  const [multiSelections, setMultiSelections] = useState([]);

  function handleIsMultiple() {
    setIsMultiple(!isMultiple);
  }

  function handleSingleSelection(id) {
    id === selected ? setSelected(null) : setSelected(id);
  }

  function handleMultipleSelection(id) {
    const newMultiselections = [...multiSelections];
    const findIndex = newMultiselections.indexOf(id);
    if (findIndex === -1) newMultiselections.push(id);
    else newMultiselections.splice(findIndex, 1);
    setMultiSelections(newMultiselections);
  }

  return (
    <div className="acc-wrapper">
      <button onClick={handleIsMultiple}>
        {isMultiple ? "Press to disable multiple" : "Press to unable multiple"}
      </button>
      {data && data.length > 0 ? (
        <div className="accordion">
          {data.map((dataItem) => (
            <div
              key={dataItem.id}
              className="item"
              onClick={
                isMultiple
                  ? () => handleMultipleSelection(dataItem.id)
                  : () => handleSingleSelection(dataItem.id)
              }
            >
              <div className="title">
                <h4>{dataItem.question}</h4>
                {selected === dataItem.id ? <span>-</span> : <span>+</span>}
              </div>
              {isMultiple
                ? multiSelections.indexOf(dataItem.id) !== -1 && (
                    <div className="acc-content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="acc-content">{dataItem.answer}</div>
                  )}
            </div>
          ))}
        </div>
      ) : (
        <p>No data!</p>
      )}
    </div>
  );
}
