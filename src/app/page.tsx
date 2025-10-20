import AboutPage from "../components/About/AboutPage";
import Center from "../components/Center";
import ContactPage from "../components/Contact/ContactPage";
import Header from "@/components/Header/Header";
import NameCard from "../components/NameCard";
import ProjectPage from "../components/Projects/ProjectPage";
import Footer from "../components/Footer";
import BlogsSection from "../components/Blogs/BlogsSection";

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
