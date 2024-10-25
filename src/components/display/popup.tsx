import React from 'react';

interface PopupProps {
  title: string;
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  canClose?: boolean;
}

const Popup: React.FC<PopupProps> = ({ title, isOpen, onClose, children, canClose = true }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800 text-center mt-5">{title}</h2>
        </div>
        <div className="mb-6">{children}</div>
        {
          canClose && (
            <div className="text-right">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Fermer
              </button>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Popup;
