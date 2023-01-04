import { Avatar } from "@mui/material";
import { boolean } from "yup";
import { IProduct } from "../../interfaces/product";
import { ThemeButton } from "../../Styles/ThemeButton";
import { nameToAcronym, priceFormarter } from "../../utils";
import {
  ButtonsContainer,
  ContainerCard,
  ContainerImage,
  ContainerOwner,
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
  return (
    <ContainerCard>
      <ContainerImage className="ContainerImage" is_active={product.is_active}>
        {status && <span>{product.is_active ? "Ativo" : "Inativo"}</span>}
        <img className="img" src={product.cover_img} alt="Carrao" />
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
              {nameToAcronym(product.seller.name)}</Avatar>
            <p>{product.seller.name}</p>
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
        handleClick={() => {console.log("Botão médio")}}
        >Editar</ThemeButton>
        <ThemeButton 
        backGroundColor={"var(--grey8)"}
        color={"var(--grey1)"}
        size={"medium"}
        borderColor={"var(--grey1)"}
        hoverbackGroundColor={"var(--brand1)"}
        handleClick={() => {console.log("Botão médio")}}
        >Ver como</ThemeButton>
      </ButtonsContainer>
      )}
    </ContainerCard>
  );
};
