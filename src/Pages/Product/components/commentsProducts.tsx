import React, { useEffect, useRef, useState } from "react";
import { ContainerComments } from "../style";
import { nameToAcronym } from "../../../utils";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import { IComents, IProduct } from "../../../interfaces/product";
import { IUser } from "../../../interfaces/user";

type CommentsProductsProps = {
  product: IProduct;
  coments: IComents[];
};

export const CommentsProducts = ({ product, coments }: CommentsProductsProps) => {
  const carousel = useRef<HTMLDivElement>(null);
  const hoje = new Date();
  const [ user, setUser ] = useState<IUser>()
  useEffect(() => {
    setUser(product.user);
  }, [])

  return (
    <ContainerComments className="ContainerComments">
      <div ref={carousel} className="carousel">
        <h3>Comentários</h3>
        <div className="inner-carousel">
          {coments &&
            coments.map((coment, index) => (
              <div key={index} className="item">
                <div className="coment--user">
                  <figure>
                      <div className="avatar">
                        {nameToAcronym(user?.name || "nome usuario")}
                      </div>
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
