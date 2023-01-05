import React from "react";
import { ContainerDescription } from "../style";
import { IProduct } from "../../../interfaces/product";
type DescProductProps = {
  product: IProduct;
};
export const DescProduct = ({ product }: DescProductProps) => {
  return (
    <ContainerDescription className="ContainerDescription">
      <h2 className="description--tittle">Descrição</h2>
      <p className="description--text">{product.description}</p>
    </ContainerDescription>
  );
};
