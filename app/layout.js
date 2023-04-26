import Image from "next/image";
import Link from "next/link";
import logoImage from "../public/media/images/logo.png";
import styles from "../styles/Navbar.module.css";
import "../styles/globals.css";
import { Cardo, Quicksand } from "next/font/google";

const cardo = Cardo({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cardo",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "All quotes",
    route: "/all-quotes",
  },
  {
    label: "Add quote",
    route: "/add-quote",
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cardo.variable} ${quicksand.variable}`}>
      <head>
        <title>Quoteling</title>
      </head>
      <body>
        <header className={styles.header}>
          <nav className={styles.navbar}>
            <Link href={"/"}>
              <Image src={logoImage} alt="logo.png" height={60} />
            </Link>
            <ul className={styles.links}>
              {links.map(({ label, route }) => (
                <li key={route} className={styles.link}>
                  <Link className={styles.link} href={route}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
