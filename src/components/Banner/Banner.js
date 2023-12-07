import "../Banner/banner.scss";

function Banner(montagne) {
  return (
    <div className="banner">
      <h1>{montagne.title}</h1>
      <img src={montagne.src} alt={montagne.alt} />
    </div>
  );
}

export default Banner;
