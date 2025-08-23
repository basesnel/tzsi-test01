import { useEffect } from "react";

const useCloseModal = (showModal, closeModal) => {
  // const mediaQuery = "(max-width: 768px)";
  // const query = window.matchMedia(mediaQuery);

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

  // useLayoutEffect(() => {
  //   const updateValue = () => {
  //     !query.matches && closeMenu();
  //   };

  //   query.addEventListener("change", updateValue);

  //   return () => query.removeEventListener("change", updateValue);
  // }, [query]);
};

export default useCloseModal;
