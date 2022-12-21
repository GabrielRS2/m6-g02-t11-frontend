import { ThemeButton } from "../../Styles/ThemeButton";

import { Container } from "./style";

import { IProduct } from "../../interfaces/product";
import { priceFormarter } from "../../utils";

interface IPropsCardProductDetail{
  product:IProduct
}

export const CardProductDetail = ({ product }: IPropsCardProductDetail) => {
  return (
  <Container>
    <h2 className="productModel">{product.model}</h2>
    <div className="containerInfo">
      <div className="containerInfoProduct">
        <p>{product.year}</p>
        <p>{product.km} KM</p>
      </div>
      <p className="price">R$ {priceFormarter(product.price)}</p>
    </div>
    <ThemeButton 
      backGroundColor={"var(--brand1)"}
      color={"var(--whiteFixed)"}
      size={"medium"}
      borderColor={"var(--brand1)"}
      handleClick={() => {console.log("Comprar")}}
      >Comprar</ThemeButton>
  </Container>
  );
};
