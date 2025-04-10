import { useState, useEffect } from 'react';
import movies from './data/movies';


function App() {
  const [films, setFilms] = useState(movies);
  const [filteredFilms, SetFilteredFilms] = useState(films);
  const [searchCategory, setSearchCategory] = useState('');
  const [searchTitle, setSearchTitle] = useState('');
  const [newFilm, setNewFilm] = useState('');

  useEffect(() => {

    let updateListFilms = films;
    if (searchCategory !== '') {
      updateListFilms = updateListFilms.filter(film => film.genre == searchCategory);
    }

    if (searchTitle !== '') {
      updateListFilms = updateListFilms.filter(film => film.title.includes(searchTitle));
    }

    SetFilteredFilms(updateListFilms);
  }, [searchCategory, searchTitle, films]);

  const addNewFilm = (e) => {
    e.preventDefault();
    const newFilmObj = {
      title: newFilm,
      genre: 'Azione'
    };
    setFilms([...films, newFilmObj]);
    setNewFilm('');
  };

  return (
    <>
      <h1>Movie Filter</h1>
      <section>
        <h2>Cerca Film</h2>
        <label>Cerca per titolo</label>
        <input type="text" value={searchTitle} onChange={(e) => setSearchTitle(e.target.value)} />
        <label>Cerca per categoria</label>
        <select value={searchCategory} onChange={e => setSearchCategory(e.target.value)}>
          <option value="">---</option>
          <option>Fantascienza</option>
          <option>Thriller</option>
          <option>Romantico</option>
          <option>Azione</option>
        </select>
      </section>
      {filteredFilms.map((film, index) => <article key={index}>
        <h3>{film.title}</h3>
        <p>Genere: <strong>{film.genre}</strong></p>
      </article>)}
      <h2>Aggiungere Film</h2>
      <form onSubmit={addNewFilm} >
        <input type="text" value={newFilm} onChange={e => setNewFilm(e.target.value)} />
        <button>Aggiungi Film</button>
      </form>
    </>
  );
}

export default App;
