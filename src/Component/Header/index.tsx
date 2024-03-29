import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { TokenContext } from "../../Providers/Token";

import { HamburgerButton, HeaderContainer, PopupContainer } from "./style";
import { ThemeButton } from "../../Styles/ThemeButton";

import { nameToAcronym } from "./utils";

import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { Avatar } from "@mui/material";
import { Modal, Menu, MenuItem } from "@mui/material";
import PopupState from "material-ui-popup-state";
import {
  bindMenu,
  bindTrigger,
  usePopupState,
} from "material-ui-popup-state/hooks";
import { ModalEditProfile } from "../ModalEditProfile";
import { OpenModalContext } from "../../Providers/OpenModal";
import api from "../../Services";
import { IUser } from "../../interfaces/user";
import { ModalEditAddress } from "../ModalEditAddress";

export const Header = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openEditProfile, setOpenEditProfile] = useState<boolean>(false);
  const [openModalEditAddress, setOpenModalEditAddress] =
    useState<boolean>(false);
  const [user, setUser] = useState<IUser>();
  const { token, setToken } = useContext(TokenContext);
  const userId = localStorage.getItem("@motor:id");
  const history = useHistory();
  const { setIsOpenModal } = useContext(OpenModalContext);

  useEffect(() => {
    setToken(localStorage.getItem("@motor:token") || "token");
    if (token !== "token") {
      api
        .get(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setIsLogged(true);
          setUser(res.data.user);
        });
    } else {
      setIsLogged(false);
    }
  }, [token, setToken]);

  function handleLogout() {
    setToken("token");
    setIsLogged(false);
    localStorage.clear();
    history.push("/");
  }

  function handleClose() {
    setIsOpen(!isOpen);
  }

  function handleOpenEditProfileModal() {
    setOpenEditProfile(true);
    setIsOpenModal(true);
  }

  function handleOpenEditAddressModal() {
    setOpenModalEditAddress(true);
  }

  return (
    <>
      {openEditProfile && (
        <ModalEditProfile
          setOpenEditProfile={setOpenEditProfile}
          userId={user?.id || ""}
        />
      )}
      <ModalEditAddress
        userId={user?.id || ""}
        setOpenModalEditAddress={setOpenModalEditAddress}
        openModalEditAddress={openModalEditAddress}
      />
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        sx={{ zIndex: "1" }}
      >
        <div></div>
      </Modal>
      <HeaderContainer>
        <div
          className="logotipo"
          onClick={() => {
            history.push("");
          }}
        >
          <img src="/Assets/logoColor.svg" alt="Motor shop" />
        </div>
        <HamburgerButton
          className="hamburgerButton"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
        </HamburgerButton>
        <div className="infoContainer">
          <ul>
            <li>
              <Link to={{ pathname: "/", hash: "#carros" }}>Carros</Link>
            </li>
            <li>
              <Link to={{ pathname: "/", hash: "#motos" }}>Motos</Link>
            </li>
            <li>
              <Link to={{ pathname: "/", hash: "#leilao" }}>Leilão</Link>
            </li>
          </ul>
          {isLogged ? (
            <div className="infoLoginContainer">
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <button
                      className="loginButton"
                      {...bindTrigger(popupState)}
                    >
                      <Avatar
                        sx={{
                          bgcolor: "var(--brand2)",
                          height: "2rem",
                          width: "2rem",
                          fontSize: "0.875rem",
                          fontWeight: "700",
                        }}
                      >
                        {nameToAcronym(user?.name || "Samuel Leão")}
                      </Avatar>
                      <p>{user?.name}</p>
                    </button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem
                        sx={{
                          fontWeight: "400",
                          fontSize: "1rem",
                          color: "var(--grey2)",
                        }}
                        onClick={() => {
                          popupState.close();
                          handleOpenEditProfileModal();
                        }}
                      >
                        Editar Perfil
                      </MenuItem>
                      <MenuItem
                        sx={{
                          fontWeight: "400",
                          fontSize: "1rem",
                          color: "var(--grey2)",
                        }}
                        onClick={() => {
                          popupState.close();
                          handleOpenEditAddressModal();
                        }}
                      >
                        Editar endereço
                      </MenuItem>
                      {user?.isSeller && (
                        <MenuItem
                          sx={{
                            fontWeight: "400",
                            fontSize: "1rem",
                            color: "var(--grey2)",
                          }}
                          onClick={() => {
                            popupState.close();
                            history.push(`/dashboard/${user.id}`);
                          }}
                        >
                          Meus Anuncios
                        </MenuItem>
                      )}
                      <MenuItem
                        sx={{
                          fontWeight: "400",
                          fontSize: "1rem",
                          color: "var(--grey2)",
                        }}
                        onClick={() => {
                          popupState.close();
                          handleLogout();
                        }}
                      >
                        Sair
                      </MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </div>
          ) : (
            <div className="infoLogoutContainer">
              <button
                className="goLoginButton"
                onClick={() => {
                  history.push("/login");
                }}
              >
                Fazer login
              </button>
              <ThemeButton
                backGroundColor="var(--whiteFixed)"
                color="var(--grey0)"
                borderColor="var(--grey4)"
                size="medium"
                handleClick={() => {
                  history.push("/register");
                }}
              >
                Cadastrar
              </ThemeButton>
            </div>
          )}
        </div>
      </HeaderContainer>
      <PopupContainer isOpen={isOpen}>
        <ul>
          <li>
            <Link to={{ pathname: "/", hash: "#carros" }}>Carros</Link>
          </li>
          <li>
            <Link to={{ pathname: "/", hash: "#motos" }}>Motos</Link>
          </li>
          <li>
            <Link to={{ pathname: "/", hash: "#leilao" }}>Leilão</Link>
          </li>
        </ul>
        {isLogged ? (
          <div className="infoLoginContainerMobile">
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <button className="loginButton" {...bindTrigger(popupState)}>
                    <Avatar
                      sx={{
                        bgcolor: "var(--brand2)",
                        height: "2rem",
                        width: "2rem",
                        fontSize: "0.875rem",
                        fontWeight: "700",
                      }}
                    >
                      {nameToAcronym(user?.name || "Samuel Leão")}
                    </Avatar>
                    <p>user?.name</p>
                  </button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem
                      sx={{
                        fontWeight: "400",
                        fontSize: "1rem",
                        color: "var(--grey2)",
                      }}
                      onClick={() => {
                        handleOpenEditProfileModal();
                      }}
                    >
                      Editar Perfil
                    </MenuItem>
                    <MenuItem
                      sx={{
                        fontWeight: "400",
                        fontSize: "1rem",
                        color: "var(--grey2)",
                      }}
                      onClick={() => handleOpenEditAddressModal()}
                    >
                      Editar endereço
                    </MenuItem>
                    {user?.isSeller && (
                      <MenuItem
                        sx={{
                          fontWeight: "400",
                          fontSize: "1rem",
                          color: "var(--grey2)",
                        }}
                        onClick={() => {
                          history.push(`/dashboard/${user.id}`);
                        }}
                      >
                        Meus Anuncios
                      </MenuItem>
                    )}
                    <MenuItem
                      sx={{
                        fontWeight: "400",
                        fontSize: "1rem",
                        color: "var(--grey2)",
                      }}
                      onClick={() => handleLogout()}
                    >
                      Sair
                    </MenuItem>
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
              handleClick={() => {
                history.push("/register");
              }}
            >
              Cadastrar
            </ThemeButton>
          </div>
        )}
      </PopupContainer>
    </>
  );
};
