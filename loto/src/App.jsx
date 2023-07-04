import { useState } from 'react'
import './App.css'

function App() {

  const [tirage, setTirage] = useState(0);
  const [historiqueTirage, setHistoriqueTirage] = useState ([]);
  const [maxi, setMaxi]=useState(90);

  function Max(e) {
    setMaxi(e.target.value);
  }

  const handleClick = () => {
    setTirage((Math.floor(Math.random() * maxi)));
    if (historiqueTirage.includes(tirage) == false) {
    setHistoriqueTirage([tirage, ...historiqueTirage]);
    console.log("tableau", historiqueTirage);
    }
    else {
      alert("Même chiffre");
    }
  };

      return (
        <div>
          <div className='top'>
            <h1 className="titre">Tirage au Sort</h1>
            <button onClick={handleClick}>Tirer au sort</button>
            <br>
            </br>
        <input type="number" onChange={Max}/>
          </div>
        <p className="resultat">{tirage}</p>
        <p className='anciens'>Vos anciens numéros :</p> 
          <div className="resultats">
        {historiqueTirage.map((index) => (
        <tr key={index}>
          <td>{index}</td>
          </tr>
        ))}
          </div>
        </div>
        );
}

export default App 

