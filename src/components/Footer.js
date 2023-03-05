import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <Link to="/inspiration">
        <div className="center">
          <div>ReadMe</div>
        </div>
      </Link>
      <Link to="/EpisodeSearch">
        <div>Episode Search </div>
      </Link>
    </div>
  );
}

export default Footer;
