import { AccountMoneny } from "./components/AccountMoney";
import { AppNeon } from "./components/AppNeon";
import { Comments } from "./components/Comments";
import { Footer } from "./components/Footer";
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
      <AccountMoneny />
      <Footer />

      <GlobalStyle />
    </>
  );
}

export default App;
