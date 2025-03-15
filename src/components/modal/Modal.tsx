import React, { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  // Close modal on pressing Escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black opacity-50" 
        onClick={onClose}
      />
      {/* Modal content */}
      <div className="relative bg-gray-800 rounded-lg p-6 z-10 max-w-lg w-full">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-white text-2xl focus:outline-none"
          aria-label="Close modal"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
