import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setIsLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setIsLoading(false);
      }
    } catch (e) {
      setErrorMessage(e.message);
      setIsLoading(false);
    }
  }

  function handleClickPrevious(){
    setCurrentSlide(currentSlide === 0 ? images.length -1 : currentSlide - 1)
  }

  function handleClickNext() {
    setCurrentSlide(currentSlide === images.length ? 1 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if(isLoading){
    return <div> Loading data! Please wait</div>
  }

  if(errorMessage !== null){
    return <div> Error occured! {errorMessage}</div>
  }
  return (
    <div className="container">
      <BsArrowLeftCircleFill onClick={handleClickPrevious} className="arrow arrow-left" />
      {images && images.length
        ? images.map((image, index) => (
            <img
              key={image.id}
              alt={image.download_url}
              src={image.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill onClick={handleClickNext} className="arrow arrow-right" />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={()=>{setCurrentSlide(index)}}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
