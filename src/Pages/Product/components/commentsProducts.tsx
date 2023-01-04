import React, { useRef } from "react";
import { ContainerComments } from "../style";
import { nameToAcronym } from "../../../utils";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import { IProduct } from "../../../interfaces/product";

type CommentsProductsProps = {
  product: IProduct;
};

export const CommentsProducts = ({ product }: CommentsProductsProps) => {
  const carousel = useRef<HTMLDivElement>(null);
  const hoje = new Date();
  return (
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
                  <span className="coment--user-name">{coment.user.name}</span>
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
  );
};
