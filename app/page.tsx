import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { Enfoque } from "@/components/enfoque";
import { Categorias } from "@/components/categorias";
import { Visitantes } from "@/components/visitantes";
import { Negocios } from "@/components/negocios";
import { Planes } from "@/components/planes";
import { Contacto } from "@/components/contacto";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Enfoque />
        <Categorias />
        <Visitantes />
        <Negocios />
        <Planes />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
