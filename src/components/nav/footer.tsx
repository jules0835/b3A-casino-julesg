import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-1 fixed bottom-0 w-full">
      <div className="container mx-auto text-center text-xs">
        <p>&copy; 2024 Casino Game de Jules G. Tous droits réservés.</p>
        <p>
          Jouer comporte des risques : endettement, dépendance, isolement. Appelez le 09 74 75 13 13 (appel non surtaxé).
        </p>
      </div>
    </footer>
  );
};

export default Footer;