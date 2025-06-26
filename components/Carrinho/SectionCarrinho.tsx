export default function SectionCarrinho() {
  return (
    <div
      className="relative w-full max-w-[1920px] h-[300px] flex flex-col justify-center items-center
                 text-verde text-center px-5 bg-[url('/SectionCart.svg')] bg-cover bg-center
                 font-['Plus Jakarta Sans','Roboto',sans-serif]
                 max-[1024px]:h-[250px]
                 max-[768px]:h-[200px]
                 max-[480px]:h-[140px] max-[480px]:bg-none max-[480px]:bg-[#f5f5f5]"
    >
      <h1
        className="text-[48px] font-bold m-0 text-[var(--verde-color)]
                   max-[1024px]:text-[36px]
                   max-[768px]:text-[28px]
                   max-[480px]:text-[24px]"
      >
        Carrinho
      </h1>
        
      <div
        className="mt-2 text-[18px] flex items-center gap-2 text-[var(--verde-color)]
                   max-[1024px]:text-[16px]
                   max-[768px]:text-[14px] max-[768px]:gap-[6px]
                   max-[480px]:text-[12px] max-[480px]:gap-[4px]"
      >
        <a
          href="/produtos"
          className="hover:underline transition-opacity duration-300 cursor-pointer text-inherit"
        >
          <span>Home</span>
        </a>

        <span>
          <img src="./arrow.svg" className="w-[19px] h-[19px] hover:scale-125 transition-transform max-[1068px]:w-[16px] max-[480px]:w-[15px]"/>
        </span>

        <span className="cursor-default">Carrinho</span>
      </div>
    </div>
  );
}
