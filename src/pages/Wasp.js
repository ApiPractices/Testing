import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Alien() {
  const [wasp, setWasp] = useState([]);

  async function getWasp() {
    let url = "https://rickandmortyapi.com/api/character/?type=wasp";
    try {
      let response = await fetch(url);
      let allWasps = await response.json();
      setWasp(allWasps.results);
    } catch (error) {
      console.log("something went wrong");
    }
  }

  useEffect(() => {
    getWasp();
  }, []);

  return (
    <>
      <div>
        <h1>WASPS</h1>
      </div>
      <div className="flexy">
        {wasp.map((alien) => (
          <div>
            <h2>{alien.name}</h2>
            <div className="speciez">
              <h3>Species:{alien.species}</h3>
              <h3>Type:{alien.type}</h3>
            </div>
            <img src={alien.image} alt=" Error Loading Icon" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Alien;
