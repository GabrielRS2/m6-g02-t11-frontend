import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { TokenContext } from "../../Providers/Token";

import { HamburgerButton, HeaderContainer, PopupContainer } from "./style";
import { ThemeButton } from "../../Styles/ThemeButton";

import { nameToAcronym } from "./utils";

import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { Avatar } from '@mui/material';
import { Modal, Menu, MenuItem } from '@mui/material';
import PopupState from "material-ui-popup-state";
import { bindMenu, bindTrigger, usePopupState } from "material-ui-popup-state/hooks";
import api from "../../Services";
import { ModalEditProfile } from "../ModalEditProfile";
import { OpenModalContext } from "../../Providers/OpenModal";

export const Header = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openEditProfile, setOpenEditProfile] = useState<boolean>(false);
  const { token, setToken } = useContext(TokenContext);
  const history = useHistory();
  const { setIsOpenModal } = useContext(OpenModalContext);

  useEffect(() => {
    setToken(localStorage.getItem("@motor:token") || "");
    if (token !== "") {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [token, setToken]);

  function handleLogout() {
    setToken("");
    setIsLogged(false);
    localStorage.clear();
    history.push("/");
  }

  function handleClose() {
    setIsOpen(!isOpen)
  }

  function handleOpenEditProfileModal() {
    setOpenEditProfile(true)
    setIsOpenModal(true)
  }

  return (
    <>
    {openEditProfile && <ModalEditProfile setOpenEditProfile={setOpenEditProfile}/>}
      <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      sx={{ zIndex: '1' }}
      >
        <div></div>
      </Modal>
      <HeaderContainer>
        <div>
          <img src="/Assets/logoColor.svg" alt="Motor shop"/>
        </div>
        <HamburgerButton 
        className="hamburgerButton" 
        onClick={() => {
          setIsOpen(!isOpen)
          }}>
          {isOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
        </HamburgerButton>
        <div className="infoContainer">
          <ul>
            <li><button onClick={() => history.push("/")}>Carros</button></li>
            <li><button onClick={() => history.push("/")}>Motos</button></li>
            <li><button onClick={() => history.push("/")}>Leil??o</button></li>
          </ul>
          {isLogged ? (
            <div className="infoLoginContainer">
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <button className="loginButton" {...bindTrigger(popupState)}>
                      <Avatar sx={{ 
                      bgcolor: "var(--brand2)", 
                      height: "2rem", 
                      width: "2rem", 
                      fontSize: "0.875rem", 
                      fontWeight: "700" }}
                      >
                      {nameToAcronym("Samuel Le??o")}</Avatar>
                      <p>Samuel Le??o</p>
                    </button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem sx={{ fontWeight: '400', fontSize: "1rem", color: "var(--grey2)" }} onClick={() => {handleOpenEditProfileModal()}}>Editar Perfil</MenuItem>
                      <MenuItem sx={{ fontWeight: '400', fontSize: "1rem", color: "var(--grey2)" }} onClick={popupState.close}>Editar endere??o</MenuItem>
                      <MenuItem sx={{ fontWeight: '400', fontSize: "1rem", color: "var(--grey2)" }} onClick={popupState.close}>Minhas Compras</MenuItem>
                      <MenuItem sx={{ fontWeight: '400', fontSize: "1rem", color: "var(--grey2)" }} onClick={() => handleLogout()}>Sair</MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </div>
          ) : (
            <div className="infoLogoutContainer">
              <button className="goLoginButton" onClick={() => {history.push("/login")}}>Fazer login</button>
              <ThemeButton
                backGroundColor="var(--whiteFixed)"
                color="var(--grey0)"
                borderColor="var(--grey4)"
                size="medium"
                handleClick={() => {history.push("/register")}}
              >Cadastrar</ThemeButton>
            </div>  
          )}
        </div>
      </HeaderContainer>
      <PopupContainer isOpen={isOpen}>
        <ul>
          <li onClick={() => {history.push("/")}}>Carros</li>
          <li onClick={() => {history.push("/")}}>Motos</li>
          <li onClick={() => {history.push("/")}}>Leil??o</li>
        </ul>
        {isLogged ? (
          <div className="infoLoginContainerMobile">
              <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <button className="loginButton" {...bindTrigger(popupState)}>
                  <Avatar sx={{ 
                  bgcolor: "var(--brand2)", 
                  height: "2rem", 
                  width: "2rem", 
                  fontSize: "0.875rem", 
                  fontWeight: "700" }}
                  >
                  {nameToAcronym("Samuel Le??o")}</Avatar>
                  <p>Samuel Le??o</p>
                  </button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem sx={{ fontWeight: '400', fontSize: "1rem", color: "var(--grey2)" }} onClick={() => {handleOpenEditProfileModal()}}>Editar Perfil</MenuItem>
                    <MenuItem sx={{ fontWeight: '400', fontSize: "1rem", color: "var(--grey2)" }} onClick={popupState.close}>Editar endere??o</MenuItem>
                    <MenuItem sx={{ fontWeight: '400', fontSize: "1rem", color: "var(--grey2)" }} onClick={popupState.close}>Minhas Compras</MenuItem>
                    <MenuItem sx={{ fontWeight: '400', fontSize: "1rem", color: "var(--grey2)" }} onClick={() => handleLogout()}>Sair</MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </div>
        ) : (
          <div className="infoLogoutContainerMobile">
            <Link to={"/login"}>Fazer login</Link>
            <ThemeButton
              backGroundColor="var(--whiteFixed)"
              color="var(--grey0)"
              borderColor="var(--grey4)"
              size="auto"
              handleClick={() => {history.push("/register")}}
            >Cadastrar</ThemeButton>
          </div>  
        )}
      </PopupContainer>
    </>
  );
};
