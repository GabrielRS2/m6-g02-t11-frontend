import {
  ThemeInputStandart,
  ThemeInputTextArea,
} from "../../Styles/ThemeInput";
import { ModalContainer } from "./style";

import { productCreateSchema } from "../../Validations/schemas";

import { AiOutlineClose } from "react-icons/ai";

import { Dispatch, SetStateAction, useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../Services";
import { OpenModalContext } from "../../Providers/OpenModal";
import { TokenContext } from "../../Providers/Token";

type Props = {
  setProductModalIsOpen: Dispatch<SetStateAction<boolean>>;
};

interface IValidData {
  model: string;
  coverPhoto: string;
  description: string;
  km: number;
  price: number;
  year: number;
  saleType: string;
  vehicleType: string;
  photos?: string[];
}

interface IData {
  model?: string;
  coverPhoto?: string;
  description?: string;
  km?: number;
  price?: number;
  year?: number;
  saleType?: string;
  vehicleType?: string;
  zphoto0?: string;
  zphoto1?: string;
  zphoto2?: string;
  zphoto3?: string;
  zphoto4?: string;
  zphoto5?: string;
  photos?: string[];
}

export const CreateProductModal = ({ setProductModalIsOpen }: Props) => {
  const [listingType, setListingType] = useState<string>("sale");
  const [vehicleType, setVehicleType] = useState<string>("car");
  const [imageFields, setImageFields] = useState<string[]>([]);
  const { setIsOpenModal } = useContext(OpenModalContext);
  const { token } = useContext(TokenContext); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productCreateSchema),
  });

  const submitCb = (data: IData) => {
    const photos: string[] = [];
    const dataValues = Object.values(data);
    const photosNumber = dataValues.length - 6;

    if (photosNumber > 0) {
      while (photos.length < photosNumber) {
        // @ts-ignore
        const photo = data[`zphoto${photos.length}`];
        // @ts-ignore
        delete data[`zphoto${photos.length}`];
        photos.push(photo);
      }
      data.photos = photos;
    }

    data.vehicleType = vehicleType;
    data.saleType = listingType;
    data.price = data.price! * 100;

    api
      .post("products/", data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        console.log(res.data);
        handleCloseModal();
      })
      .catch((error) => console.log(error));
  };

  const handleCloseModal = () => {
    setProductModalIsOpen(false);
    setIsOpenModal(false);
  };

  return (
    <>
      <ModalContainer onSubmit={handleSubmit(submitCb)}>
        <div className="title">
          <p>Criar anuncio</p>
          <AiOutlineClose
            onClick={() => {
              handleCloseModal();
            }}
          />
        </div>
        <span>Tipo de anuncio</span>
        <div className="container">
          <button
            className={listingType === "sale" ? "button_focused" : undefined}
            onClick={(e) => {
              e.preventDefault();
              setListingType("sale");
            }}
          >
            Venda
          </button>
          <button
            className={listingType === "auction" ? "button_focused" : undefined}
            onClick={(e) => {
              e.preventDefault();
              setListingType("auction");
            }}
          >
            Leilao
          </button>
        </div>
        <p>Infomações do veículo</p>
        <ThemeInputStandart
          inputType="text"
          labelText={"Titulo"}
          placeholderText="Digitar titulo"
          choseWidth="100%"
          fieldContext={register("model")}
          error={String(errors.model?.message)}
        />
        <div className="container">
          <ThemeInputStandart
            inputType="text"
            labelText={"Ano"}
            placeholderText="2018"
            choseWidth="47%"
            fieldContext={register("year")}
            error={String(errors.year?.message)}
            isErrorUnder={true}
          />
          <ThemeInputStandart
            inputType="text"
            labelText={"Quilometragem"}
            placeholderText="0"
            choseWidth="47%"
            fieldContext={register("km")}
            error={String(errors.km?.message)}
            isErrorUnder={true}
          />
          <ThemeInputStandart
            inputType="text"
            labelText={"Preco"}
            placeholderText="0"
            choseWidth="100%"
            fieldContext={register("price")}
            error={String(errors.price?.message)}
            isErrorUnder={true}
          />
        </div>
        <ThemeInputTextArea
          labelText={"Descricao"}
          placeholderText="Digitar a descricao"
          choseWidth="100%"
          fieldContext={register("description")}
          error={String(errors.description?.message)}
        />
        <span>Tipo de vehiculo</span>
        <div className="container">
          <button
            className={vehicleType === "car" ? "button_focused" : undefined}
            onClick={(e) => {
              e.preventDefault();
              setVehicleType("car");
            }}
          >
            Carro
          </button>
          <button
            className={
              vehicleType === "motorbike" ? "button_focused" : undefined
            }
            onClick={(e) => {
              e.preventDefault();
              setVehicleType("motorbike");
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
          fieldContext={register("coverPhoto")}
          error={String(errors.coverPhoto?.message)}
        />
        <>
          {imageFields.map((el, index) => (
            <ThemeInputStandart
              key={index}
              inputType="url"
              labelText="Imagem de galeria"
              placeholderText="https://example.com"
              choseWidth="100%"
              fieldContext={register(`zphoto${index}`)}
              error={String(errors[`zphoto${index}`]?.message)}
            />
          ))}
        </>
        <button
          className="button_add_field"
          onClick={(e) => {
            e.preventDefault();
            if (imageFields.length < 6) {
              setImageFields([...imageFields, ""]);
            }
          }}
        >
          Adicionar campo para imagem
        </button>
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
          <button className="button_submit" type="submit">Criar anuncio</button>
        </div>
      </ModalContainer>
    </>
  );
};
