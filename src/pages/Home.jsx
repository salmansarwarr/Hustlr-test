import { Navbar, Main, Product, Footer } from "../components";
import Wrapper from '../web3/Wrapper';

function Home() {
  return (
    <Wrapper>
      <Navbar />
      <Main />
      <Product />
      <Footer />
    </Wrapper>
  )
}

export default Home;