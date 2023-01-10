import { Footer } from "../../Component/Footer";
import { Header } from "../../Component/Header";
import { Container, Form, FormContainer } from "./style";
import { ThemeInputStandart } from "../../Styles/ThemeInput";
import { ThemeButton } from "../../Styles/ThemeButton";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useHistory, useParams } from "react-router-dom";
import api from "../../Services";
import { ModalGeneric } from "../../Component/ModalGeneric";
import { useState } from "react";

interface IData {
  email?: string;
}

export const RecoverPassword = () => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    titleSucess: "",
    messageSucess: "",
  });
  const [buttonContent, setButtonContent] = useState({
    active: false,
    text: "",
    pushURL: "",
  });
  const history = useHistory();
  const { id, token }: any = useParams();

  const formSchema = yup.object().shape({
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .required("Campo Obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
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
      .post(`login/reset-password/${id}/${token}/`, data)
      .then((res) => {
        console.log(res.data);
        setModalContent({
          title: "Sucesso!",
          titleSucess: "Sua recuperação de senha foi aceita",
          messageSucess:
            "Sua Senha foi alterada com sucesso. Clique em acessar para logar no sistema com a nova senha.",
        });
        setButtonContent({
          active: true,
          text: "Acessar",
          pushURL: "/login/",
        });
        setOpen(true);
      })
      .catch((res) => {
        setModalContent({
          title: "OOOPS!",
          titleSucess: "Erro interno!",
          messageSucess:
            "HoUvE Um ERro INTerno. Entre em contato com o moderado do site.",
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
          <Form
            onSubmit={handleSubmit(onSubmitFunction)}
            className="form--space"
          >
            <ThemeInputStandart
              inputType="password"
              labelText="Nova senha"
              placeholderText="Digitar senha"
              fieldContext={register("password")}
              choseWidth="100vw"
              error={String(errors.password?.message)}
            />
            <ThemeInputStandart
              inputType="password"
              labelText="Confirmar Senha"
              placeholderText="Digitar senha"
              fieldContext={register("confirmPassword")}
              choseWidth="100vw"
              error={String(errors.confirmPassword?.message)}
            />

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
        </FormContainer>
      </Container>
      <Footer />
    </>
  );
};
