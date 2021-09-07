import { AppNeon } from "./components/AppNeon";
import { Header } from "./components/Header";
import { NeonPejota } from "./components/NeonPejota";
import { GlobalStyle } from "./style/global";

function App() {
  return (
    <>
      <Header />
      <AppNeon />
      <NeonPejota />
      <GlobalStyle />
    </>
  );
}

export default App;
