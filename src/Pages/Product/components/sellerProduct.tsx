import React from "react";
import { ThemeButton } from "../../../Styles/ThemeButton";
import { Seller } from "../style";
import { nameToAcronym } from "../../../utils";
import { IProduct } from "../../../interfaces/product";

type SellerProductProps = {
  product: IProduct;
};

export const SellerProduct = ({ product }: SellerProductProps) => {
  return (
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
  );
};
