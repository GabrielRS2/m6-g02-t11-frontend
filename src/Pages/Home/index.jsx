import { useContext, useEffect } from "react";
import { Teste2 } from "../../Component/Teste";
import { TokenContext } from "../../Providers/Token";
import { Teste } from "./style";

export const Home = () => {

  const { token } = useContext(TokenContext);

  useEffect(() => {
    console.log(token)
  }, [token])
  return (
    <>
      <Teste>teste:{ token }</Teste>
      <Teste2>Teste2</Teste2>
    </>
  );
};