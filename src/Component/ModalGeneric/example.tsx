import { useState } from "react";
import { ModalGeneric } from ".";
import { ThemeButton } from "../../Styles/ThemeButton";

export const ExampleModalGeneric = () => {
  //controla o modal
  const [open, setOpen] = useState(false);

  // serve para tipar as propriedades necessárias
  const [modalContent, setModalContent] = useState({
    title: "",
    titleSucess: "",
    messageSucess: [""],
  });
  const [buttonContent, setButtonContent] = useState({
    active: false,
    text: "",
    onClick: () => {},
  });

  return (
    <>
      <ModalGeneric
        setOpen={setOpen}
        openStatus={open}
        modal={modalContent}
        button={buttonContent}
      />
      <ThemeButton
        backGroundColor={"var(--grey0)"}
        color={"var(--whiteFixed)"}
        size={"big"}
        borderColor={"var(--grey0)"}
        handleClick={() => {
          setModalContent({
            title: "Sucesso!",
            titleSucess: "Teste de modal",
            messageSucess: [
              "o Botão do Modal aceita-se 3 propiedades passadas como objeto como no exemplo abaixo a configração desse botão",
              "{",
              " active: true,// ele deve estar como true afim de ser exibido no //modal",
              `text: "ir para a home",//texto do botão`,
              `onClick: () => { //função do onClick`,
              `console.log("ir para a home");`,
              "},",
              "}",
            ],
          });
          setButtonContent({
            active: true,
            text: "ir para a home",
            onClick: () => {
              console.log("ir para a home");
            },
          });
          setOpen(true);
        }}
      >
        Abrir modal
      </ThemeButton>
    </>
  );
};
