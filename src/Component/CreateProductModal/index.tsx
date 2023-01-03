import {
  ThemeInputStandart,
  ThemeInputTextArea,
} from "../../Styles/ThemeInput";

import { AiOutlineClose } from "react-icons/ai";

import { Modal } from "./styles";
import { useState } from "react";

type Props = {
  closeModal: Function;
};

export const CreateProductModal = ({ closeModal }: Props) => {
  const [listingType, setListingType] = useState<string>("sale");
  const [vehicleType, setVehicleType] = useState<string>("car");
  const [imageFields, setImageFields] = useState<number>(0);

  return (
    <>
      <Modal>
        <div className="title">
          <p>Criar anuncio</p>
          <AiOutlineClose
            onClick={() => {
              closeModal();
            }}
          />
        </div>
        <span>Tipo de anuncio</span>
        <div className="container">
          <button
            className={listingType === "sale" ? "button_focused" : undefined}
            onClick={() => {
              setListingType("sale");
            }}
          >
            Venda
          </button>
          <button
            className={listingType === "auction" ? "button_focused" : undefined}
            onClick={() => {
              setListingType("auction");
            }}
          >
            Leilao
          </button>
        </div>
        <p>Infomações do veículo</p>
        <ThemeInputStandart
          inputType="text"
          labelText="Titulo"
          placeholderText="Digitar titulo"
          choseWidth="100%"
        />
        <div className="container">
          <ThemeInputStandart
            inputType="text"
            labelText="Ano"
            placeholderText="2018"
            choseWidth="47%"
          />
          <ThemeInputStandart
            inputType="text"
            labelText="Quilometragem"
            placeholderText="0"
            choseWidth="47%"
          />
          <ThemeInputStandart
            inputType="text"
            labelText="Preco"
            placeholderText="0"
            choseWidth="100%"
          />
        </div>
        <ThemeInputTextArea
          labelText="Descricao"
          placeholderText="Digitar a descricao"
          choseWidth="100%"
        />
        <span>Tipo de vehiculo</span>
        <div className="container">
          <button
            className={vehicleType === "car" ? "button_focused" : undefined}
            onClick={() => {
              setVehicleType("car");
            }}
          >
            Carro
          </button>
          <button
            className={
              vehicleType === "motorcycle" ? "button_focused" : undefined
            }
            onClick={() => {
              setVehicleType("motorcycle");
            }}
          >
            Moto
          </button>
        </div>
        <ThemeInputStandart
          inputType="text"
          labelText="Imagem de capa"
          placeholderText="Inserir URL da Imagem"
          choseWidth="100%"
        />
        {/* loop here */}
        <ThemeInputStandart
          inputType="text"
          labelText="Imagem de galeria"
          placeholderText="Inserir URL da Imagem"
          choseWidth="100%"
        />
        <button className="button_add_field">
          Adicionar campo para imagem
        </button>
        <div className="container_submit">
          <button
            className="button_cancel"
            onClick={() => {
              closeModal();
            }}
          >
            Cancelar
          </button>
          <button className="button_submit">Criar anuncio</button>
        </div>
      </Modal>
    </>
  );
};
