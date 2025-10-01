import HeaderStyled from "./Header.style";

function Header() {
  const price = 0;
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price)

  return (
    <HeaderStyled>
      <img src="/images/logo.png" alt="MilhasPix logo"  />
      <p>{formattedPrice}</p>
    </HeaderStyled>
  )
}

export default Header;