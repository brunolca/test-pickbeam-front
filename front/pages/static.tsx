import { Hero } from "../components/static/hero";
import { Needs } from "../components/static/needs";
import { Benefits } from "../components/static/benefits";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Hero2 } from "../components/static/hero2";
import { Newsletter } from "../components/static/newsletter";
import { Solutions } from "../components/static/solutions";
import { Values } from "../components/static/values";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Needs />
      <Solutions />
      <Hero2 />
      <Benefits />
      <Values />
      <Newsletter />
      <Footer />
    </>
  );
}
