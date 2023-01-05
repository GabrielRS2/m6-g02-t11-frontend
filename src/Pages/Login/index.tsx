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
import { UserIdContext } from "../../Providers/UserId";
import { TokenContext } from "../../Providers/Token";
import { useContext } from "react";


interface IData {
  email?: string;
  password?: string;
}

export const Login = () => {
  const history = useHistory()

  const { setToken } = useContext(TokenContext);
  const { setUserId } = useContext(UserIdContext);

  const formSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data: IData) => {
    api.post("/login", data)
    .then((res) => {
      setToken(res.data.token)
      setUserId(res.data.id)
      localStorage.setItem("@motor:id", res.data.id)
      localStorage.setItem("@motor:token", res.data.token)
    })
  };

  return (
    <>
      <Header />
      <Container>
        <FormContainer>
          <p className="title">Login</p>
          <Form onSubmit={handleSubmit(onSubmitFunction)}>
            <ThemeInputStandart
              inputType="text"
              labelText="Usuário"
              placeholderText="Digitar usuário"
              fieldContext={register("email")}
              choseWidth="100vw"
              error={String(errors.email?.message)}
              inputClass={"userInput"}
            />     
            <ThemeInputStandart
              inputType="password"
              labelText="Senha"
              placeholderText="Digitar senha"
              fieldContext={register("password")}
              choseWidth="100vw"
              error={String(errors.password?.message)}
            />         
            <div className="recoverLink"><Link to={"/recoverPassword"}>Esqueci minha senha</Link></div>
            <ThemeButton 
              backGroundColor={"var(--brand1)"}
              color={"var(--whiteFixed)"}
              size={"big50"}
              borderColor={"var(--brand1)"}
              type="submit"
            >Entrar</ThemeButton>
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
