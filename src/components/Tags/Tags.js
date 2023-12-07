import "../Tags/tags.scss";

function Tags({ tags }) {
  return (
    <div className="tag">
      {tags.map((tag, i) => {
        return (
          <span className="tag__name" key={i}>
            {tag}
          </span>
        );
      })}
    </div>
  );
}

export default Tags;
