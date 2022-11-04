import { Hero } from "../components/home/hero";
import { Needs } from "../components/home/needs";
import { Benefits } from "../components/home/benefits";
import { Footer } from "../components/home/footer";
import { Header } from "../components/home/header";
import { Hero2 } from "../components/home/hero2";
import { Newsletter } from "../components/home/newsletter";
import { Solutions } from "../components/home/solutions";
import { Values } from "../components/home/values";

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
