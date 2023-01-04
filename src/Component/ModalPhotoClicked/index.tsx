import { Modal } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { CarImageContainer, PhotoClickedContainer } from "./styled";

interface IModalPhotoClicked {
  imageSrc: string;
  setOpenModalPhotoClicked: Dispatch<SetStateAction<boolean>>;
  openModalPhotoClicked: boolean;
}

export const ModalPhotoClicked = ({
  imageSrc,
  setOpenModalPhotoClicked,
  openModalPhotoClicked,
}: IModalPhotoClicked) => {
  const handleCloseModal = () => {
    setOpenModalPhotoClicked(false);
    console.log(openModalPhotoClicked);
  };

  return (
    <>
      <Modal
        open={openModalPhotoClicked}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          paddingTop:"6rem"
        }}
      >
        <PhotoClickedContainer>
          <div>
            <p>Imagem do Veículo</p>
            <button onClick={handleCloseModal}>X</button>
          </div>
          <CarImageContainer>
            <img src={imageSrc} alt="car-clicked" />
          </CarImageContainer>
        </PhotoClickedContainer>
      </Modal>
    </>
  );
};
