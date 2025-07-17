import React from "react";
import Contact from "../sections/1Contact";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40">
      <div className="relative bg-transparent max-w-4xl w-full mx-4">
        <button
          className="absolute top-4 right-4 text-2xl text-white bg-[#ff7300] rounded-full w-10 h-10 flex items-center justify-center z-10"
          onClick={onClose}
          aria-label="Fermer"
        >
          ×
        </button>
        <Contact />
      </div>
    </div>
  );
};

export default ContactModal;