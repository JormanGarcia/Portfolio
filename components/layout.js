import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";

export default function layout(props) {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <Head>
        <title>Jorman García | Desarrollador Web</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <nav className={menu ? "active" : ""}>
        <Link href="/">Inicio</Link>
        <Link href="/about">Sobre mí</Link>
        <Link href="/portfolio">Portafolio</Link>

        <p className="email">Jormanj_@outlook.com</p>

        <div className="social-nav">
          <a href="https://www.instagram.com/j7.garcia/">
            <img src="/instagram.svg"></img>
          </a>

          <a href="https://www.codewars.com/users/Jormang">
            <img src="/codewars.svg"></img>
          </a>
          <a href="https://github.com/JormanGarcia">
            <img src="/github2.svg"></img>
          </a>
        </div>
      </nav>

      <div className="translated-page">
        <Link href="/en/">EN</Link>
      </div>

      <header className={menu ? "active" : ""}>
        <div className="menu-button-container" onClick={() => setMenu(!menu)}>
          <div className="menu-line"></div>
          <div className="menu-line bottom"></div>
        </div>
      </header>
      <div className={menu ? "active main" : "main"}>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className="Body"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ x: 200 }}
          >
            {props.children}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
