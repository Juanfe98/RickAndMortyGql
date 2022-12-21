import React, { useState } from 'react';
import '../styles/modal.css';

export const Modal = ({show, children, title, onClose}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">

        <div className="modal-header">
          <h4>{title}</h4>
          <button onClick={onClose}>X</button>
        
        </div>

        <div className="modal-body">

          {children}
        
        </div>
        
      
      </div>
    </div>
  );
};