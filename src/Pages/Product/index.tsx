import { useEffect } from "react";

import { Container, ContainerMain, ContainerProductImage } from "./style";

import { Footer } from "../../Component/Footer";
import { Header } from "../../Component/Header";
import { IProduct } from "../../interfaces/product";
import { useParams } from "react-router-dom";
import { CardProductDetail } from "../../Component/CardProductDetail";


const product: IProduct = {
    cover_img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5RK4FNCPv1kHNXX2dA5xeRKeqbpf7c8IgcA&usqp=CAU",
    model: `Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Product title stays here - max 1 line
      Product title stays here - maximum 1 line`,
    seller: {
      photo: "https://cdn.dribbble.com/users/1294625/screenshots/4025055/090.png",
      name: "Samuel Leão",
    },
    km: `0`,
    year: "2020",
    price: `123456789`,
    is_active: true,
    vehicle_type: "carro",
    sale_type: "leilao",
  };

// interface IProductList {
//   productList: IProduct[]
// }

interface IProductId {
  productId: string
}

export const Product = () => {
  const { productId } : IProductId = useParams();
  
  useEffect(() => {
    console.log(productId);
    console.log(product.cover_img);
    
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
        </ContainerMain>

      </Container>
      <Footer></Footer>
    </>
  );
};
