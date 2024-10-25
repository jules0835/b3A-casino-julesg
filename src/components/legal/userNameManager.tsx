import React, { useEffect, useState } from "react";
import Popup from "../display/popup";

interface UserNameManagerProps {
  setUsername: (username: string) => void;
}

const UserNameManager: React.FC<UserNameManagerProps> = ({ setUsername }) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isErrorPopupVisible, setIsErrorPopupVisible] = useState(false);

  const handleUsername = () => {
    if (usernameInput.length < 3) {
      setIsErrorPopupVisible(true);
    } else {
      setUsername(usernameInput);
      setIsPopupVisible(false);
      localStorage.setItem("username", usernameInput);
    }
  };

  useEffect(() => {
    const userNameStorage = localStorage.getItem("username");
    if (!userNameStorage) {
      setIsPopupVisible(true);
    } else {
      setUsername(userNameStorage);
    }
  }, [setUsername]);

  return (
    <>
      <Popup title="Entrez votre pseudo" isOpen={isPopupVisible} canClose={false}>
        <input
          type="text"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full"
          placeholder="Pseudo"
        />
        <button
          onClick={handleUsername}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 w-full mt-4"
        >
          Valider
        </button>
      </Popup>
      <Popup title="Erreur" isOpen={isErrorPopupVisible} canClose={true} onClose={() => setIsErrorPopupVisible(false)}>
        <p>Le pseudo doit contenir au moins 3 caractères</p>
      </Popup>
    </>
  );

}

export default UserNameManager;