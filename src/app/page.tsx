import AboutPage from "./component/About/AboutPage";
import Center from "./component/Center";
import ContactPage from "./component/Contact/ContactPage";
import Header from "./component/Header/Header";
import NameCard from "./component/NameCard";
import ProjectPage from "./component/Projects/ProjectPage";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section id="Home">
          <Center className="w-4/5 pt-28">
            <NameCard />
          </Center>
        </section>

        <section
          id="About"
          className="md:scroll-mt-20 min-h-[calc(100vh-80px-120px)]"
        >
          <AboutPage />
        </section>

        <section id="Projects" className="md:scroll-mt-20 ">
          <ProjectPage />
        </section>

        <section id="Contact" className="md:scroll-mt-20 ">
          <ContactPage />
        </section>
      </main>
    </>
  );
}
