import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Link } from "react-router-dom";

function Search() {
  let [name, setName] = useState(null);
  let [char, setChar] = useState([]);
  function handleChange(e) {
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    // This will help the page not refresh
    getName();
  }

  async function getName() {
    let url = `https://rickandmortyapi.com/api/character/?name=${name}`;

    try {
      let response = await fetch(url);
      let allNames = await response.json();
      setChar({
        name: allNames.results[0].name,
        location: allNames.results[0].location.name,
        status: allNames.results[0].status,
        species: allNames.results[0].species,
        icon: allNames.results[0].image
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
        <h2>Character Render</h2>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} />
          <button> Select Character </button>
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
            <span>Location:</span> {char.location}
          </h2>
        </div>
        <div className="species">
          <h2>Species: {char.species}</h2>
        </div>
        <div className="status">
          <h2>Status: {char.status}</h2>
        </div>
        {char.icon ?
        <Link to={`/${name}`}>
          <img src={char.icon} alt=" Error Loading Icon" />
        </Link>: ''}
      </div>
    </div>
  );
}
export default Search;



{/* {char.icon ?
        <Link to={`/${name}`}>
          <img src={char.icon} alt=" Error Loading Icon" />
        </Link>: ''}
      </div>
    </div>
  ); */}