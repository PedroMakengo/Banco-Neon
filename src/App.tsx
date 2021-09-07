import { AppNeon } from "./components/AppNeon";
import { Header } from "./components/Header";
import { GlobalStyle } from "./style/global";

function App() {
  return (
    <>
      <Header />
      <AppNeon />

      <GlobalStyle />
    </>
  );
}

export default App;
