import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div>Welcome</div>
      </Link>
      <Link to="/Search">
        <div>Search</div>
      </Link>
      <Link to="/Rick">
        <div>Rick </div>
      </Link>
      <Link to="/Morty">
        <div>Morty </div>
      </Link>
      <Link to="/Jerry">
        <div>Jerry </div>
      </Link>
      <Link to="/Alien">
        <div> Surprise </div>
      </Link>
      <Link to="/Wasp">
        <div>Top Type </div>
      </Link>
    </div>
  );
}

export default Nav;
