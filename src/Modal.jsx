// Modal.js
import React from 'react';

const Modal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="relative">
        <button
          className="absolute top-2 right-2 text-white text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <img src={image} alt="Expanded" className="max-w-full max-h-screen rounded-lg" />
      </div>
    </div>
  );
};

export default Modal;
