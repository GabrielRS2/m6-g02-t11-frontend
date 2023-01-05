import { ThemeButton } from "../../Styles/ThemeButton";

import { Avatar } from '@mui/material';
import { Container } from "./style";
import { nameToAcronym } from "../Header/utils";

interface ICardPerfilAdmProps {
  isSellerPage: boolean;
  handleOpenModal: () => void;
}

export const CardPerfilAdm = ({isSellerPage, handleOpenModal}: ICardPerfilAdmProps) => {
  return (
    <Container>
      <Avatar sx={{ 
        bgcolor: "var(--brand2)", 
        height: "6.5rem", 
        width: "6.5rem", 
        fontSize: "2rem", 
        fontWeight: "500" }}
        >
        {nameToAcronym("Samuel Leão")}
      </Avatar>
      <div className="nameContainerAdmPage">
        <h3>Samuel Leão <span>Anunciante</span></h3>
      </div>
      <p className="descriptionPerfilAdm">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </p>

      {isSellerPage && 
        <ThemeButton 
        backGroundColor={"var(--whiteFixed)"}
        color={"var(--brand1)"}
        size={"big"}
        borderColor={"var(--brand1)"}
        hoverbackGroundColor={"var(--brand4)"}
        handleClick={() => {handleOpenModal()}}
        >Criar anuncio</ThemeButton>
      }
    </Container>
  );
};
