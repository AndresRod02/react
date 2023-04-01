import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState({ next: null, prev: null });
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [maxPageButtons, setMaxPageButtons] = useState(5);
  const [types, setTypes] = useState([]);
  const [searchType, setSearchType] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [slider, setSlider] = useState(false)
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageButtons = Math.min(maxPageButtons, pages.count);
    const startButton = Math.max(1, Math.min(page - Math.floor(pageButtons / 2), pages.count - pageButtons + 1));
    const endButton = Math.min(pages.count, startButton + pageButtons - 1);
    function range(start, end) {
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
      }
      const username = useSelector(state => state.username)
  useEffect(() => {
    getData(page);
  }, [page]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then((response) => {
        setTypes(response.data.results);
        getData()
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const getData = () => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/?limit=10000`)
    .then((resp) => {
      const promises = resp.data.results.map((result) => {
        return axios.get(result.url);
      });
      Promise.all(promises).then((responses) => {
        const charactersWithDetails = responses.map((response) => {
          return {
            name: response.data.name,
            image: response.data.sprites.front_default,
            type: response.data.types[0].type.name,
            hp: response.data.stats[0].base_stat,
            attack: response.data.stats[1].base_stat,
            defense: response.data.stats[2].base_stat,
            speed: response.data.stats[5].base_stat,
          };
        });
        setCharacters(charactersWithDetails);
        setPages({
          next: resp.data.next,
          prev: resp.data.previous,
          count: resp.data.count,
        });
      });
    })
    .catch((error) => console.error(error));
};


  const filteredCharacters = characters
  .filter((character) =>
  Object.values(character).some(
    (value) =>
      typeof value === "string" &&
      value.toLowerCase().includes(searchTerm.toLowerCase())
  ) && (searchType === "" || character.type === searchType)
)
  .slice(startIndex, endIndex);


const handleTypeChange = (e) => {
    setSearchType(e.target.value);
    setPage(1);
    getData();
  }
  
  
  return (
    <div>
  <h1>Pokedex</h1>
  <h3>Welcome {username}, here you can find your favorite pokemon</h3>
{ !slider && <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search Pokemon by Name" />}
{ slider && <select value={searchType} onChange={handleTypeChange}>
  <option value="">Seleccionar tipo</option>
  {types.map((type) => (
    <option key={type.name} value={type.name}>{type.name}</option>
  ))}
</select>}
<input type="checkbox" value={slider} onChange={()=>setSlider(!slider)}/>

  <ul>
    {filteredCharacters.map((character) => (
      <li key={character.name}>
        <Link to={`/characters/${character.name}`}>
          <img src={character.image} alt="" />
          <h3>{character.name}</h3>
          <p>Type: {character.type}</p>
          <p>HP: {character.hp}</p>
          <p>Attack: {character.attack}</p>
          <p>Defense: {character.defense}</p>
          <p>Speed: {character.speed}</p>
        </Link>
      </li>
    ))}
  </ul>

  {range(startButton, endButton).map((pageNumber) => {
  const isActive = pageNumber === page;
  return (
    <button
      key={pageNumber}
      onClick={() => {
        setPage(pageNumber);
        getData(pageNumber);
      }}
      className={isActive ? "active" : ""}
    >
      {pageNumber}
    </button>
  );
})}

</div>
  );
};

export default Characters;
