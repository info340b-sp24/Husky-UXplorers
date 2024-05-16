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
          <section className="text-center">
            <h1 className="">The Husky UXplorers <b>Official</b> Guide to UX Design</h1>
            {/* <p className="small-text">May 11, 2024</p> */}
            {/* <h4>New to UX design? <span className="purple">Congrats. You're in the right place.</span></h4> */}
          </section>

          <section className="content">
            <div className="img-left-container">
              <h2 className="my-5" style={{"width" : "50%"}}>As a designer, you need <br /><b className="purple">two things:</b></h2>

              <div className="m-5 pl-5">
                <h2>A Portfolio</h2>
                <p>
                  UX designers use portfolios to show their design work to prospective
                  employers. It's one of the most important things that a designer
                  should have. You can build your own portfolio using this website!
                </p>
              </div>
              
              <div className="my-5 pl-5">
                  <h2>Some Projects</h2>
                  <p>
                    UX design is a field that combines human factors, technology, and
                    visual design. For that reason, you should show your projects
                    in a way that shows your understanding of all three of these things.
                  </p>
                </div>
            </div>

            <div>
              <h2 className="my-5">Learn about the <b className="purple">UX design Process</b></h2>
              <img src="img/guide/process.png" alt="UX process"/>
            </div>
          </section>


        </article>
      </div>
    </main>
  )
}