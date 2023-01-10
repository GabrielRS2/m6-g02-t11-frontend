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
import { useEffect, useState } from "react";
import api from "../../Services";

import * as scroll from "react-hash-scroll";
import { Link } from "react-router-dom";

const product: IProduct = {
  model: `Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200`,
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Product title stays here - max 1 line
    Product title stays here - maximum 1 line`,
  user: {
    cpf: "096.222.222-04",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    dob: "1981/05/06",
    email: "samuel@mail.com",
    id: "474bcb5d-db6a-4919-8ead-5d8057733185",
    isActive: true,
    isSeller: true,
    name: "Samuel Leao",
    phone: "(41) 99999-9999",
  },
  km: 0,
  year: "2020",
  price: 123456789,
  is_active: true,
  vehicleType: "motorbike",
  saleType: "leilao",
  photos: [
    {
      id: "a36faa78-0774-4fa1-9421-7d931a35f0a7",
      content:
        "https://supermotohonda.com.br/uploads/569/motos-2021/street/nxr-160-bros-esdd/7-lateral_vermelho.webp",
      is_cover_img: true,
    },
    {
      id: "3c29aff2-f626-43fe-a641-2a2118c67ad9",
      content:
        "https://supermotohonda.com.br/uploads/569/motos-2021/street/nxr-160-bros-esdd/7-lateral_vermelho.webp",
      is_cover_img: false,
    },
    {
      id: "5bfb7f66-bc14-4f0f-aae9-cff157156a28",
      content:
        "https://supermotohonda.com.br/uploads/569/motos-2021/street/nxr-160-bros-esdd/7-lateral_vermelho.webp",
      is_cover_img: false,
    },
    {
      id: "5f126065-ce6a-46d3-ada3-258e7651b0cd",
      content:
        "https://supermotohonda.com.br/uploads/569/motos-2021/street/nxr-160-bros-esdd/7-lateral_vermelho.webp",
      is_cover_img: false,
    },
  ],
};

const productCar: IProduct = {
  model: `Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200`,
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Product title stays here - max 1 line
    Product title stays here - maximum 1 line`,
  user: {
    cpf: "096.222.222-04",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    dob: "1981/05/06",
    email: "samuel@mail.com",
    id: "474bcb5d-db6a-4919-8ead-5d8057733185",
    isActive: true,
    isSeller: true,
    name: "Samuel Leao",
    phone: "(41) 99999-9999",
  },
  km: 0,
  year: "2020",
  price: 123456789,
  is_active: true,
  vehicleType: "car",
  saleType: "leilao",
  photos: [
    {
      id: "a36faa78-0774-4fa1-9421-7d931a35f0a7",
      content:
        "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/novo-cruze-nb.jpg?imwidth=960",
      is_cover_img: true,
    },
    {
      id: "3c29aff2-f626-43fe-a641-2a2118c67ad9",
      content:
        "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/novo-cruze-nb.jpg?imwidth=960",
      is_cover_img: false,
    },
    {
      id: "5bfb7f66-bc14-4f0f-aae9-cff157156a28",
      content:
        "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/novo-cruze-nb.jpg?imwidth=960",
      is_cover_img: false,
    },
    {
      id: "5f126065-ce6a-46d3-ada3-258e7651b0cd",
      content:
        "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/novo-cruze-nb.jpg?imwidth=960",
      is_cover_img: false,
    },
  ],
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
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get("products").then((res) => setProducts(res.data.products));
  }, []);

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
        <p className="subTitle">
          Um ambiente feito para você explorar o seu melhor
        </p>
        <div className="buttonsContainer">
          <Link to={{ pathname: "/", hash: "#carros" }}>
            <ThemeButton
              backGroundColor={"var(--brand2)"}
              color={"var(--grey10)"}
              size={"big50"}
              borderColor={"var(--grey10)"}
              hoverColor={"var(--grey0)"}
              hoverbackGroundColor={"var(--grey10)"}
              handleClick={() => {
                console.log("Botão grande");
              }}
            >
              Carros
            </ThemeButton>
          </Link>
          <Link to={{ hash: "#motos" }}>
            <ThemeButton
              backGroundColor={"var(--brand2)"}
              color={"var(--grey10)"}
              size={"big50"}
              borderColor={"var(--grey10)"}
              hoverColor={"var(--grey0)"}
              hoverbackGroundColor={"var(--grey10)"}
              handleClick={() => {
                console.log("Botão grande");
              }}
            >
              Motos
            </ThemeButton>
          </Link>
        </div>
      </ContainerHomeWelcome>
      <ContainerHome>
        <scroll.HashScroll hash={"leilao"} behavior="smooth" position="start">
          <ContainerProductPerfil>
            <p className="typeTittle">Leilão</p>
            <CarouselAuction products={productsAuction} isSellerPage={false} />
          </ContainerProductPerfil>
        </scroll.HashScroll>
        <scroll.HashScroll hash={"carros"} behavior="smooth" position="start">
          <ContainerProductPerfil>
            <p className="typeTittle">Carros</p>
            <CarouselMotion
              type="car"
              products={productsArray}
              isSellerPage={false}
            />
          </ContainerProductPerfil>
        </scroll.HashScroll>
        <scroll.HashScroll hash={"motos"} behavior="smooth" position="start">
          <ContainerProductPerfil>
            <p className="typeTittle">Motos</p>
            <CarouselMotion
              type="motorbike"
              products={productsArray}
              isSellerPage={false}
            />
          </ContainerProductPerfil>
        </scroll.HashScroll>
      </ContainerHome>
      <Footer />
    </>
  );
};
