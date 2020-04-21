import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";
import "./siteHeader.css";
import { Auth0Provider,Auth0Context } from "../../contexts/auth0-context"

const SiteHeader = () => {

  const auth0 = useContext(Auth0Context);
  return (
    <Auth0Provider>
    <nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          Movies
        </Link>
      </nav>
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/tvShows">
          Tv Shows
        </Link>
      </nav>
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/people">
          People
        </Link>
      </nav>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "video"]}
        size="3x"
      />
      <span className="navbar-text text-light">
        For the movie enthusiast !!
      </span>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="3x"
      />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/favorites">
              Favorite Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/tvShows/favorites">
              Favorite TV
            </Link>
          </li>
        </ul>
        <button onClick={auth0.loginWithRedirect} className="btn btn-primary">
          Login
        </button>
      </nav>
    </nav>
    </Auth0Provider>
  );
};

export default SiteHeader;