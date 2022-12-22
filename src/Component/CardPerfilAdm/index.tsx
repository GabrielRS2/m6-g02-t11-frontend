import { ThemeButton } from "../../Styles/ThemeButton";

import { Avatar } from '@mui/material';
import { Container } from "./style";
import { nameToAcronym } from "../Header/utils";


export const CardPerfilAdm = () => {
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
      <ThemeButton 
      backGroundColor={"var(--brand4)"}
      color={"varvar(--brand1)"}
      size={"big"}
      borderColor={"var(--brand1)"}
      handleClick={() => {console.log("Botão grande")}}
      >Criar anuncio</ThemeButton>
    </Container>
  );
};
