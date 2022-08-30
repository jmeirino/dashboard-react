import { Link } from "react-router-dom";


const PublicNavigation = () => {
  return (
    <>
      <nav className="nav nav-pills flex-column flex-sm-row">
        <img className="logo" src="/logo.png" alt="" />

        <Link className="barraLink" to="/inicio">HOME</Link>

        <Link className="barraLink" to="/productos">PRODUCTOS</Link>

        <Link className="barraLink" to="/categorias">CATEGORÍAS</Link>

        <Link className="barraLink" to="/usuarios">USUARIOS</Link>
      </nav>



    </>

    //<div className="navbar-nav">
    //<NavLink className="nav-link" to="productos">Total de Productos</NavLink>
    //<NavLink className="nav-link" to="categorias">Total de Categorías</NavLink>
    //<NavLink className="nav-link" to="usuarios">Total de Usuarios</NavLink>
  );
};

export default PublicNavigation;