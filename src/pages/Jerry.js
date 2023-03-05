import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Jerry() {
  const [jerry, setJerry] = useState([]);

  async function getMorty() {
    let url = "https://rickandmortyapi.com/api/character/?name=Jerry";

    try {
      let response = await fetch(url);
      let teamJerry = await response.json();
      setJerry(teamJerry.results);
    } catch (error) {
      console.log("something went wrong");
    }
  }

  useEffect(() => {
    getMorty();
  }, []);

  return (
    <>
      <h1>Jerry Group</h1>
      <div className="flexy">
        {jerry.map((jerry) => (
          <div>
            <div className="listNamed">
              <h2>{jerry.name}</h2>
            </div>
            <div className="speciez">
              <h3>Species:{jerry.species}</h3>
            </div>
            <img src={jerry.image} alt=" Error Loading Icon" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Jerry;
