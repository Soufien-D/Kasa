import "../Toggle/toggle.scss";
import { useState } from "react";
import arrowUp from "../../assets/arrow_up.png";

function Toggle({ content, title }) {
  const [isOpen, setOpen] = useState(false);
  const setOpenToggle = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="toggle_container">
      <div className="toggle_container__title">
        <h1>{title}</h1>
        <img
          onClick={setOpenToggle}
          className={isOpen ? "arrow arrow__down" : "arrow arrow__up"}
          src={arrowUp}
          alt="arrow"
        />
      </div>
      <div className={isOpen ? "toggle__text" : "toggle__hidden"}>
        {Array.isArray(content) ? (
          <ul className="toggle__list">
            {content.map((equipment, i) => (
              <li key={i}>{equipment}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}

export default Toggle;
