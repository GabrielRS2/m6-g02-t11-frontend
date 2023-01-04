import { IProduct } from "../../interfaces/product";
import { nameToAcronym, priceFormarter } from "../../utils";
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import {
  Container,
  ContainerCard, ContainerCardFooter, ContainerInfo, ContainerInfoImage, ContainerSeller, ContainerTags, ContainerTagsPrice, Timer,
} from "./style";
import { Avatar } from "@mui/material";

type AppProps = {
  product: IProduct;
  isSellerPage?: boolean;
};

export const CardAuction = ({ isSellerPage, product }: AppProps) => {
  return (
    <ContainerCard>
      <Container isSellerPage={isSellerPage}>
        <ContainerInfoImage image={"https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/novo-cruze-nb.jpg?imwidth=960"}>
        </ContainerInfoImage>
        <ContainerInfo isSellerPage={isSellerPage}>
          <Timer>
            <p className="timeIcon"><AiOutlineClockCircle size={24}/></p>
            <p className="time">01:58:00</p>
          </Timer>
          <p className="title">{product.model}</p>
          <p className="description">{product.description}</p>
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
          <ContainerTagsPrice>
            <ContainerTags>
              <p>{product.km} KM</p>
              <p>{product.year}</p>
            </ContainerTags>
            <p className="price">R$ {priceFormarter(product.price)}</p>
          </ContainerTagsPrice>
        </ContainerInfo>
      </Container>
      <ContainerCardFooter className="footer" isSellerPage={isSellerPage}>
        {isSellerPage ? (
          <>
            <button className="editButton">Editar</button>
            <button>Ver como</button>
          </>
        ) : (
          <>
            <p className="auction">Acessar página do leilão</p>
            <p><BsArrowRight className="arrow" size={24}/></p>
          </>
        )}
      </ContainerCardFooter>
    </ContainerCard>
  );
};
