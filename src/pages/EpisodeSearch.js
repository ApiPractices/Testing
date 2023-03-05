import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Link } from "react-router-dom";

function EpisodeSearch() {
  let [episode, setEpisode] = useState(null);
  let [char, setChar] = useState([]);
  function handleChange(e) {
    setEpisode(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    // This will help the page not refresh
    getName();
  }

  async function getName() {
    let url = `https://rickandmortyapi.com/api/episode/${episode}`;

    try {
      let response = await fetch(url);
      let data = await response.json();
      setChar({
        name: data.name,
        episode: data.episode
      });
      // Could not figure out why image was not loading..
      // It was because I did not put comma for icon section
    } catch (error) {
      console.log("something went wrong");
    }
  }

  useEffect(() => {
    getName();
  }, []);
  // This will make it run every time any state changes
  // If I put [] for second it will run first time
  return (
    <div>
      <div>
        <h2>Episode Sorter</h2>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} />
          <button> Convert Episode </button>
        </form>
      </div>
      <div>
        <div className="names">
          <h2>
            <span>Name:</span> {char.name}
          </h2>
        </div>
        <div className="locations">
          <h2>
            <span>Season Episode:</span> {char.episode}
          </h2>
        </div>
      </div>
    </div>
  );
}
export default EpisodeSearch;
