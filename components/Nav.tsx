import navStyles from "../styles/Nav.module.css";
import Link from "next/link";

export default function nav() {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/artistAlbums">Artist's Albums</Link>
        </li>
      </ul>
    </nav>
  );
}
