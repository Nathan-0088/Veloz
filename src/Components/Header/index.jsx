import "./header.css";

export default function Header() {
  return (
    <header>
      <a href="/">
        <h1>Veloz</h1>
      </a>
      <nav>
        <a href="/" id="a">home</a>
        <a href="/favoritos" id="a">favoritos</a>
      </nav>
    </header>
  );
}
