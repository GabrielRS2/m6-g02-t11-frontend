import { useContext, useEffect } from "react";

import { Teste2 } from "../../Component/Teste";
import { Teste } from "./style";

import { TokenContext } from "../../Providers/Token";
import { ExamplesButton } from "../../Styles/ThemeButton/examples";


export const Home = () => {
  const { token } = useContext(TokenContext);

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <>
      <ExamplesButton></ExamplesButton>
    </>
  );
};
