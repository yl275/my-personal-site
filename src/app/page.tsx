import AboutPage from "./component/About/AboutPage";
import Center from "./component/Center";
import ContactPage from "./component/Contact/ContactPage";
import Header from "./component/Header/Header";
import NameCard from "./component/NameCard";
import ProjectPage from "./component/Projects/ProjectPage";
import Footer from "./component/Footer";
import BlogsSection from "./component/Blogs/BlogsSection";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section id="Home">
          <Center className="w-4/5 pt-[15vh]">
            <NameCard />
          </Center>
        </section>

        <section
          id="About"
          className="md:scroll-mt-25"
        >
          <AboutPage />
        </section>

        <section id="Projects" className="md:scroll-mt-20 ">
          <ProjectPage />
        </section>

        <section id="Blogs" className="md:scroll-mt-20 ">
          <BlogsSection />
        </section>

        <section id="Contact" className="md:scroll-mt-27 min-h-[70vh]">
          <ContactPage />
        </section>
        <Footer></Footer>
      </main>
    </>
  );
}
