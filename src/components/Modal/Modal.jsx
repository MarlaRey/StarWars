import React from 'react';

const Modal = ({ film, closeModal }) => {
  if (!film) {
    return null; // Returnerer null, hvis filmobjektet ikke er defineret
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>{film.title}</h2>
        <p><strong>Director:</strong> {film.director}</p>
        <p><strong>Release Date:</strong> {film.releaseDate}</p>
      </div>
    </div>
  );
};

export default Modal;
