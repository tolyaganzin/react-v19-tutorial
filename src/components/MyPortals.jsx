import { useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './../styles/my-portals.module.css'

// Portals are particularly useful for:
// Modals and dialogs
// Tooltips
// Floating menus
// Notifications

const Modal = ({ isOpen, onClose, children }) =>  { // Modal component that uses a portal to render its children outside the main DOM hierarchy
  if (!isOpen) return null;
  const modalStyle = {
    background: 'white',
    padding: '20px',
    borderRadius: '8px'
  };

  console.log(styles.backdrop);

  return createPortal(
    <div className={styles.backdrop}>
      <div style={modalStyle}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
}

const MyPortals = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the modal's open/close status

  return (
    <>
      <h3 style={{backgroundColor: "lightblue"}}>My Portals Component</h3>
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Modal Content</h2>
        <p>This content is rendered outside the App component!</p>
      </Modal>
    </>
  );
}

export default MyPortals;