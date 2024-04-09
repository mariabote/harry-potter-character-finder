import logoUrl from '/images/hp_logo.png'

function Header() {
  return (
    <header>
      <img
        className="logo__hp"
        src={logoUrl}
        alt="logo con el texto Harry Potter"
      />
    </header>
  );
}

export default Header;
