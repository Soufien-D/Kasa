import { useParams } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel";
import Toggle from "../../components/Toggle/Toggle";
import Tags from "../../components/Tags/Tags";
import Host from "../../components/Host/Host";
import Rating from "../../components/Rating/Rating";
import "../Logement/logements.scss";
import Error from "../Error/index";

function Logement({ data }) {
  const { id } = useParams();
  const annonces = data.find((annonces) => annonces.id === id);

  if (!annonces) {
    return <Error />;
  }

  return (
    <main className="logements">
      <Carrousel Images={annonces.pictures} />
      <div className="logements__info">
        <div className="logements__presentation">
          <h2 className="logements__title">{annonces.title}</h2>
          <p className="logements__location">{annonces.location}</p>
          <Tags tags={annonces.tags} />
        </div>
        <div className="logements__rating">
          <Host image={annonces.host.picture} host={annonces.host.name} />
          <Rating stars={annonces.rating} />
        </div>
      </div>
      <div className="logements__toggles">
        <Toggle title="Description" content={annonces.description} />
        <Toggle title="Équipements" content={annonces.equipments} />
      </div>
    </main>
  );
}

export default Logement;
