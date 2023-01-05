import { useContext } from "react";
import { OpenModalContext } from "./Providers/OpenModal";
import { Routes } from "./Routes";
import { GlobalStyle } from "./Styles/global";
import { Modal } from "./Styles/Modal";

export const App = () => {
  const { isOpenModal } = useContext(OpenModalContext);
  return (
    <div className="App" style={{ position: "relative" }}>
      {isOpenModal && <Modal />}
      <GlobalStyle />
      <Routes />
    </div>
  );
};
