import { ThemeButton } from "../../../Styles/ThemeButton";
import { IProduct } from "../../../interfaces/product";
import { priceFormarter } from "../../../utils";
import { useEffect, useState } from "react";
import api from "../../../Services";

type InfoProductProps = {
  product: IProduct;
};
export const InfoProduct = ({ product }: InfoProductProps) => {
  // const [cover, setCover] = useState<string>("");
  const [userPhoneNumber, setUserPhoneNumber] = useState<string>("");
  const userId = localStorage.getItem("@motor:id");
  const token = localStorage.getItem("@motor:token");

  useEffect(() => {
    api
      .get(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) =>
        setUserPhoneNumber(res.data.user.phone.replace(/\D/g, ""))
      );
  }, []);

  // useEffect(() => {
  //   product.photos.map((photo, index) => {
  //     if (photo.is_cover_img === true) {
  //       setCover(photo.content);
  //     }
  //   });
  // }, []);

  const openLinkInNewTab = (link: string) => {
    window.open(
      `https://api.whatsapp.com/send?phone=55${link}&text=Olá, fiquei interessado no veiculo/`,
      "_blank",
      "noreferrer"
    );
  };

  return (
    <>
      <figure className="figure">
        <img className="img" alt="" src={product.photos[0].content} />
      </figure>
      <div className="container">
        <div className="container2">
          <h2 className="productModel">{product.model}</h2>
          <div className="container--info">
            <div className="container--info-product">
              <span>{product.year}</span>
              <span>{product.km} KM</span>
            </div>
            <p className="price">R$ {Number(product.price / 100).toFixed(2)}</p>
          </div>
        </div>
        <ThemeButton
          backGroundColor={"var(--brand1)"}
          color={"var(--whiteFixed)"}
          size={"medium"}
          borderColor={"var(--brand1)"}
          handleClick={() => {
            openLinkInNewTab(userPhoneNumber);
          }}
        >
          Comprar
        </ThemeButton>
      </div>
    </>
  );
};
