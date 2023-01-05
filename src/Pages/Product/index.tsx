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

import { ThemeButton } from "../../Styles/ThemeButton";
import { nameToAcronym, priceFormarter } from "../../utils";
import { CardAdmDetail } from "../../Component/CardAdmDetail";
import { ModalPhotoClicked } from "../../Component/ModalPhotoClicked";


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
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJEkO0wOF0vZ04REClJvIkdPb20CBmUfijcXJMsH_WAta7eQEOY1fpMANwy9lBDDr9Qi4&usqp=CAU",
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjZlUiYw7HlWVaiLmj90G7Vrll6IZJCrohmA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB7R06AaefeDlB-y4dIDxdi4xqCQUILJo0jsNBz-oyGhiXHDHRv-D_St63za5GSmFpvEA&usqp=CAU",
    "https://http2.mlstatic.com/D_NQ_NP_642923-MLB52415973360_112022-O.jpg",
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

  const hoje = new Date();
  const [comment, setComment] = useState("");
  const [openModalPhotoClicked, setOpenModalPhotoClicked] = useState(false);
  const [photoClicked,setPhotoClicked]= useState('')
  const { productId }: IProductId = useParams();
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const sugestions: string[] = [
    "Gostei muito!",
    "Incrível!",
    "Recomendarei para meus amigos!",
  ];

  const getPhotoAndOpenModal=(imageSrc:string)=>{
    setPhotoClicked(imageSrc);
    setOpenModalPhotoClicked(true);
  }


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
                        <img
                          src={image}
                          alt="foto do produto"
                          onClick={() => getPhotoAndOpenModal(image)}
                        />
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
          <CommentsProducts product={product} />
          <PostCommentsProduct product={product} />


          <footer>
            <Footer absolute />
          </footer>
        </ContainerStyeld>
      )}

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
      {openModalPhotoClicked && (
        <ModalPhotoClicked
          imageSrc={photoClicked}
          setOpenModalPhotoClicked={setOpenModalPhotoClicked}
          openModalPhotoClicked={openModalPhotoClicked}
          
        />
      )}
    </>
  );
};
