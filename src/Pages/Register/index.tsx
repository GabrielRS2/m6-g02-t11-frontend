import { Footer } from "../../Component/Footer";
import { Header } from "../../Component/Header";
import { Container, Form, FormContainer } from "./style";
import {
  ThemeInputStandart,
  ThemeInputTextArea,
} from "../../Styles/ThemeInput";
import { ThemeButton } from "../../Styles/ThemeButton";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import api from "../../Services";
import { ModalCreateAccountSuccess } from "../../Component/ModalCreateAccountSuccess";
import { buscaCEP, formatPhone, formataCEP, formataCPF } from "../../utils";
import { InputMask } from "../../Styles/ThemeInputMask";
import { ModalGeneric } from "../../Component/ModalGeneric";

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
  const [valueUF, setValueUF] = useState("");
  const [valueRua, setValueRua] = useState("");
  const [valueCidade, setValueCidade] = useState("");
  const [valueComplemento, setValueComplemento] = useState("");
  const [valueCEP, setValueCEP] = useState("");
  const [isSeller, setIsSeller] = useState<boolean>(false);
  const [valuePhone, setValuePhone] = useState("");
  const [valueCPF, setValueCPF] = useState("");
  const [openCreateAccountSuccess, setOpenCreateAccountSuccess] =
    useState<boolean>(false);
  const [address, setAddress] = useState({
    bairro: "",
    cep: "",
    complemento: "",
    ddd: "",
    gia: "",
    ibge: "",
    localidade: "",
    logradouro: "",
    siafi: "",
    uf: "",
  });
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
  const formSchema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    cpf: yup.string().required("Campo Obrigatório"),
    phone: yup.string().required("Campo Obrigatório"),
    dob: yup.string().required("Campo Obrigatório"),
    description: yup.string().notRequired(),
    cep: yup.string().required("Campo Obrigatório"),
    state: yup.string().required("Campo Obrigatório"),
    city: yup.string().required("Campo Obrigatório"),
    street: yup.string().required("Campo Obrigatório"),
    number: yup.string().required("Campo Obrigatório"),
    complement: yup.string().notRequired(),
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
    delete data.confirmPassword;
    data.isSeller = isSeller;
    console.log(data);
    api
      .post("/users", data)
      .then((res) => {
        console.log(res.data);
        setOpenCreateAccountSuccess(true);
      })
      .catch((err) => {
        setModalContent({
          title: "Error!",
          titleSucess: "Houve um erro no registro, verifique e tente novamente",
          messageSucess: [err.response.data.message],
        });
        setOpen(true);
      });
  };

  return (
    <>
      <Header />
      <ModalGeneric
        setOpen={setOpen}
        openStatus={open}
        modal={modalContent}
        button={buttonContent}
      />
      <ModalCreateAccountSuccess
        setOpenCreateAccountSuccess={setOpenCreateAccountSuccess}
        openCreateAccountSuccess={openCreateAccountSuccess}
      />
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
            <InputMask
              type="text"
              labelText="CPF"
              placeholder="000.000.000-00"
              fieldContext={register("cpf")}
              choseWidth="100vw"
              error={String(errors.cpf?.message)}
              value={valueCPF}
              onChange={(e: any) => {
                setValueCPF(
                  formataCPF(
                    e.target.value.replace(/[^\d]/g, "").substring(0, 11)
                  )
                );
              }}
            />
            <InputMask
              type="text"
              labelText="Celular"
              placeholder="(DD) 90000-0000"
              fieldContext={register("phone")}
              choseWidth="100vw"
              value={valuePhone}
              onChange={(e: any) => {
                setValuePhone(
                  formatPhone(
                    e.target.value.replace(/[^\d]/g, "").substring(0, 11)
                  )
                );
              }}
              error={String(errors.phone?.message)}
            />
            <InputMask
              type="date"
              labelText="Data de nascimento"
              placeholder="00/00/0000"
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
            <InputMask
              type="text"
              labelText="CEP"
              placeholder="00000-000"
              fieldContext={register("cep")}
              choseWidth="100vw"
              value={valueCEP}
              onChange={(e: any) => {
                setValueCEP(formataCEP(e.target.value.replace(/[^\d]/g, "")));
              }}
              onKeyDown={async (e) => {
                if (e.keyCode === 13) {
                  const add = await buscaCEP(valueCEP);
                  console.log(add);
                  if (add.erro) {
                    errors.cep = { type: "erro", message: "CEP inválido" };
                  } else {
                    delete errors.cep;
                  }
                  setAddress(add);
                }
              }}
              error={String(errors.cep?.message)}
            />
            <div className="inputsContainer">
              <InputMask
                type="text"
                labelText="Estado"
                placeholder="Digitar Estado"
                fieldContext={register("state")}
                choseWidth="100vw"
                error={String(errors.state?.message)}
                isErrorUnder={true}
                value={valueUF}
                onFocus={() => {
                  setValueUF(address.uf);
                }}
                onChange={(e: any) => {
                  setValueUF(e.target.value);
                }}
              />
              <InputMask
                type="text"
                labelText="Cidade"
                placeholder="Digitar cidade"
                fieldContext={register("city")}
                choseWidth="100vw"
                error={String(errors.city?.message)}
                isErrorUnder={true}
                value={valueCidade}
                onFocus={() => {
                  setValueCidade(address.localidade);
                }}
                onChange={(e: any) => {
                  setValueCidade(e.target.value);
                }}
              />
            </div>
            <InputMask
              type="text"
              labelText="Rua"
              placeholder="Digitar rua"
              fieldContext={register("street")}
              choseWidth="100vw"
              error={String(errors.street?.message)}
              value={valueRua}
              onFocus={() => {
                setValueRua(address.logradouro);
              }}
              onChange={(e: any) => {
                setValueRua(e.target.value);
              }}
            />
            <div className="inputsContainer">
              <InputMask
                type="text"
                labelText="Número"
                placeholder="Digitar número"
                fieldContext={register("number")}
                choseWidth="100vw"
                error={String(errors.number?.message)}
                isErrorUnder={true}
              />
              <InputMask
                type="text"
                labelText="Complemento"
                placeholder="Ex: apart 307"
                fieldContext={register("complement")}
                choseWidth="100vw"
                error={String(errors.complement?.message)}
                isErrorUnder={true}
                value={valueComplemento}
                onFocus={() => {
                  setValueComplemento(address.complemento);
                }}
                onChange={(e: any) => {
                  setValueComplemento(e.target.value);
                }}
              />
            </div>
            <p className="subTitle">Tipo de conta</p>
            <div className="inputsContainer">
              <button
                className={
                  !isSeller ? "sellerButton button_focused" : "sellerButton"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setIsSeller(false);
                }}
              >
                Comprador
              </button>
              <button
                className={
                  isSeller ? "sellerButton button_focused" : "sellerButton"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setIsSeller(true);
                }}
              >
                Anuciante
              </button>
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
            >
              Finalizar cadastro
            </ThemeButton>
          </Form>
        </FormContainer>
      </Container>
      <Footer />
    </>
  );
};
