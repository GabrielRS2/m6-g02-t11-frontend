import React, { useEffect, useState } from "react";
import { ThemeButton } from "../../../Styles/ThemeButton";
import { Seller } from "../style";
import { nameToAcronym } from "../../../utils";
import { IProduct } from "../../../interfaces/product";
import { useHistory } from "react-router-dom";
import { IUser } from "../../../interfaces/user";

type SellerProductProps = {
  product: IProduct;
};

export const SellerProduct = ({ product }: SellerProductProps) => {
  const history = useHistory();
  const [user, setUser] = useState<IUser>();
  useEffect(() => {
    setUser(product.user);
  }, []);

  return (
    <Seller className="Seller">
      <figure className="figure">
        <div className="avatar">{nameToAcronym(`${product.user.name}`)}</div>
      </figure>
      <p className="seller--name">{product.user.name}</p>
      <p className="seller--description">{product.user.description}</p>
      <ThemeButton
        backGroundColor={"var(--grey0)"}
        color={"var(--whiteFixed)"}
        size={"big"}
        borderColor={"var(--grey0)"}
        handleClick={() => {
          history.push(`/dashboard/${user?.id}`);
        }}
      >
        Ver todos anuncios
      </ThemeButton>
    </Seller>
  );
};
