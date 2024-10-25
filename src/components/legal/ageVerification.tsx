import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Popup from '../display/popup';

const AgeVerification: React.FC = () => {
  const [isMajeur, setIsMajeur] = useState<boolean | null>(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isUnderagePopupVisible, setIsUnderagePopupVisible] = useState(false);

  useEffect(() => {
    const cookieValue = Cookies.get('isMajeur');
    if (!cookieValue) {
      setTimeout(() => {
        setIsPopupVisible(true);
      }, 5000);
    } else {
      const isMajeurValue = cookieValue === 'true';
      setIsMajeur(isMajeurValue);
      if (!isMajeurValue) {
        setIsUnderagePopupVisible(true);
      }
    }
  }, []);

  const handleResponse = (response: boolean) => {
    const expirationDate = new Date(new Date().getTime() + 1000000);
    if (response) {
      Cookies.set('isMajeur', 'true', { expires: expirationDate });
      setIsMajeur(true);
      setIsUnderagePopupVisible(false);
    } else {
      Cookies.set('isMajeur', 'false', { expires: expirationDate });
      setIsMajeur(false);
      setIsUnderagePopupVisible(true);
    }
    setIsPopupVisible(false);

  };

  return (
    <>
      <Popup title="Êtes-vous majeur(e) ?" isOpen={isPopupVisible} canClose={false}>
        <div className="flex justify-center space-x-4 mt-7">
          <button
            onClick={() => handleResponse(true)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Oui
          </button>
          <button
            onClick={() => handleResponse(false)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Non
          </button>
        </div>
        <div className="container mx-auto text-center text-xs mt-7">
          <p>
            Jouer comporte des risques : endettement, dépendance, isolement. Appelez le 09 74 75 13 13 (appel non surtaxé).
          </p>
        </div>
      </Popup>
      <Popup title="Accès refusé" isOpen={isUnderagePopupVisible} canClose={false}>
        <div className="text-center">
          <p>Vous devez être majeur(e) pour accéder à ce site. Veuillez fermer la page.</p>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mt-10" onClick={() => handleResponse(true)}>
            Au final, je suis majeur(e), tkt
          </button>
        </div>
      </Popup>
    </>
  );
};

export default AgeVerification;
