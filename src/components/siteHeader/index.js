import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";
import "./siteHeader.css";
import { Auth0Context } from "../../contexts/auth0-context"

const SiteHeader = () => {

  const { isLoading, user, loginWithRedirect, logout } = useContext(Auth0Context);
  
  return (
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
      {!isLoading && !user && (
        <span className="navbar-text text-light">
          For the movie enthusiast !!
        </span>
      )}
      {!isLoading && user && (
        <span className="navbar-text text-light">
          Welcome {user.name}
        </span>
      )}
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
      </nav>
      {!isLoading && !user && (
          <button onClick={loginWithRedirect} className="btn btn-primary">
            Login
          </button>
        )}
        {!isLoading && user && (
          <button onClick={() => logout({ returnTo: window.location.origin })} className="btn btn-primary">
            Logout
          </button>
        )}
    </nav>
  );
};

export default SiteHeader;