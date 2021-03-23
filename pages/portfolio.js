import Layout from "../components/layout";
import Item from "../components/item";
import portfolioItems from "../portfolio-items";
import { motion } from "framer-motion";

export default function portfolio() {
  return (
    <Layout>
      <div className="container">
        <h2 className="border-text title">Portafolio</h2>
        <div className="portfolio">
          {portfolioItems.map((item) => (
            <Item
              img={item.img}
              name={item.name}
              description={item.description}
              demo={item.demo}
              github={item.github}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
