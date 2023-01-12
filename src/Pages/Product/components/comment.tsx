import { nameToAcronym, calculateTime } from "../../../utils";
import { IComents, IProduct } from "../../../interfaces/product";
import { useState } from "react";
import api from "../../../Services";
import { useHistory } from "react-router-dom";

type CommentCardProps = {
  product: IProduct;
  coment: IComents;
  index: number;
  userId: string | null;
};

export const CommentCard = ({
  product,
  index,
  coment,
  userId,
}: CommentCardProps) => {
  const [toEdit, setToEdit] = useState(false);
  const [erased, setErased] = useState(false);
  const [updatedComment, setUpdatedComment] = useState(coment);
  const [newComment, setNewComment] = useState(coment.content);

  const history = useHistory();

  const token = localStorage.getItem("@motor:token");

  const deleteComment = () => {
    api
      .delete(`comments/${coment.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setErased(true);
        //modal de confirmacao de delete aqui?
      })
      .catch((err) => history.push("/login"));
  };

  const editComment = () => {
    api
      .patch(
        `comments/${coment.id}`,
        { content: newComment },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log(res.data.comment, coment);
        setUpdatedComment({ ...coment, user: coment.user });
      })
      .then((res) => {
        setToEdit(false);
        //modal de confirmacao que foi editado aqui?
      })
      .catch((err) => history.push("/login"));
  };

  return !erased ? (
    <div className="item">
      <div className="coment--user">
        <figure>
          <div className="avatar">{nameToAcronym(`${product.user.name}`)}</div>
        </figure>
        <span className="coment--user-name">{updatedComment.user.name}</span>
        <span className="coment--data">&#9702;</span>
        <span className="coment--data">
          {calculateTime(updatedComment.created_at)}
        </span>
      </div>
      {(updatedComment.user.id !== userId || !toEdit) && (
        <p className="coment--coment">{newComment}</p>
      )}
      {updatedComment.user.id === userId && toEdit && (
        <>
          <textarea
            name="coment"
            cols={45}
            rows={5}
            defaultValue={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <div className="button--container">
            <button className="edit--button" onClick={() => editComment()}>
              Enviar
            </button>
            <button
              className="delete--button"
              onClick={() => setToEdit(!toEdit)}
            >
              Cancelar
            </button>
          </div>
        </>
      )}
      {updatedComment.user.id === userId && !toEdit && (
        <div className="button--container">
          <button className="edit--button" onClick={() => setToEdit(!toEdit)}>
            Editar
          </button>
          <button className="delete--button" onClick={() => deleteComment()}>
            Apagar
          </button>
        </div>
      )}
    </div>
  ) : null;
};
