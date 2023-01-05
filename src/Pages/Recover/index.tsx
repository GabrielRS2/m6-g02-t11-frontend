import { Footer } from "../../Component/Footer";
import { Header } from "../../Component/Header";
import { Container, Form, FormContainer } from "./style";
import { ThemeInputStandart } from "../../Styles/ThemeInput";
import { ThemeButton } from "../../Styles/ThemeButton";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useHistory } from "react-router-dom";


interface IData {
  user?: string;
}

export const Recover = () => {
  const history = useHistory()

  const formSchema = yup.object().shape({
    user: yup.string().email("Email inválido").required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data: IData) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <Container>
        <FormContainer>
          <p className="title">Recuperação de senha</p>
          <Form onSubmit={handleSubmit(onSubmitFunction)}>
            <ThemeInputStandart
              inputType="text"
              labelText="Usuário"
              placeholderText="Digitar usuário"
              fieldContext={register("user")}
              choseWidth="100vw"
              error={String(errors.user?.message)}
            />             
            <div className="loginLink"><Link to={"/login"}>ir para o login</Link></div>
            <ThemeButton 
              backGroundColor={"var(--brand1)"}
              color={"var(--whiteFixed)"}
              size={"big50"}
              borderColor={"var(--brand1)"}
              type="submit"
            >Enviar</ThemeButton>
          </Form>
          <div className="registerLink"><Link to={"/register"}>Ainda não possui conta?</Link></div>
          <ThemeButton 
            backGroundColor={"var(--whiteFixed)"}
            color={"var(--grey0)"}
            size={"big50"}
            borderColor={"var(--grey4)"}
            type="submit"
            hoverColor={"var(--whiteFixed)"}
            hoverbackGroundColor={"var(--grey0)"}
            handleClick={() => {history.push("/register")}}
          >Cadastrar</ThemeButton>
        </FormContainer>
      </Container>
      <Footer />
    </>
  );
};
