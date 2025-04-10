import { useState } from 'react';
import movies from './data/movies';

function App() {
  const [searchCategory, setSearchCategory] = useState('');



  return (
    <>
      <h1>Movie Filter</h1>
      <section>
        <h2>Cerca Film</h2>
        <label>Cerca per categoria</label>
        <select value={searchCategory} onChange={e => setSearchCategory(e.target.value)}>
          <option value="">---</option>
          <option>Fantascienza</option>
          <option>Thriller</option>
          <option>Romantico</option>
          <option>Azione</option>
        </select>
      </section>
      {movies.map((movie, index) => <article key={index}>
        <h3>{movie.title}</h3>
        <p>Genere: <strong>{movie.genre}</strong></p>
      </article>)}
    </>
  );
}

export default App;
