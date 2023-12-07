import "../Host/host.scss";

function Host({ image, host }) {
  return (
    <div className="host">
      <p className="host__name">{host}</p>
      <img src={image} alt="Host avatar" />
    </div>
  );
}

export default Host;