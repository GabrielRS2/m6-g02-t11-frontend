import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  ContainerComments,
  ContainerDescription,
  ContainerImages,
  ContainerPostComment,
  ContainerStyeld,
  Seller,
} from "./style";

import { Header } from "../../Component/Header";
import { Footer } from "../../Component/Footer";
import { DescriptionPageProduct } from "../../Component/DescriptionPageProduct";
import { IProduct } from "../../interfaces/product";
import { ThemeButton } from "../../Styles/ThemeButton";
import { nameToAcronym, priceFormarter } from "../../utils";
import { CardAdmDetail } from "../../Component/CardAdmDetail";

interface IProductId {
  productId: string;
}
const product: IProduct = {
  cover_img: "/Assets/carro_generico.jpg",
  model: `Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200`,
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  seller: {
    name: "Samuel Leão",
    photo:
    "https://cdn.dribbble.com/users/1294625/screenshots/4025055/090.png",
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
  const hoje = new Date();
  const [comment, setComment] = useState("");
  const { productId }: IProductId = useParams();
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const sugestions: string[] = [
    "Gostei muito!",
    "Incrível!",
    "Recomendarei para meus amigos!",
  ];

  useEffect(() => {
    setWidth(
      (carousel.current?.scrollHeight ? carousel.current?.scrollHeight : 0) -
        (carousel.current?.offsetHeight ? carousel.current?.offsetHeight : 0)
    );
  }, [width]);

  return (
    <>
      <ContainerStyeld className="ContainerStyeld">
        <Header />
        <figure className="figure">
          <img className="img" alt="" src={product.cover_img} />
        </figure>
        <div className="container">
          <div className="container2">
            <h2 className="productModel">{product.model}</h2>
            <div className="container--info">
              <div className="container--info-product">
                <span>{product.year}</span>
                <span>{product.km} KM</span>
              </div>
              <p className="price">R$ {priceFormarter(product.price)}</p>
            </div>
          </div>
          <ThemeButton
            backGroundColor={"var(--brand1)"}
            color={"var(--whiteFixed)"}
            size={"medium"}
            borderColor={"var(--brand1)"}
            handleClick={() => {
              console.log("Comprar");
            }}
          >
            Comprar
          </ThemeButton>
        </div>

        <ContainerDescription className="ContainerDescription">
          <h2 className="description--tittle">Descrição</h2>
          <p className="description--text">{product.description}</p>
        </ContainerDescription>
        <div className="container--flutuante">
          <ContainerImages className="ContainerImages">
            <h2 className="description--tittle">Fotos</h2>
            <div className="images">
              {product.images &&
                product.images.map(
                  (image, index) =>
                    index < 6 && (
                      <figure key={index}>
                        <img src={image} alt="foto do produto" />
                      </figure>
                    )
                )}
            </div>
          </ContainerImages>

          <Seller className="Seller">
            <figure className="figure">
              {product.seller.photo ? (
                <img
                  src={product.seller.photo}
                  alt={nameToAcronym(`${product.seller.name}`)}
                />
              ) : (
                <div className="avatar">
                  {nameToAcronym(`${product.seller.name}`)}
                </div>
              )}
            </figure>
            <p className="seller--name">{product.seller.name}</p>
            <p className="seller--description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            <ThemeButton
              backGroundColor={"var(--grey0)"}
              color={"var(--whiteFixed)"}
              size={"big"}
              borderColor={"var(--grey0)"}
              handleClick={() => {
                console.log("todos anuncios");
              }}
            >
              Ver todos anuncios
            </ThemeButton>
          </Seller>
        </div>
        <ContainerComments className="ContainerComments">
          <div ref={carousel} className="carousel">
            <h3>Comentários</h3>
            <div className="inner-carousel">
              {product.coments &&
                product.coments.map((coment, index) => (
                  <div key={index} className="item">
                    <div className="coment--user">
                      <figure>
                        {product.seller.photo ? (
                          <img
                            src={product.seller.photo}
                            alt={nameToAcronym(`${product.seller.name}`)}
                          />
                        ) : (
                          <div className="avatar">
                            {nameToAcronym(`${product.seller.name}`)}
                          </div>
                        )}
                      </figure>
                      <span className="coment--user-name">
                        {coment.user.name}
                      </span>
                      <span className="coment--data">&#9702;</span>
                      <span className="coment--data">
                        {formatDistance(
                          new Date(coment.data),
                          hoje,

                          { addSuffix: true, locale: ptBR }
                        )}
                      </span>
                    </div>
                    <p className="coment--coment">{coment.coment}</p>
                  </div>
                ))}
            </div>
          </div>
        </ContainerComments>
        <ContainerPostComment
          className="ContainerPostComment"
          onSubmit={(e) => {
            e.preventDefault();

            console.log(comment);
          }}
        >
          <div className="coment--user">
            <figure>
              {product.seller.photo ? (
                <img
                  src={product.seller.photo}
                  alt={nameToAcronym(`${product.seller.name}`)}
                />
              ) : (
                <div className="avatar">
                  {nameToAcronym(`${product.seller.name}`)}
                </div>
              )}
            </figure>
            <span className="coment--user-name">user.name</span>
          </div>

          <textarea
            name="coment"
            cols={50}
            rows={10}
            value={comment}
            onChange={(e) => {
              setComment(e.currentTarget.value);
            }}
          ></textarea>
          <ul className="comments--sugestion">
            {sugestions.map((sugestion, index) => {
              return (
                <li
                  key={index}
                  onClick={(e) => {
                    setComment(comment + " " + sugestions[index]);
                  }}
                >
                  {sugestion}
                </li>
              );
            })}
          </ul>
          <ThemeButton
            backGroundColor={"var(--brand1)"}
            color={"var(--whiteFixed)"}
            size={"big"}
            borderColor={"var(--grey0)"}
            type="submit"
            handleClick={() => {
              console.log("Comentou");
            }}
          >
            Comentar
          </ThemeButton>
        </ContainerPostComment>
        <Footer absolute />
      </ContainerStyeld>
    </>
  );
};
