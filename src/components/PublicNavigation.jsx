import { Link } from "react-router-dom";

const PublicNavigation = () => {
  return (
    <div className="main-div-sidebar">
      <div className="barra" >
        <ul className="navbar-nav sidebar h-100" id="accordionSidebar">

          <hr className="sidebar-divider my-2" />

          <li className="nav-item active">
            <p className="" href="/">

              <img className="logo" src="/logo.png" alt="" />

            </p>
          </li>

          <hr className="sidebar-divider" />

          <li className="nav-item">
            <p className="item-sidebar" href="/">
              <Link className="linkIcono" to="/inicio"><i className="fa-solid fa-house"></i></Link>
              <Link className="barraLink" to="/inicio">HOME</Link>
            </p>
          </li>


          <li className="nav-item">
            <p className="item-sidebar" href="/">
              <Link className="linkIcono" to="/productos"><i className="fa-solid fa-headset"></i></Link>
              <Link className="barraLink" to="/productos">PRODUCTOS</Link>
            </p>
          </li>

          <li className="nav-item">
            <p className="item-sidebar" href="/">
              <Link className="linkIcono" to="/categorias"><i className="fa-solid fa-user"></i></Link>
              <Link className="barraLink" to="/categorias">CATEGORÍAS</Link>
            </p>
          </li>

          <li className="nav-item">
            <p className="item-sidebar" href="/">
              <Link className="linkIcono" to="/usuarios"><i className="fa-solid fa-user"></i></Link>
              <Link className="barraLink" to="/usuarios">USUARIOS</Link>
            </p>
          </li>


          <hr className="sidebar-divider d-none d-md-block" />
        </ul></div>
    </div>


    //<div className="navbar-nav">
    //<NavLink className="nav-link" to="productos">Total de Productos</NavLink>
    //<NavLink className="nav-link" to="categorias">Total de Categorías</NavLink>
    //<NavLink className="nav-link" to="usuarios">Total de Usuarios</NavLink>
  );
};

export default PublicNavigation;