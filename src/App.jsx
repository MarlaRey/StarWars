import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Modal from './components/Modal/Modal';
import Footer from './components/Footer/Footer';
import FilmList from './components/FilmList/FilmList';


const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache()
});

function App() {
  const [selectedFilm, setSelectedFilm] = useState(null);

  const openModal = (film) => {
    setSelectedFilm(film);
  };
  
  const closeModal = () => {
    setSelectedFilm(null);
  };

  return (
    <ApolloProvider client={client}>
      <div className="container">
        <FilmList openModal={openModal} /> {/* Send openModal-funktionen som en prop */}
        <Modal film={selectedFilm} closeModal={closeModal} />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
