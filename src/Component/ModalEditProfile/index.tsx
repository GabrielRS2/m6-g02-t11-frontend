import { Dispatch, SetStateAction, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ThemeButton } from "../../Styles/ThemeButton";
import {
  ThemeInputStandart,
  ThemeInputTextArea,
} from "../../Styles/ThemeInput";
import { Form, FormContainer } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { OpenModalContext } from "../../Providers/OpenModal";
import { formatPhone, formataCPF } from "../../utils";

interface IModalEditProfile {
  setOpenEditProfile: Dispatch<SetStateAction<boolean>>;
}

interface IData {
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  dob?: string;
  description?: string;
}

export const ModalEditProfile = ({ setOpenEditProfile }: IModalEditProfile) => {
  const [valueUF, setValueUF] = useState("");
  const [valueRua, setValueRua] = useState("");
  const [valueCidade, setValueCidade] = useState("");
  const [valueComplemento, setValueComplemento] = useState("");
  const [isSeller, setIsSeller] = useState<boolean>(false);
  const [valuePhone, setValuePhone] = useState("");
  const [valueCPF, setValueCPF] = useState("");
  const [valueCEP, setValueCEP] = useState("");
  const history = useHistory();
  const { setIsOpenModal } = useContext(OpenModalContext);

  const handleCloseModal = () => {
    setOpenEditProfile(false);
    setIsOpenModal(false);
  };

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    cpf: yup.string().required("Campo Obrigatório"),
    phone: yup.string().required("Campo Obrigatório"),
    dob: yup.string().required("Campo Obrigatório"),
    description: yup.string().notRequired(),
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
      <FormContainer>
        <div className="titleContainer">
          <p className="title">Editar perfil</p>
          <button onClick={handleCloseModal}>X</button>
        </div>
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
            extra
            inputValue={valueCPF}
            onChange={(e: any) => {
              setValueCPF(
                formataCPF(
                  e.target.value.replace(/[^\d]/g, "").substring(0, 11)
                )
              );
            }}
          />
          <ThemeInputStandart
            inputType="text"
            labelText="Celular"
            placeholderText="(DD) 90000-0000"
            fieldContext={register("phone")}
            choseWidth="100vw"
            extra
            inputValue={valuePhone}
            onChange={(e: any) => {
              setValuePhone(
                formatPhone(
                  e.target.value.replace(/[^\d]/g, "").substring(0, 11)
                )
              );
            }}
            error={String(errors.phone?.message)}
          />
          <ThemeInputStandart
            inputType="date"
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
          <div className="container_submit">
            <button
              className="button_cancel"
              onClick={(e) => {
                e.preventDefault();
                handleCloseModal();
              }}
            >
              Cancelar
            </button>
            <button className="button_submit">Salvar alterações</button>
          </div>
        </Form>
      </FormContainer>
    </>
  );
};
