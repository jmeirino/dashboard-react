import { NavLink } from "react-router-dom";


const PublicNavigation = () => {
  return (
    <>
      <nav className="nav nav-pills flex-column flex-sm-row">
        <img className="logo" src="/logo.png" alt="" />

        <NavLink className="barraLink" to="/inicio"> <i className="bi bi-house"></i> HOME</NavLink>

        <NavLink className="barraLink" to="/productos"> <i className="bi bi-headset"></i> PRODUCTOS</NavLink>

        <NavLink className="barraLink" to="/categorias"> <i className="bi bi-mouse"></i> CATEGORÍAS</NavLink>

        <NavLink className="barraLink" to="/usuarios"> <i className="bi bi-emoji-smile"></i> USUARIOS</NavLink>
      </nav>



    </>

    //<div className="navbar-nav">
    //<NavLink className="nav-link" to="productos">Total de Productos</NavLink>
    //<NavLink className="nav-link" to="categorias">Total de Categorías</NavLink>
    //<NavLink className="nav-link" to="usuarios">Total de Usuarios</NavLink>
  );
};

export default PublicNavigation;