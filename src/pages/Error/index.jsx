import {NavLink} from "react-router-dom"
import "../Error/error.scss"

function Error() {
    return (
      <div className="error">
        <h1 className="error__title">404</h1>
            <p className="error__subtitle">Oups! La page que vous demandez n'existe pas.</p>
            <NavLink className="error__link" to="/"> Retourner sur la page d'accueil</NavLink>
      </div>
    )
  }
  
  export default Error