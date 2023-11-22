import React from "react";
import logo from "../../Logonetflix.png";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";

const Header = () => {
  return (
    <nav className="header">
      <Link to="/">
        <img src={logo} alt="logo" style={{ width: "20%" }} />
      </Link>
      <div>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recent">Recently Added</Link>
        <Link to="/mylist">MyList</Link>
      </div>
      <ImSearch />
    </nav>
  );
};

export default Header;
