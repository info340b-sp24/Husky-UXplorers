import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Guide (props) {
  return (
    <div>
      <NavBar />
      <MainGuide />
      <Footer />
    </div>

  );
}

function MainGuide (props) {
  return (
    <main className="container-fluid">
      <div>
        <article>
          <section className="text-center bg-purple p-5 banner">
            <h1 className="text-light">The Husky UXplorers <b>Official</b> Guide to UX Design</h1>
            <p className="small-text text-light">May 11, 2024</p>
          </section>

          <section className="content">
            <h2 className="subheading mt-5">New to UX design? Congrats. You're at the right place.</h2>
            <h2>Portfolios</h2>
            <p>
              UX designers use portfolios to show their design work to prospective
              employers. It's one of the most important things that a designer
              should have. You can build your own portfolio using this website!
            </p>
          </section>

          <section className="content">
            <h2>Projects</h2>
            <p>
              UX design is a field that combines human factors, technology, and
              visual design. For that reason, you should show your projects
              in a way that shows your understanding of all three of these things.
            </p>
          </section>

        </article>
      </div>
    </main>
  )
}