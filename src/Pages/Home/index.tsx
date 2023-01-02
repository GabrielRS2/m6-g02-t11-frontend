import { Footer } from "../../Component/Footer";
import { Header } from "../../Component/Header";
import { IProduct } from "../../interfaces/product";
import {
  ContainerHome,
  ContainerHomeWelcome,
  ContainerProductPerfil,
} from "./style";
import { CarouselMotion } from "../../Component/CarouselProducts";
import { CarouselAuction } from "../../Component/CarouselAuctions";
import { ThemeButton } from "../../Styles/ThemeButton";

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

export const Home = () => {
  return (
    <>
      <Header />
      <ContainerHomeWelcome>
        <div className="containerTitler">
          <p className="title titleDesktop">Velocidade e experiência em um</p>
          <p className="title titleMobile">Velocidade e</p>
          <p className="title titleMobile">experiência em um</p>
          <p className="title">lugar feito para você</p>
        </div>
        <p className="subTitle">Um ambiente feito para você explorar o seu melhor</p>
        <div className="buttonsContainer">
          <ThemeButton 
          backGroundColor={"var(--brand2)"}
          color={"var(--grey10)"}
          size={"big50"}
          borderColor={"var(--grey10)"}
          hoverColor={"var(--grey0)"}
          hoverbackGroundColor={"var(--grey10)"}
          handleClick={() => {console.log("Botão grande")}}
          >Carros</ThemeButton>
          <ThemeButton 
          backGroundColor={"var(--brand2)"}
          color={"var(--grey10)"}
          size={"big50"}
          borderColor={"var(--grey10)"}
          hoverColor={"var(--grey0)"}
          hoverbackGroundColor={"var(--grey10)"}
          handleClick={() => {console.log("Botão grande")}}
          >motos</ThemeButton>
        </div>
      </ContainerHomeWelcome>
      <ContainerHome>
        <ContainerProductPerfil>
          <p className="typeTittle">Leilão</p>
          <CarouselAuction products={productsAuction} isSellerPage={false} />
        </ContainerProductPerfil>
        <ContainerProductPerfil>
          <p className="typeTittle">Carros</p>
          <CarouselMotion
            type="carro"
            products={productsArray}
            isSellerPage={false}
          />
        </ContainerProductPerfil>
        <ContainerProductPerfil>
          <p className="typeTittle">Motos</p>
          <CarouselMotion
            type="moto"
            products={productsArray}
            isSellerPage={false}
          />
        </ContainerProductPerfil>
      </ContainerHome>
      <Footer />
    </>
  );
};
