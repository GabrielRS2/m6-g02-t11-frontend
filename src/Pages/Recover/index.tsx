import { Footer } from "../../Component/Footer";
import { Header } from "../../Component/Header";
import { Container, Form, FormContainer } from "./style";
import { ThemeInputStandart } from "../../Styles/ThemeInput";
import { ThemeButton } from "../../Styles/ThemeButton";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useHistory } from "react-router-dom";
import api from "../../Services";
import { ModalGeneric } from "../../Component/ModalGeneric";
import { useState } from "react";

interface IData {
  email?: string;
}

export const Recover = () => {
  const [open, setOpen] = useState(false);
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
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data: IData) => {
    console.log(data.email);
    api
      .post("login/reset-password/", data)
      .then((res) => {
        console.log(res.data);
        setModalContent({
          title: "Sucesso!",
          titleSucess: "Sua recuperação de senha foi aceita",
          messageSucess: [
            "Enviamos um link para a criação de uma nova senha para o seu email. Siga as instruções para redefinir a sua nova senha",
          ],
        });
        setOpen(true);
      })
      .catch((res) => {
        setModalContent({
          title: "OOOPS!",
          titleSucess: "Email não encontrado",
          messageSucess: ["Verifique seu email e tente novamente."],
        });
        setOpen(true);
      });
  };

  return (
    <>
      <ModalGeneric
        setOpen={setOpen}
        openStatus={open}
        modal={modalContent}
        button={buttonContent}
      />
      <Header />
      <Container>
        <FormContainer>
          <p className="title">Recuperação de senha</p>
          <Form onSubmit={handleSubmit(onSubmitFunction)}>
            <ThemeInputStandart
              inputType="text"
              labelText="Usuário"
              placeholderText="Digitar usuário"
              fieldContext={register("email")}
              choseWidth="100vw"
              error={String(errors.email?.message)}
            />
            <div className="loginLink">
              <Link to={"/login"}>ir para o login</Link>
            </div>
            <ThemeButton
              backGroundColor={"var(--brand1)"}
              color={"var(--whiteFixed)"}
              size={"big50"}
              borderColor={"var(--brand1)"}
              type="submit"
            >
              Enviar
            </ThemeButton>
          </Form>
          <div className="registerLink">
            <Link to={"/register"}>Ainda não possui conta?</Link>
          </div>
          <ThemeButton
            backGroundColor={"var(--whiteFixed)"}
            color={"var(--grey0)"}
            size={"big50"}
            borderColor={"var(--grey4)"}
            type="submit"
            hoverColor={"var(--whiteFixed)"}
            hoverbackGroundColor={"var(--grey0)"}
            handleClick={() => {
              history.push("/register");
            }}
          >
            Cadastrar
          </ThemeButton>
        </FormContainer>
      </Container>
      <Footer />
    </>
  );
};
