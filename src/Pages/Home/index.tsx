import { useContext, useEffect } from "react";

import { Container } from "./style";

import { TokenContext } from "../../Providers/Token";
import { Footer } from "../../Component/Footer";
import { Header } from "../../Component/Header";

export const Home = () => {
  const { token } = useContext(TokenContext);

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <Container>
      <Header></Header>
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
        <p>Conteudo teste</p>
        <p>Conteudo teste</p>
      </div>
      <Footer></Footer>
    </Container>
  );
};
