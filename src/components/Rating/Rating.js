import "../Rating/rating.scss"
import redStar from "../../assets/redStar.svg";
import greyStar from "../../assets/greyStar.svg";

const Rating = ({ stars }) => {
  const arrayStars = [1, 2, 3, 4, 5];
  return (
    <div className="rating">
      {arrayStars.map((star, index) =>
        stars >= star ? (
          <img className="stars__red" src={redStar} alt="" key={index} />
        ) : (
          <img className="stars__grey" src={greyStar} alt="" key={index} />
        )
      )}
    </div>
  );
};

export default Rating;