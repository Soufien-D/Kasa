import { useState } from "react";
import "../Carrousel/carrousel.scss";
import arrowRight from "../../assets/big_arrow_right.png";
import arrowLeft from "../../assets/big_arrow_left.png";

const Carrousel = ({ Images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = Images.length;
  const prev = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  const next = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="slides">
      {Images.map((image, index) => {
        return (
          <div className={index === currentIndex ? "slides__container" : "slides__hidden"} key={index}>
            <img src={image} alt="carrousel" />
          </div>
        );
      })}

      {length > 1 && (
        <>
          <div className="slides__arrows">
            <button onClick={prev}>
              <img src={arrowLeft} alt="Left arrow" />
            </button>
            <button onClick={next}>
              <img src={arrowRight} alt="Right arrow" />
            </button>
          </div>
          <div className="slides__numbers">
            {currentIndex + 1}/{length}
          </div>
        </>
      )}
    </section>
  );
};

export default Carrousel;
