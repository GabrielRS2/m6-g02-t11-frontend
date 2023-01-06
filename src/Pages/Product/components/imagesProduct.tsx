import React, { useState } from "react";
import { ContainerImages } from "../style";
import { IProduct } from "../../../interfaces/product";
import { ModalPhotoClicked } from "../../../Component/ModalPhotoClicked";

type ImagesProductProps = {
  product: IProduct;
};

export const ImagesProduct = ({ product }: ImagesProductProps) => {
  const [modal0, setModal0] = useState(false);
  const [image, setImage] = useState("");

  return (
    <ContainerImages className="ContainerImages">
      <ModalPhotoClicked
        imageSrc={image}
        openModalPhotoClicked={modal0}
        setOpenModalPhotoClicked={setModal0}
      />
      <h2 className="description--tittle">Fotos</h2>
      <div className="images">
        {product.images &&
          product.images.map(
            (image, index) =>
              index < 6 && (
                <figure
                  key={index}
                  onClick={() => {
                    setImage(image);
                    setModal0(true);
                  }}
                >
                  <img src={image} alt="foto do produto" />
                </figure>
              )
          )}
      </div>
    </ContainerImages>
  );
};
