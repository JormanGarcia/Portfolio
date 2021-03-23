import Layout from "../components/layout";

export default function about() {
  return (
    <Layout>
      <div className="container about">
        <h2 className="border-text title">Sobre mí. </h2>

        <p className="first-paragraph">
          Mi nombre es Jorman García, soy un desarrollador web orientado al
          front-end especializado en tecnologías como <span>ReactJs</span> y{" "}
          <span>NodeJs</span>.
        </p>
        <br />
        <p>
          Me apasiona la construcción de sitios web visualmente estéticos y
          funcionales, así como asumir retos que me permitan evolucionar tanto
          personal como profesionalmente.
        </p>
        <div className="img"></div>

        <h4 className="border-text subtitle">Tecnologías que manejo</h4>

        <ul>
          <li>
            <div className="icon">
              <img src="/react.svg" />
            </div>

            <div>ReactJs</div>
          </li>
          <li>
            <div className="icon">
              <img src="/nextjs.svg" />
            </div>
            <div>NextJs</div>
          </li>
          <li>
            <div className="icon">
              <img src="/nodejs.svg" />
            </div>
            <div>NodeJs</div>
          </li>
          <li>
            <div className="icon">
              <img src="/expressjs.svg" />
            </div>
            <div>Express</div>
          </li>
          <li>
            <div className="icon">
              <img src="/vuejs.svg" />
            </div>
            <div>VueJs</div>
          </li>

          <li>
            <div className="icon">
              <img src="/sass.svg" />
            </div>
            <div>Scss</div>
          </li>
          <li>
            <div className="icon">
              <img src="/mongodb.svg" />
            </div>
            <div>MongoDB</div>
          </li>
          <li>
            <div className="icon">
              <img src="/tailwind.svg" />
            </div>
            <div>Tailwind</div>
          </li>
        </ul>

        <h4 className="border-text subtitle">
          Tecnologías con las que estoy familiarizado
        </h4>

        <ul>
          <li>
            <div className="icon">
              <img src="/python.svg" />
            </div>
            <div>Python</div>
          </li>
          <li>
            <div className="icon">
              <img src="/php.svg" />
            </div>
            <div>PHP</div>
          </li>
          <li>
            <div className="icon">
              <img src="/typescript.svg" />
            </div>
            <div>Typescript</div>
          </li>
          <li>
            <div className="icon">
              <img src="/redux.svg" />
            </div>
            <div>Redux</div>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
