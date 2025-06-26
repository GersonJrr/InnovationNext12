import Navbar from '../components/NavBar';
import CarrinhoContainer from '../components/Carrinho/CarrinhoContainer';
import SectionCarrinho from '../components/Carrinho/SectionCarrinho';
import Footer from '../components/Footers';


export default function CarrinhoPage() {
  return (
    <>
      <Navbar/>
      <SectionCarrinho/>
      <CarrinhoContainer/>
      <Footer/>
    </>
  );
}
