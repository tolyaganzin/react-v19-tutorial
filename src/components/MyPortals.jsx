import { useState } from 'react';
import { createPortal } from 'react-dom';

// Portals are particularly useful for:
// Modals and dialogs
// Tooltips
// Floating menus
// Notifications

const Modal = ({ isOpen, onClose, children }) =>  { // Modal component that uses a portal to render its children outside the main DOM hierarchy
  if (!isOpen) return null;

  return createPortal(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '8px'
      }}>
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
      <h3>My Portals Component</h3>
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