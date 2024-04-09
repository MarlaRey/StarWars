import { useQuery, gql } from '@apollo/client';

const GET_CHARACTERS = gql`
  query GetCharacters {
    allPeople {
      people {
        name
        birthYear
      }
    }
  }
`;

function CharacterList() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <ul>
        {data.allPeople.people.map(character => (
          <li key={character.name}>
            <strong>Name:</strong> {character.name}, <strong>Birth Year:</strong> {character.birthYear}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;
