import React from "react";
import { ThemeButton } from "../../../Styles/ThemeButton";
import { Seller } from "../style";
import { nameToAcronym } from "../../../utils";
import { IProduct } from "../../../interfaces/product";
import { useHistory } from "react-router-dom";

type SellerProductProps = {
  product: IProduct;
};

export const SellerProduct = ({ product }: SellerProductProps) => {
  const history = useHistory()

  return (
    <Seller className="Seller">
      <figure className="figure">
        <div className="avatar">
          {nameToAcronym(`${product.user.name}`)}
        </div>
      </figure>
      <p className="seller--name">{product.user.name}</p>
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
          history.push(`/dashboard/${1}`);
        }}
      >
        Ver todos anuncios
      </ThemeButton>
    </Seller>
  );
};
