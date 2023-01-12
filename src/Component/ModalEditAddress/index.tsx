import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "@mui/material";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { TokenContext } from "../../Providers/Token";
import { Form, FormContainer } from "./style";
import { ThemeInputStandart } from "../../Styles/ThemeInput";
import api from "../../Services";
import { IUser } from "../../interfaces/user";


interface IModalEditAddress {
  setOpenModalEditAddress: Dispatch<SetStateAction<boolean>>;
  openModalEditAddress: boolean;
  userId: string;
}

interface IData {
  cep?: string;
  state?: string;
  city?: string;
  street?: string;
  complement?: string;
  number?: string;
}

export const ModalEditAddress = ({
  setOpenModalEditAddress,
  openModalEditAddress,
  userId,
}: IModalEditAddress) => {
  const { token } = useContext(TokenContext); 

  const handleCloseModal = () => {
    setOpenModalEditAddress(false);
  };

  const formSchema = yup.object().shape({
    cep: yup.string().notRequired(),
    state: yup.string().notRequired(),
    city: yup.string().notRequired(),
    street: yup.string().notRequired(),
    number: yup
      .string()
      .notRequired()
      .matches(/^[0-9]*$/, "Formato inválido"),
    complement: yup.string().notRequired(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data: IData) => {
    if(data.cep === "") {
      delete data.cep;
    }
    if(data.city === "") {
      delete data.city;
    }
    if(data.complement === "") {
      delete data.complement;
    }
    if(data.number === "") {
      delete data.number;
    }
    if(data.state === "") {
      delete data.state;
    }
    if(data.street === "") {
      delete data.street;
    }
    console.log(data);
    
    api.patch(`/users/${userId}`, data,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((_) => setOpenModalEditAddress(false))
  };

  return (
    <>
      <Modal
        open={openModalEditAddress}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          paddingTop: "6rem",
          paddingLeft: "0.75rem",
          paddingRight: "0.75rem",
        }}
      >
         <FormContainer>
          <p className="title">Editar endereço</p>
          <Form onSubmit={handleSubmit(onSubmitFunction)}>
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
      </Modal>
    </>
  );
};
