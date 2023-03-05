import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Alien() {
  const [alien, setAlien] = useState([]);
  let [page, setPage] = useState(0);

  let ranNum = function () {
    return Math.floor(Math.random() * 4 + 1);
    // 0 - 0.99
    // 0.00 - 4.839383
    // 1.00 - 5.839383
    // 1 - 5
    
  };

  async function getRick() {
    console.log('mathrandom:', Math.random)
    console.log('ranNum:',ranNum())
    console.log('page before:',page)
    setPage(ranNum());
    console.log('page:',page)
    let url = `https://rickandmortyapi.com/api/character/?page=${page}&species=alien`;

    try {
      let response = await fetch(url);
      let teamMorty = await response.json();
      console.log('teamMorty:',teamMorty)
      setAlien(teamMorty.results);
    } catch (error) {
      console.log("something went wrong");
    }
  }

  useEffect(() => {
    getRick();
  }, [page]);

  useEffect(() => {
    console.log('page:',);
  }, [page]);

  // useEffect(() => {
  //   setPage(ranNum());
  // }, []);


  return (
    <>
      <div>
        <h1>Random Aliens </h1>
      </div>
      <div className="flexy">
        {alien.map((alien) => (
          <div>
            <h2>{alien.name}</h2>
            <div className="speciez">
              <h3>Species:{alien.species}</h3>
            </div>
            <img src={alien.image} alt=" Error Loading Icon" />
          </div>
        ))}
      </div>
    </>
  );
}
export default Alien;
