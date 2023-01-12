import {
  ThemeInputStandart,
  ThemeInputTextArea,
} from "../../Styles/ThemeInput";
import { ModalContainer } from "./style";

import { editCreateSchema } from "../../Validations/schemas";

import { AiOutlineClose } from "react-icons/ai";

import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../Services";
import { OpenModalContext } from "../../Providers/OpenModal";
import { IProduct } from "../../interfaces/product";
import { TokenContext } from "../../Providers/Token";

type EditProductModaProps = {
  setOpenDeleteProduct: Dispatch<SetStateAction<boolean>>;
  setEditProductModalIsOpen: Dispatch<SetStateAction<boolean>>;
  product: IProduct;
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

export const EditProductModal = ({
  setEditProductModalIsOpen,
  setOpenDeleteProduct,
  product,
}: EditProductModaProps) => {
  const [listingType, setListingType] = useState<string>("sale");
  const [vehicleType, setVehicleType] = useState<string>("car");
  const [imageFields, setImageFields] = useState<string[]>([]);
  const { setIsOpenModal } = useContext(OpenModalContext);
  const { token, setToken } = useContext(TokenContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editCreateSchema),
  });

  useEffect(() => {
    if (product.saleType) {
      setListingType(product.saleType);
    }
    if (product.vehicleType) {
      setVehicleType(product.vehicleType);
    }
  }, []);

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

    if (data.model === "") {
      delete data.model;
    }

    if (data.coverPhoto === "") {
      delete data.coverPhoto;
    }

    if (data.description === "") {
      delete data.description;
    }

    if (data.photos?.length === 0) {
      delete data.photos;
    }

    api
      .patch(`/products/${product.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res.data))
      .then((res) => {
        setEditProductModalIsOpen(false);
        setIsOpenModal(false);
      });
  };

  const handleCloseModal = () => {
    setEditProductModalIsOpen(false);
    setIsOpenModal(false);
  };

  return (
    <>
      <ModalContainer onSubmit={handleSubmit(submitCb)}>
        <div className="title">
          <p>Editar anuncio</p>
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
          placeholderText={product.model}
          value={product.model}
          choseWidth="100%"
          fieldContext={register("model")}
          error={String(errors.model?.message)}
        />
        <div className="container">
          <ThemeInputStandart
            inputType="text"
            labelText={"Ano"}
            placeholderText={product.year}
            value={product.year}
            choseWidth="47%"
            fieldContext={register("year")}
            error={String(errors.year?.message)}
            isErrorUnder={true}
          />
          <ThemeInputStandart
            inputType="text"
            labelText={"Quilometragem"}
            placeholderText={product.km.toString()}
            value={product.km.toString()}
            choseWidth="47%"
            fieldContext={register("km")}
            error={String(errors.km?.message)}
            isErrorUnder={true}
          />
          <ThemeInputStandart
            inputType="text"
            labelText={"Preco"}
            placeholderText={product.price.toString()}
            value={product.price.toString()}
            choseWidth="100%"
            fieldContext={register("price")}
            error={String(errors.price?.message)}
          />
        </div>
        <ThemeInputTextArea
          labelText={"Descricao"}
          placeholderText={product.description}
          value={product.description}
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
              vehicleType === "motorcycle" ? "button_focused" : undefined
            }
            onClick={(e) => {
              e.preventDefault();
              setVehicleType("motorcycle");
            }}
          >
            Moto
          </button>
        </div>
        <ThemeInputStandart
          inputType="text"
          labelText="Imagem de capa"
          placeholderText={product.photos[0].content}
          choseWidth="100%"
          value={product.photos[0].content}
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
              handleCloseModal();
              setOpenDeleteProduct(true);
            }}
          >
            Excluir anúncio
          </button>
          <button className="button_submit" type="submit">
            Salvar alterações
          </button>
        </div>
      </ModalContainer>
    </>
  );
};
