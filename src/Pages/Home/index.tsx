import { useContext, useEffect } from "react";

import { Container } from "./style";

import { TokenContext } from "../../Providers/Token";
import { Footer } from "../../Component/Footer";
import { Header } from "../../Component/Header";
import { CardPerfilAdm } from "../../Component/CardPerfilAdm";


export const Home = () => {
  const { token } = useContext(TokenContext);

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <>
      <Header></Header>
      <Container>
        <CardPerfilAdm />
        <div className="teste">
          <p>Conteudo teste</p>
          <p>Conteudo teste</p>
          <p>Conteudo teste</p>
          <p>Conteudo teste</p>
          <p>Conteudo teste</p>
          <p>Conteudo teste</p>
          <p>Conteudo teste</p>
          <p>Conteudo teste</p>
          <p>Conteudo teste</p>
          <p>Conteudo teste</p>
        </div>
        <Footer></Footer>
      </Container>
    </>
  );
};
