import React from "react";

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default Modal;
