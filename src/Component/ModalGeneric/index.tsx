import { Modal } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useHistory } from "react-router-dom";
import { ThemeButton } from "../../Styles/ThemeButton";
import { ModalContainer } from "./style";

interface IModalCreateAccountSuccess {
  setOpen: Dispatch<SetStateAction<boolean>>;
  openStatus: boolean;
  modal: { title: string; titleSucess: string; messageSucess: string[] };
  button?: {
    active: boolean;
    text: string;
    onClick: () => void;
  };
}

export const ModalGeneric = ({
  setOpen,
  openStatus,
  modal,
  button,
}: IModalCreateAccountSuccess) => {
  const history = useHistory();

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={openStatus}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          paddingTop: "5rem",
          paddingLeft: "0.75rem",
          paddingRight: "0.75rem",
        }}
      >
        <ModalContainer>
          {modal && (
            <>
              <div className="titleSucessContainer">
                <p className="titleSucess">{modal.title}</p>
                <button onClick={handleCloseModal}>X</button>
              </div>
              <p className="titleSucess">{modal.titleSucess} </p>
              <div className="message">
                {modal.messageSucess.map((msg) => {
                  return <p className="messageSucess">{msg}</p>;
                })}
              </div>
            </>
          )}
          {button?.active && (
            <ThemeButton
              backGroundColor={"var(--brand1)"}
              color={"var(--whiteFixed)"}
              size={"medium50"}
              borderColor={"var(--brand1)"}
              handleClick={button.onClick}
            >
              {button.text}
            </ThemeButton>
          )}
        </ModalContainer>
      </Modal>
    </>
  );
};
