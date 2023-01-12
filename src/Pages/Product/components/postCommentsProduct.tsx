import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ThemeButton } from "../../../Styles/ThemeButton";
import { nameToAcronym } from "../../../utils";
import { ContainerPostComment } from "../style";
import { IComents, IProduct } from "../../../interfaces/product";
import api from "../../../Services";
import { useHistory } from "react-router-dom";

type PostCommentsProductProps = {
  product: IProduct;
  setComments: Dispatch<SetStateAction<IComents[]>>;
  comments: IComents[];
};

export const PostCommentsProduct = ({
  product,
  setComments,
  comments,
}: PostCommentsProductProps) => {
  const [comment, setComment] = useState("");
  const [username, setUserName] = useState("Visitante");
  const [tokenIsValid, setTokenIsValid] = useState(false);

  const history = useHistory();

  const id = localStorage.getItem("@motor:id");
  const token = localStorage.getItem("@motor:token");

  useEffect(() => {
    api
      .get(`users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUserName(res.data.user.name);
        setTokenIsValid(true);
      })
      .catch((err) => {
        localStorage.removeItem("@motor:id");
        localStorage.removeItem("@motor:token");
      });
  }, []);

  const submit = () => {
    api
      .post(
        `/comments/${product.id}`,
        { content: comment },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        setComments([...comments, res.data.comment]);
        setComment("");
        //aciona modal que deu tudo certo aqui?
        window.scrollTo(0, 0);
      })
      .catch((err) => history.push("/login"));
  };

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
          <div className="avatar">{nameToAcronym(`${username}`)}</div>
        </figure>
        <span className="coment--user-name">{username}</span>
      </div>
      {tokenIsValid && (
        <>
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
            borderColor={"var(--grey1)"}
            type="submit"
            handleClick={() => {
              submit();
            }}
          >
            Comentar
          </ThemeButton>
        </>
      )}
      {!tokenIsValid && (
        <>
          <textarea
            name="coment"
            cols={50}
            rows={10}
            value={"Tem de estar logado pra comentar!"}
            readOnly
          ></textarea>
          <ThemeButton
            backGroundColor={"var(--grey3)"}
            color={"var(--whiteFixed)"}
            size={"big"}
            borderColor={"var(--grey3)"}
            type="submit"
            handleClick={() => {
              history.push("/login");
            }}
          >
            Log in
          </ThemeButton>
        </>
      )}
    </ContainerPostComment>
  );
};
