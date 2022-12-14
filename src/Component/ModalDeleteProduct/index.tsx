import { Modal } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { ModalContainer } from "./style";

interface IModalDeleteProduct {
  setOpenDeleteProduct: Dispatch<SetStateAction<boolean>>;
  openDeleteProduct: boolean;
}

export const ModalDeleteProduct = ({
  setOpenDeleteProduct,
  openDeleteProduct,
}: IModalDeleteProduct) => {

  const handleCloseModal = () => {
    setOpenDeleteProduct(false);
  };

  return (
    <>
      <Modal
        open={openDeleteProduct}
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
          <div className="titleContainer">
            <p className="title">Excluir anúncio</p>
            <button onClick={handleCloseModal}>X</button>
          </div>
          <p className="title">Tem certeza que deseja remover este anúncio?</p>
          <p className="messageDelete">Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.</p>
          <div className="container_submit">
            <button
              className="button_cancel"
              onClick={(e) => {
                e.preventDefault();
                handleCloseModal();
              }}
            >
              Cancelar
            </button>
            <button className="button_submit" type="submit">Sim, excluir anúncio</button>
          </div>
        </ModalContainer>
      </Modal>
    </>
  );
};
