import { ThemeButton } from "../../Styles/ThemeButton";

import { Container } from "./style";

import { nameToAcronym } from "../../utils";

import { Avatar } from '@mui/material';
import { IUser } from "../../interfaces/user";

interface ICardAdmDetailProps {
  user: IUser
}

export const CardAdmDetail = ({ user }: ICardAdmDetailProps ) => {
  return (
  <Container>
    <div className="avatarMobile">
      <Avatar sx={{ 
      bgcolor: "var(--brand2)", 
      height: "4.813rem", 
      width: "4.813rem", 
      fontSize: "1.625rem", 
      fontWeight: "500" }}
      >
      {nameToAcronym(`${user.name}`)}</Avatar>
    </div>
    <div className="avatar">
      <Avatar sx={{ 
      bgcolor: "var(--brand2)", 
      height: "6.5rem", 
      width: "6.5rem", 
      fontSize: "2rem", 
      fontWeight: "500" }}
      >
      {nameToAcronym(`${user.name}`)}</Avatar>
    </div>
    <p className="userName">{user.name}</p>
    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
    <ThemeButton 
      backGroundColor={"var(--grey0)"}
      color={"var(--whiteFixed)"}
      size={"big"}
      borderColor={"var(--grey0)"}
      handleClick={() => {console.log("todos anuncios")}}
      >Ver todos anuncios</ThemeButton>
  </Container>
  );
};
