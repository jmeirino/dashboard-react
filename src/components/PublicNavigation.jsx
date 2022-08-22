import { link, NavLink } from "react-router-dom";

const PublicNavigation = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link" to="productos">Total de Productos</NavLink>
        <NavLink className="nav-link" to="categorias">Total de Categorías</NavLink>
        <NavLink className="nav-link" to="usuarios">Total de Usuarios</NavLink>
      </div>
    </div>
  </div>
</nav>
    );
};

export default PublicNavigation;