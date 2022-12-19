import { useContext, useEffect } from "react";

import { Teste2 } from "../../Component/Teste";
import { Container, Teste } from "./style";

import { TokenContext } from "../../Providers/Token";
import { Footer } from "../../Component/Footer";


export const Home = () => {
  const { token } = useContext(TokenContext);

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <Container>
      <Teste>teste:{token}</Teste>
      <Teste2>Teste2</Teste2>
      <Footer/>
    </Container>
  );
};
