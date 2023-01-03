import { CardPerfilAdm } from "../../Component/CardPerfilAdm";
import { CardProduct } from "../../Component/CardProduct";
import { Footer } from "../../Component/Footer";
import { Header } from "../../Component/Header";
import { IProduct } from "../../interfaces/product";
import {
  ContainerProductPerfil,
  ContainerProducts,
  ContainerProfileUser,
} from "./style";

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

export const DashboardUser = () => {
  return (
    <>
      <Header />
      <ContainerProfileUser>
        <div className="containerCardPerfilAdm">
          <CardPerfilAdm />
        </div>
        <ContainerProductPerfil>
          <p className="typeTittle">Carros</p>
          <ContainerProducts>
            {productsArray.map(
              (product) =>
                product.vehicle_type === "carro" && (
                  <CardProduct isSellerPage={true} product={product} />
                )
            )}
          </ContainerProducts>
        </ContainerProductPerfil>
        <ContainerProductPerfil
        //onMouseDown={() => scroll()}
        >
          <p className="typeTittle">Motos</p>
          <ContainerProducts>
            {productsArray.map(
              (product) =>
                product.vehicle_type === "moto" && (
                  <CardProduct isSellerPage={true} product={product} />
                )
            )}
          </ContainerProducts>
        </ContainerProductPerfil>
      </ContainerProfileUser>
      <Footer />
    </>
  );
};
