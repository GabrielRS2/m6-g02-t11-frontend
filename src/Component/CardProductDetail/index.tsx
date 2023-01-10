import { ThemeButton } from "../../Styles/ThemeButton";

import { Container } from "./style";

import { IProduct } from "../../interfaces/product";
import { priceFormarter } from "../../utils";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../Services";

interface IPropsCardProductDetail {
  product: IProduct;
  className?: string;
}
export const CardProductDetail = ({
  product,
  className,
}: IPropsCardProductDetail) => {
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
  const openLinkInNewTab = (link: string) => {
    window.open(
      `https://api.whatsapp.com/send?phone=55${link}&text=Olá, fiquei interessado no veiculo/`,
      "_blank",
      "noreferrer"
    );
  };

  return (
    <Container className={className}>
      <h2 className="productModel">{product.model}</h2>
      <div className="containerInfo">
        <div className="containerInfoProduct">
          <p>{product.year}</p>
          <p>{product.km} KM</p>
        </div>
        <p className="price">R$ {priceFormarter(product.price)}</p>
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
    </Container>
  );
};
