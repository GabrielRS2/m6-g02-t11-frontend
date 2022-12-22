import { useEffect } from "react";

import { Container, ContainerMain, ContainerProductImage, ContainerSectionDesktop, ContainerSectionMobile } from "./style";

import { Footer } from "../../Component/Footer";
import { Header } from "../../Component/Header";
import { IProduct } from "../../interfaces/product";
import { useParams } from "react-router-dom";
import { CardProductDetail } from "../../Component/CardProductDetail";
import { CardAdmDetail } from "../../Component/CardAdmDetail";
import { DescriptionPageProduct } from "../../Component/DescriptionPageProduct";
import { ProductImages } from "../../Component/ProductImages";


const product: IProduct = {
    cover_img:
    "/Assets/carro_generico.jpg",
    model: `Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Product title stays here - max 1 line
      Product title stays here - maximum 1 line`,
    seller: {
      photo: "https://cdn.dribbble.com/users/1294625/screenshots/4025055/090.png",
      name: "Samuel Leão",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
    },
    km: `0`,
    year: "2020",
    price: `123456789`,
    is_active: true,
    vehicle_type: "carro",
    sale_type: "leilao",
  };

interface IProductId {
  productId: string
}

const images: string[] = [
  "/Assets/carro_generico.jpg",
  "/Assets/carro_generico.jpg",
  "/Assets/carro_generico.jpg",
  "/Assets/carro_generico.jpg",
  "/Assets/carro_generico.jpg",
]

export const Product = () => {
  const { productId } : IProductId = useParams();
  
  useEffect(() => {
    const product: string = ""
    
  }, [productId]);

  return (
    <>
      <Header></Header>
      <Container>
        <ContainerMain>
          <ContainerProductImage>
            <img src={`${product.cover_img}`}/>
          </ContainerProductImage>
          <CardProductDetail product={product} />
          <DescriptionPageProduct description={product.seller.description}/>
        </ContainerMain>
        <ContainerSectionMobile>
          <ProductImages images={images}/>
          <CardAdmDetail user={product.seller}/>
        </ContainerSectionMobile>
        <ContainerSectionDesktop>
          <ProductImages images={images}/>
          <CardAdmDetail user={product.seller}/>
        </ContainerSectionDesktop>
      </Container>
      <Footer></Footer>
    </>
  );
};
