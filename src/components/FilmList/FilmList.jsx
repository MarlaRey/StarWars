import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_FILMS = gql`
  query GetFilms {
    allFilms {
      films {
        title
        director
        releaseDate
      }
    }
  }
`;

function FilmList({ openModal }) {
  const { loading, error, data } = useQuery(GET_FILMS);
  const [searchTerm, setSearchTerm] = useState('');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Filtrér filmene baseret på søgetermen
  const filteredFilms = data.allFilms.films.filter(film =>
    film.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Star Wars Films</h2>
      <input
        type="text"
        placeholder="Search for a film..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredFilms.map(film => (
          <li key={film.title}>
            <button onClick={() => openModal(film)}> {film.title} </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilmList;
