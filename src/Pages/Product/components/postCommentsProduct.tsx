import React, { useEffect, useState } from "react";
import { ThemeButton } from "../../../Styles/ThemeButton";
import { nameToAcronym } from "../../../utils";
import { ContainerPostComment } from "../style";
import { IProduct } from "../../../interfaces/product";
import { IUser } from "../../../interfaces/user";

type PostCommentsProductProps = {
  product: IProduct;
};

export const PostCommentsProduct = ({ product }: PostCommentsProductProps) => {
  const [comment, setComment] = useState("");
  const [ user, setUser ] = useState<IUser>()
  useEffect(() => {
    setUser(product.user);
  }, [])

  const sugestions: string[] = [
    "Gostei muito!",
    "Incrível!",
    "Recomendarei para meus amigos!",
  ];
  return (
    <ContainerPostComment
      className="ContainerPostComment"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="coment--user">
        <figure>
          <div className="avatar">
            {nameToAcronym(user?.name || "nome Usuario")}
          </div>
        </figure>
        <span className="coment--user-name">{user?.name  || "nome Usuario"}</span>
      </div>

      <textarea
        name="coment"
        cols={50}
        rows={10}
        value={comment}
        onChange={(e) => {
          setComment(e.currentTarget.value);
        }}
      ></textarea>
      <ul className="comments--sugestion">
        {sugestions.map((sugestion, index) => {
          return (
            <li
              key={index}
              onClick={(e) => {
                setComment(comment + " " + sugestions[index]);
              }}
            >
              {sugestion}
            </li>
          );
        })}
      </ul>
      <ThemeButton
        backGroundColor={"var(--brand1)"}
        color={"var(--whiteFixed)"}
        size={"big"}
        borderColor={"var(--grey0)"}
        type="submit"
        handleClick={() => {
          console.log("Comentou");
        }}
      >
        Comentar
      </ThemeButton>
    </ContainerPostComment>
  );
};
