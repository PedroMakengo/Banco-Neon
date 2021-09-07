import { AppNeon } from "./components/AppNeon";
import { Comments } from "./components/Comments";
import { Header } from "./components/Header";
import { NeonPejota } from "./components/NeonPejota";
import { GlobalStyle } from "./style/global";

function App() {
  return (
    <>
      <Header />
      <AppNeon />
      <NeonPejota />
      <Comments />
      <GlobalStyle />
    </>
  );
}

export default App;
