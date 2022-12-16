import React, { useState } from 'react';
import '../styles/modal.css';

export const Modal = ({show, episodes, name, onClose}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">

        <div className="modal-header">
          <h4>{name}</h4>
          <button onClick={onClose}>X</button>
        
        </div>

        <div className="modal-body">

          <ul type="1">
            {episodes.map((item,index) => (
            <li key={index}>{index+1}. {item}</li>
            ))}
          </ul>
        
        </div>
        
      
      </div>
    </div>
  );
};