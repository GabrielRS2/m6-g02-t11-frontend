import React, { useEffect, useRef, useState } from "react";
import { ContainerComments } from "../style";
import { IComents, IProduct } from "../../../interfaces/product";
import { CommentCard } from "./comment";

type CommentsProductsProps = {
  product: IProduct;
  coments: IComents[];
};

export const CommentsProducts = ({
  product,
  coments,
}: CommentsProductsProps) => {
  //comentarios na ordem correta
  const sorter = (a: IComents, b: IComents) => {
    const date1 = new Date(a.created_at);
    const date2 = new Date(b.created_at);
    //@ts-ignore
    return date1 - date2;
  };
  coments.sort(sorter);

  let userId = localStorage.getItem("@motor:id");
  if (!userId) {
    userId = "notLogged";
  }

  const carousel = useRef<HTMLDivElement>(null);
  return (
    <ContainerComments className="ContainerComments">
      <div ref={carousel} className="carousel">
        <h3>Comentários</h3>
        <div className="inner-carousel">
          {coments &&
            coments.map((coment, index) => (
              <CommentCard
                key={index}
                product={product}
                index={index}
                coment={coment}
                userId={userId}
              />
            ))}
        </div>
      </div>
    </ContainerComments>
  );
};
