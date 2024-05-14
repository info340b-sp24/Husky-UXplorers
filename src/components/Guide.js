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
          <section>
            <h1>Guide to UX design</h1>
            <p className="small-text">May 11, 2024</p>
            <p>Are you new to UX design? This is a great place to start!</p>
          </section>

          <section className="content">
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