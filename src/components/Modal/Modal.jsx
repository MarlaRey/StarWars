import React from 'react';
import './Modal.scss';

function Modal({ film, closeModal }) {
  if (!film) return null;

  return (
    <div>
      <div className="overlay" onClick={closeModal}></div> 
      <div className="modal active" onClick={closeModal}> 
        <div>
          <h3>{film.title}</h3>
          <p>Director: {film.director}</p>
          <p>Release Date: {film.releaseDate}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
