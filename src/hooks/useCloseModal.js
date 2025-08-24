import { useEffect } from "react";

const useCloseModal = (showModal, closeModal) => {
  useEffect(() => {
    const escFunction = (event) => {
      if (event.key === "Escape") {
        showModal && closeModal();
      }
    };

    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [showModal]);
};

export default useCloseModal;
