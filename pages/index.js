import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
export default function index() {
  return (
    <Layout>
      <div className="hero">
        <div className="hero-image">
          <Image src="/me.jpg" width={2448} height={3264} />
        </div>
        <h1 className="border-text">
          Hello <span>World!</span>
        </h1>
        <p>
          ¡Hola!, me llamo <span>Jorman García</span> y soy{" "}
          <span>Desarrollador Front-End</span>.
        </p>
        <div className="to-portfolio">
          <Link href="/portfolio">Mira mi trabajo</Link>
        </div>
        <div className="social">
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
      </div>
    </Layout>
  );
}
