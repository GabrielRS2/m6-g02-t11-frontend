import { Avatar } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IProduct } from "../../interfaces/product";
import { OpenModalContext } from "../../Providers/OpenModal";
import { ThemeButton } from "../../Styles/ThemeButton";
import { nameToAcronym, priceFormarter } from "../../utils";
import { EditProductModal } from "../EditProductModal";
import { ModalDeleteProduct } from "../ModalDeleteProduct";
import {
  ButtonsContainer,
  ContainerCard,
  ContainerImage,
  ContainerSeller,
  ContainerTags,
  ContainerValor,
  TextInfo,
  TextTitle,
} from "./style";

type AppProps = {
  status?: boolean;
  product: IProduct;
  isSellerPage?: boolean;
};

export const CardProduct = ({ status, product, isSellerPage }: AppProps) => {
  const { setIsOpenModal } = useContext(OpenModalContext);
  const [editProductModalIsOpen, setEditProductModalIsOpen] = useState<boolean>(false);
  const [openDeleteProduct, setOpenDeleteProduct] = useState<boolean>(false);
  const history = useHistory()
  
  function handleOpenModal() {
    setEditProductModalIsOpen(true)
    setIsOpenModal(true)
  }

  return (
    <ContainerCard onDoubleClick={() => history.push(`/product/${product.id}`)}>
      {openDeleteProduct && <ModalDeleteProduct productId={product?.id || ""} openDeleteProduct={openDeleteProduct} setOpenDeleteProduct={setOpenDeleteProduct}/>}
      {editProductModalIsOpen && <EditProductModal setOpenDeleteProduct={setOpenDeleteProduct} setEditProductModalIsOpen={setEditProductModalIsOpen} product={product}/>}
      <ContainerImage className="ContainerImage" is_active={product.is_active}>
        {status && <span>{product.is_active ? "Ativo" : "Inativo"}</span>}
        <img className="img" src={product.photos[0].content} alt="Carrao" />
      </ContainerImage>
      <TextTitle>{product.model}</TextTitle>
      <TextInfo>{product.description}</TextInfo>
      {!isSellerPage && 
          <ContainerSeller>   
            <Avatar sx={{ 
              bgcolor: "var(--brand2)", 
              height: "2rem", 
              width: "2rem", 
              fontSize: "0.875rem", 
              fontWeight: "500" }}
              >
              {nameToAcronym(product.user.name)}</Avatar>
            <p>{product.user.name}</p>
          </ContainerSeller>
          }
      <ContainerValor>
        <ContainerTags>
          <p>{product.km} KM</p>
          <p>{product.year}</p>
        </ContainerTags>
        <span>R$ {priceFormarter(product.price)}</span>
      </ContainerValor>
      {isSellerPage && (
      <ButtonsContainer>
        <ThemeButton 
        backGroundColor={"var(--grey8)"}
        color={"var(--grey1)"}
        size={"medium"}
        borderColor={"var(--grey1)"}
        hoverbackGroundColor={"var(--brand1)"}
        handleClick={() => {handleOpenModal()}}
        >Editar</ThemeButton>
        <ThemeButton 
        backGroundColor={"var(--grey8)"}
        color={"var(--grey1)"}
        size={"medium"}
        borderColor={"var(--grey1)"}
        hoverbackGroundColor={"var(--brand1)"}
        handleClick={() => {history.push(`/product/${product.id}`)}}
        >Ver como</ThemeButton>
      </ButtonsContainer>
      )}
    </ContainerCard>
  );
};
