import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function StarRating({ starNo = 5 }) {
  const [rateIndex, setRateIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(0);

  function handleClick(rateIndex) {
    setRateIndex(rateIndex);
  }

  function handleMouseMove(hoverIndex){
    setHoverIndex(hoverIndex);
  }

  function handleMouseLeave(){
    setHoverIndex(rateIndex);
  }

  return (
    <div className="star-rating">
      {[...Array(starNo)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hoverIndex || rateIndex) ? 'active' : 'inactive'}
            onClick={() => {
              handleClick(index);
            }}
            onMouseMove={()=>handleMouseMove(index)}
            onMouseLeave={()=>handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}
