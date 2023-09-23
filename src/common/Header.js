export default function Header() {
  return (
    <header className="hd mw">
      <h1>
        <img src="/img/logo.svg" alt="Logo" />
      </h1>
      <nav>
        <a href="#!">shop</a>
        <a href="#!">blog</a>
        <a href="#!">our story</a>
      </nav>
      <div>
        <a href="#!">
          <i className="fa-solid fa-magnifying-glass"></i>
        </a>
        <a href="#!">
          <i className="fa-solid fa-basket-shopping" />
        </a>
        <a href="#!">
          <i className="fa-regular fa-user"></i>
        </a>
      </div>
    </header>
  );
}
