import { ProflieViewUser } from "./Pages/ProfileViewUser";
import { Routes } from "./Routes";
import { GlobalStyle } from "./Styles/global";

export const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
      <ProflieViewUser />
    </div>
  );
};
