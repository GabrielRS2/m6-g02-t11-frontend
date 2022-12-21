import { IProduct } from "../../interfaces/product";
import {
  ContainerCard,
  ContainerImage,
  ContainerOwner,
  ContainerTags,
  ContainerValor,
  TextInfo,
  TextTitle,
} from "./style";


type AppProps = {
  status?: boolean;
  product: IProduct;
};

export const Card = ({ status, product }: AppProps) => {
  return (
    <ContainerCard>
      <ContainerImage is_active={product.is_active}>
        {status && <span>{product.is_active ? "Ativo" : "Inativo"}</span>}
        <img src={product.cover_img} alt="Carrao" />
      </ContainerImage>
      <TextTitle>{product.model}</TextTitle>
      <TextInfo>{product.description}</TextInfo>
      <ContainerOwner>
        <img src={product.seller.photo} alt="Perfill" />
        <span>{product.seller.name}</span>
      </ContainerOwner>
      <ContainerValor>
        <ContainerTags>
          <div>{product.km}</div>
          <div>{product.year}</div>
        </ContainerTags>
        <span>{product.price}</span>
      </ContainerValor>
    </ContainerCard>
  );
};
