import logo from "../../assets/Logo_footer.png";
import "../Footer/footer.scss";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
