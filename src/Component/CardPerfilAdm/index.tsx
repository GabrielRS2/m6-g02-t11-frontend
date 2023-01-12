import { ThemeButton } from "../../Styles/ThemeButton";

import { Avatar } from "@mui/material";
import { Container } from "./style";
import { nameToAcronym } from "../Header/utils";
import { IUser } from "../../interfaces/user";

interface ICardPerfilAdmProps {
  isSellerPage: boolean;
  handleOpenModal: () => void;
  pageOwner: IUser;
}

export const CardPerfilAdm = ({
  isSellerPage,
  handleOpenModal,
  pageOwner,
}: ICardPerfilAdmProps) => {
  return (
    <Container>
      <Avatar
        sx={{
          bgcolor: "var(--brand2)",
          height: "6.5rem",
          width: "6.5rem",
          fontSize: "2rem",
          fontWeight: "500",
        }}
      >
        {nameToAcronym(pageOwner?.name)}
      </Avatar>
      <div className="nameContainerAdmPage">
        <h3>
          {pageOwner.name} <span>Anunciante</span>
        </h3>
      </div>
      <p className="descriptionPerfilAdm">{pageOwner.description}</p>

      {isSellerPage && (
        <ThemeButton
          backGroundColor={"var(--whiteFixed)"}
          color={"var(--brand1)"}
          size={"big"}
          borderColor={"var(--brand1)"}
          hoverbackGroundColor={"var(--brand4)"}
          handleClick={() => {
            handleOpenModal();
          }}
        >
          Criar anuncio
        </ThemeButton>
      )}
    </Container>
  );
};
