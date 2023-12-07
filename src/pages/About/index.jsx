import Banner from "../../components/Banner/Banner"
import Montagne from "../../assets/Montagne.jpg"
import ToggleAbout from "../../components/ToggleAbout/ToggleAbout";

function About() {
    return (
        <main>
            <Banner src={Montagne} alt={"image montagne"}/>
            <ToggleAbout/>
        </main>

    )
}

export default About