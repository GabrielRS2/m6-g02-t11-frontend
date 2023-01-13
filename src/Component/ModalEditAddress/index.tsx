import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "@mui/material";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { TokenContext } from "../../Providers/Token";
import { Form, FormContainer } from "./style";
import api from "../../Services";
import { InputMask } from "../../Styles/ThemeInputMask";
import { buscaCEP, formataCEP } from "../../utils";

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
  const [valueUF, setValueUF] = useState("");
  const [valueRua, setValueRua] = useState("");
  const [valueCidade, setValueCidade] = useState("");
  const [valueComplemento, setValueComplemento] = useState("");
  const [valueCEP, setValueCEP] = useState("");
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

  const handleCloseModal = () => {
    setOpenModalEditAddress(false);
  };

  const formSchema = yup.object().shape({
    cep: yup.string().notRequired(),
    state: yup.string().notRequired(),
    city: yup.string().notRequired(),
    street: yup.string().notRequired(),
    number: yup.string().notRequired(),
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
    if (data.cep === "") {
      delete data.cep;
    }
    if (data.city === "") {
      delete data.city;
    }
    if (data.complement === "") {
      delete data.complement;
    }
    if (data.number === "") {
      delete data.number;
    }
    if (data.state === "") {
      delete data.state;
    }
    if (data.street === "") {
      delete data.street;
    }
    console.log(data);

    api
      .patch(`/users/${userId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => setOpenModalEditAddress(false));
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
          paddingLeft: "0.75rem",
          paddingRight: "0.75rem",
          overflow: "scroll",
        }}
      >
        <FormContainer>
          <p className="title">Editar endereço</p>
          <Form onSubmit={handleSubmit(onSubmitFunction)}>
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
              onBlur={async () => {
                const add = await buscaCEP(valueCEP);
                console.log(add);
                if (add.erro) {
                  errors.cep = { type: "erro", message: "CEP inválido" };
                } else {
                  delete errors.cep;
                }
                setAddress(add);
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
