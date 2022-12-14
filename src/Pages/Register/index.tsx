import { Footer } from "../../Component/Footer";
import { Header } from "../../Component/Header";
import { Container, Form, FormContainer } from "./style";
import { ThemeInputStandart, ThemeInputTextArea } from "../../Styles/ThemeInput";
import { ThemeButton } from "../../Styles/ThemeButton";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import api from "../../Services";
import { ModalCreateAccountSuccess } from "../../Component/ModalCreateAccountSuccess";


interface IData {
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  dob?: string;
  description?: string;
  cep?: string;
  state?: string;
  city?: string;
  street?: string;
  complement?: string;
  number?: string;
  confirmPassword?: string;
  password?: string;
  isSeller?: boolean;
}

export const Register = () => {
  const [ isSeller, setIsSeller ] = useState<boolean>(false)
  const [ openCreateAccountSuccess, setOpenCreateAccountSuccess ] = useState<boolean>(false)

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    cpf: yup.string().required("Campo Obrigatório").matches(/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/, "Formato inválido"),
    phone: yup.string().required("Campo Obrigatório").matches(/(\([1-9]\d\)\s9?\d{4}-\d{4})/, "Formato inválido"),
    dob: yup.string().required("Campo Obrigatório").matches(/(\d{2})[-.\/](\d{2})[-.\/](\d{2})/, "Formato inválido"),
    description: yup.string().notRequired(),
    cep: yup.string().required("Campo Obrigatório").matches(/^[0-9]{5}-[0-9]{3}$/, "Formato inválido"),
    state: yup.string().required("Campo Obrigatório"),
    city: yup.string().required("Campo Obrigatório"),
    street: yup.string().required("Campo Obrigatório"),
    number: yup.string().required("Campo Obrigatório").matches(/^[0-9]*$/, "Formato inválido"),
    complement: yup.string().notRequired(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
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
    delete data.confirmPassword
    data.isSeller = isSeller
    api.post("/users", data)
    .then((res) => {
    })
    setOpenCreateAccountSuccess(true)
  };

  return (
    <>
      <Header />
      <ModalCreateAccountSuccess setOpenCreateAccountSuccess={setOpenCreateAccountSuccess} openCreateAccountSuccess={openCreateAccountSuccess}/>
      <Container>
        <FormContainer>
          <p className="title">Cadastro</p>
          <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <p className="subTitle">Infomações pessoais</p>
            <ThemeInputStandart
              inputType="text"
              labelText="Nome"
              placeholderText="Ex: Samuel Leão"
              fieldContext={register("name")}
              choseWidth="100vw"
              error={String(errors.name?.message)}
            />     
            <ThemeInputStandart
              inputType="text"
              labelText="Email"
              placeholderText="Ex: samuel@kenzie.com.br"
              fieldContext={register("email")}
              choseWidth="100vw"
              error={String(errors.email?.message)}
            />   
            <ThemeInputStandart
              inputType="text"
              labelText="CPF"
              placeholderText="000.000.000-00"
              fieldContext={register("cpf")}
              choseWidth="100vw"
              error={String(errors.cpf?.message)}
            />     
            <ThemeInputStandart
              inputType="text"
              labelText="Celular"
              placeholderText="(DDD) 90000-0000"
              fieldContext={register("phone")}
              choseWidth="100vw"
              error={String(errors.phone?.message)}
            />     
            <ThemeInputStandart
              inputType="text"
              labelText="Data de nascimento"
              placeholderText="00/00/00"
              fieldContext={register("dob")}
              choseWidth="100vw"
              error={String(errors.dob?.message)}
            /> 
            <ThemeInputTextArea
              labelText={"Descrição"}
              placeholderText="Digitar descrição"
              choseWidth="100%"
              fieldContext={register("description")}
              error={String(errors.description?.message)}
            /> 
            <p className="subTitle">Infomações de endereço</p>
            <ThemeInputStandart
              inputType="text"
              labelText="CEP"
              placeholderText="00000-000"
              fieldContext={register("cep")}
              choseWidth="100vw"
              error={String(errors.cep?.message)}
            /> 
            <div className="inputsContainer">
            <ThemeInputStandart
              inputType="text"
              labelText="Estado"
              placeholderText="Digitar Estado"
              fieldContext={register("state")}
              choseWidth="100vw"
              error={String(errors.state?.message)}
              isErrorUnder={true}
            /> 
              <ThemeInputStandart
              inputType="text"
              labelText="Cidade"
              placeholderText="Digitar cidade"
              fieldContext={register("city")}
              choseWidth="100vw"
              error={String(errors.city?.message)}
              isErrorUnder={true}
            /> 
            </div>
            <ThemeInputStandart
              inputType="text"
              labelText="Rua"
              placeholderText="Digitar rua"
              fieldContext={register("street")}
              choseWidth="100vw"
              error={String(errors.street?.message)}
            /> 
            <div className="inputsContainer">
            <ThemeInputStandart
              inputType="text"
              labelText="Número"
              placeholderText="Digitar número"
              fieldContext={register("number")}
              choseWidth="100vw"
              error={String(errors.number?.message)}
              isErrorUnder={true}
            /> 
            <ThemeInputStandart
              inputType="text"
              labelText="Complemento"
              placeholderText="Ex: apart 307"
              fieldContext={register("complement")}
              choseWidth="100vw"
              error={String(errors.complement?.message)}
              isErrorUnder={true}
            /> 
            </div>
            <p className="subTitle">Tipo de conta</p>
            <div className="inputsContainer">
              <button 
                className={!isSeller ? "sellerButton button_focused" : "sellerButton"}
                onClick={(e) => {
                  e.preventDefault();
                  setIsSeller(false)
                }}
              >Comprador</button>
              <button 
                className={isSeller ? "sellerButton button_focused" : "sellerButton"}
                onClick={(e) => {
                  e.preventDefault();
                  setIsSeller(true)
                }}
              >Anuciante</button>
            </div>
            <ThemeInputStandart
              inputType="password"
              labelText="Senha"
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
            >Finalizar cadastro</ThemeButton>
          </Form>
        </FormContainer>
      </Container>
      <Footer />
    </>
  );
};
