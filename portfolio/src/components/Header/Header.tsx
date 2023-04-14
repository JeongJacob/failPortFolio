import header from "./Header.module.css";

export default function Header() {
  return (
    <header className={header.wrapper}>
      <nav className={header.container}>
        <button className={header.navigation__tab}>Projects</button>
        <button className={header.navigation__tab}>Stack</button>
        <button className={header.navigation__tab}>Education</button>
        <button className={header.navigation__tab}>Experience</button>
      </nav>
    </header>
  );
}
