import { CardPerfilAdm } from "../../Component/CardPerfilAdm";
import { Footer } from "../../Component/Footer";
import { Header } from "../../Component/Header";
import { IProduct } from "../../interfaces/product";
import { ContainerProductPerfil, ContainerProfileUser } from "./style";
import { CarouselMotion } from "../../Component/CarouselProducts";
import { CarouselAuction } from "../../Component/CarouselAuctions";
import { useParams } from "react-router-dom";
import { IUserId } from "../../interfaces/user";
import { useEffect, useState } from "react";

const product: IProduct = {
  cover_img: "/Assets/moto.jpg",
  model: `Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200`,
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Product title stays here - max 1 line
    Product title stays here - maximum 1 line`,
  seller: {
    photo: "https://cdn.dribbble.com/users/1294625/screenshots/4025055/090.png",
    name: "Samuel Leão",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  km: `0`,
  year: "2020",
  price: `123456789`,
  is_active: true,
  vehicle_type: "moto",
  sale_type: "leilao",
};

const productCar: IProduct = {
  cover_img: "/Assets/carro_generico.jpg",
  model: `Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200`,
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Product title stays here - max 1 line
    Product title stays here - maximum 1 line`,
  seller: {
    photo: "https://cdn.dribbble.com/users/1294625/screenshots/4025055/090.png",
    name: "Samuel Leão",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  km: `0`,
  year: "2020",
  price: `123456789`,
  is_active: true,
  vehicle_type: "carro",
  sale_type: "leilao",
};

const productsArray: IProduct[] = [
  productCar,
  productCar,
  product,
  product,
  productCar,
  product,
  productCar,
  productCar,
  product,
  product,
  productCar,
  product,
];
const productsAuction: IProduct[] = [productCar, productCar, productCar];

export const DashboardUser = () => {
  const { userId }: IUserId = useParams();
  const onlineUserId = "123";
  const [isOwner, setIsOwner] = useState<boolean>(false);

  useEffect(() => {
    if (userId == onlineUserId) {
      setIsOwner(true);
    }
  }, [userId]);

  return (
    <>
      <Header />
      <ContainerProfileUser>
        <div className="containerCardPerfilAdm">
          <CardPerfilAdm isSellerPage={isOwner} />
        </div>
        <ContainerProductPerfil>
          <p className="typeTittle auction">Leilão</p>
          <CarouselAuction products={productsAuction} isSellerPage={isOwner} />
        </ContainerProductPerfil>
        <ContainerProductPerfil>
          <p className="typeTittle product">Carros</p>
          <CarouselMotion
            type="carro"
            products={productsArray}
            isSellerPage={isOwner}
          />
        </ContainerProductPerfil>
        <ContainerProductPerfil>
          <p className="typeTittle product">Motos</p>
          <CarouselMotion
            type="moto"
            products={productsArray}
            isSellerPage={isOwner}
          />
        </ContainerProductPerfil>
      </ContainerProfileUser>
      <Footer />
    </>
  );
};
