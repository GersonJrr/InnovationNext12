import Navbar from '../components/NavBar';
import { ProdutosLista } from '../components/Produtos/ProdutosLista';
import Paginacao from '../components/Produtos/Paginacao';
import { useProdutos } from '../Hooks/useProdutos';
import Footer from '../components/Footers';


export default function Catalogo() {
  const {
    produtos,
    paginaAtual,
    totalPaginas,
    carregando,
    carregarProdutos,
  } = useProdutos();

  return (
    <>
      <Navbar />
      <div className="max-w-[1600px] mx-auto mt-12 px-4">
        <ProdutosLista produtos={produtos} carregando={carregando} />
      </div>

      <div className="mb-5">
        <Paginacao
          paginaAtual={paginaAtual}
          totalPaginas={totalPaginas}
          onPaginaChange={carregarProdutos}
          carregando={carregando}
        />
      </div>

      <Footer />
    </>
  );
}
