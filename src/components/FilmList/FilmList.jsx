// FilmList.jsx

import React from 'react';
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

function FilmList({ openModal }) { // Modtag openModal som en prop
  const { loading, error, data } = useQuery(GET_FILMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Star Wars Films</h2>
      <ul>
        {data.allFilms.films.map(film => (
          <li key={film.title}>
            <button onClick={() => openModal(film)}> {film.title} </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilmList;
