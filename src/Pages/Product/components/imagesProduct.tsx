import React from "react";
import { ContainerImages } from "../style";
import { IProduct } from "../../../interfaces/product";

type ImagesProductProps = {
  product: IProduct;
};

export const ImagesProduct = ({ product }: ImagesProductProps) => {
  return (
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
  );
};
