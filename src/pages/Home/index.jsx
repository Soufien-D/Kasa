import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import Falaise from "../../assets/Falaises.png";
import { NavLink } from "react-router-dom";

function Home({ data }) {
  return (
    <main>
      <Banner title="Chez vous, partout et ailleurs" src={Falaise} alt="Falaise" />
      <div className="home_gallery">
        {data.map(({ id, title, cover }) => (
          <NavLink className="home_gallery_cards" key={id} to={`/logement/${id}`}>
            <Card title={title} cover={cover} />
          </NavLink>
        ))}
      </div>
    </main>
  );
}

export default Home;
