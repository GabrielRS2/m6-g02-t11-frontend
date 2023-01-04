import { useParams } from "react-router-dom";

import { ContainerStyeld } from "./style";

import { Header } from "../../Component/Header";
import { Footer } from "../../Component/Footer";
import { IProduct } from "../../interfaces/product";
import { InfoProduct } from "./components/infoProduct";
import { DescProduct } from "./components/descProduct";
import { ImagesProduct } from "./components/imagesProduct";
import { SellerProduct } from "./components/sellerProduct";
import { CommentsProducts } from "./components/commentsProducts";
import { PostCommentsProduct } from "./components/postCommentsProduct";
import { useEffect, useState } from "react";

import api from "../../Services";

const productsa: IProduct = {
  cover_img: "/Assets/carro_generico.jpg",
  model: `Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200`,
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  seller: {
    name: "Samuel Leão",
    photo: "https://cdn.dribbble.com/users/1294625/screenshots/4025055/090.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  km: `0`,
  year: "2020",
  price: `123456789`,
  is_active: true,
  vehicle_type: "carro",
  sale_type: "leilao",
  images: [
    "/Assets/carro_generico.jpg",
    "/Assets/carro_generico.jpg",
    "/Assets/carro_generico.jpg",
    "/Assets/carro_generico.jpg",
    "/Assets/carro_generico.jpg",
    "/Assets/carro_generico.jpg",
    "/Assets/carro_generico.jpg",
  ],
  coments: [
    {
      coment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      data: new Date("2022/01/26"),
      user: {
        photo:
          "https://cdn.dribbble.com/users/1294625/screenshots/4025055/090.png",
        name: "Samuel Leão",
        description: "lorem asjhfiuwief dhbkjfbau basd ",
      },
    },
    {
      coment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      data: new Date("2022/01/26"),
      user: {
        photo:
          "https://cdn.dribbble.com/users/1294625/screenshots/4025055/090.png",
        name: "Samuel Leão",
        description: "lorem asjhfiuwief dhbkjfbau basd ",
      },
    },
    {
      coment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      data: new Date("2022/01/26"),
      user: {
        photo:
          "https://cdn.dribbble.com/users/1294625/screenshots/4025055/090.png",
        name: "Samuel Leão",
        description: "lorem asjhfiuwief dhbkjfbau basd ",
      },
    },
    {
      coment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      data: new Date("2022/08/26"),
      user: {
        photo:
          "https://cdn.dribbble.com/users/1294625/screenshots/4025055/090.png",
        name: "Samuel Leão",
        description: "lorem asjhfiuwief dhbkjfbau basd ",
      },
    },
    {
      coment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      data: new Date("2022/12/28 15:00:00"),
      user: {
        photo:
          "https://cdn.dribbble.com/users/1294625/screenshots/4025055/090.png",
        name: "Samuel Leão",
        description: "lorem asjhfiuwief dhbkjfbau basd ",
      },
    },
  ],
};

export const ProductPage = () => {
  const { productId }: any = useParams();
  const [product, setProduct] = useState(productsa);
  useEffect(() => {
    api.get(`products/${productId}`).then((response: any) => {
      setProduct(response);
    });
  }, []);

  return (
    <>
      {product && (
        <ContainerStyeld className="ContainerStyeld">
          <Header />
          <InfoProduct product={product} />
          <DescProduct product={product} />
          <div className="container--flutuante">
            <ImagesProduct product={product} />
            <SellerProduct product={product} />
          </div>
          <CommentsProducts product={product} />
          <PostCommentsProduct product={product} />

          <footer>
            <Footer absolute />
          </footer>
        </ContainerStyeld>
      )}
    </>
  );
};
