import { Modal } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useHistory } from "react-router-dom";
import { ThemeButton } from "../../Styles/ThemeButton";
import { ModalContainer } from "./style";

interface IModalCreateAccountSuccess {
  setOpenCreateAccountSuccess: Dispatch<SetStateAction<boolean>>;
  openCreateAccountSuccess: boolean;
}

export const ModalCreateAccountSuccess = ({
  setOpenCreateAccountSuccess,
  openCreateAccountSuccess,
}: IModalCreateAccountSuccess) => {

  const history = useHistory()

  const handleCloseModal = () => {
    setOpenCreateAccountSuccess(false);
  };

  return (
    <>
      <Modal
        open={openCreateAccountSuccess}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          paddingTop: "6rem",
          paddingLeft: "0.75rem",
          paddingRight: "0.75rem",
        }}
      >
        <ModalContainer>
          <div className="titleSucessContainer">
            <p className="titleSucess">Sucesso!</p>
            <button onClick={handleCloseModal}>X</button>
          </div>
          <p className="titleSucess">Sua conta foi criada com sucesso!</p>
          <p className="messageSucess">Agora você poderá ver seus negócios crescendo em grande escala</p>
          <ThemeButton 
            backGroundColor={"var(--brand1)"}
            color={"var(--whiteFixed)"}
            size={"medium50"}
            borderColor={"var(--brand1)"}
            handleClick={() => {history.push("/login")}}
          >Ir para o login</ThemeButton>
        </ModalContainer>
      </Modal>
    </>
  );
};
