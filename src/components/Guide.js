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

            <div className="my-5 pl-5">
              <h2 className="my-5">Learn about the <b className="purple">UX design Process</b></h2>
              <img src="img/guide/process.png" alt="UX process" className="img-fluid"/>

              <div>
                <div className="container">
                  <h3>Empathize</h3>
                  <p>An essential part of the design process is to <b className="purple">research</b> as it
                  is the foundation of understanding your users and their needs, behavior, and pain points. 
                  To gain insights about our users, we must learn about or observe their experiences.
                  This can be achieved through various quanlitative and quantitative research including 
                  user interviews, surveys, A/B tests, competitive analysis, etc. The objective is to learn
                  what works in existing solutions and what users desire/need from a new solution (your product!).
                  </p>
                </div>
                <div className="container">
                  <h3>Define</h3>
                  <p>
                    Now that we have gain valuable findings about our users, we can consolidate our analysis into 
                    a powerful problem statement that encapsulates the primary problem you are designing a 
                    solution for. A basic yet powerful way to craft a problem statement is using a 
                    <b className="purple"> "How might we?"</b> statement. This frames the problem as an opportunity 
                    rather than a limitation. A basic structure to this can be “How might we [action] for [user] in order to [outcome]?”
                  </p>
                </div>
                <div className="container">
                  <h3>Ideate</h3>
                  <p>
                    Now, we begin designing to bring our solution to life. No one expects their first idea to work
                     and be perfect, so do not set your expectations too high. This process can be general where you 
                     may want to brainstorm multiple ideas with your team that address the problem through different
                     perspectives and approaches. A key tip is to visualize your ideas by developing rough sketches
                      or mind maps that connects and solidifies what users can see going through your product. 
                      <b className="purple"> Information architecture</b> is also a great form of conceptualizing the 
                      user flows. This provides a generalized overview of the content and structure of your design along 
                      with the path the user takes to interact with it.
                  </p>
                </div>
                <div className="container">
                  <h3>Prototype</h3>
                  <p>
                    As you have a blueprint to work with, you will build on this to develop a detailed and life-like model.
                    There are two types of prototypes, <b className="purple"> Low-Fidelity Prototypes</b> and 
                    <b className="purple"> High-Fidelity Prototypes</b>. Low fidelity prototypes can looks like basic wireframes
                    that emphasize on functionality and layout. On the other hand, high fidelity prototypes highlight the 
                    finer details of the design and simulates how a product will look and feel to users. Whether you are working 
                    with a website or app, it is important to include visual designs that appeal to the users but also enable
                    clear navigation of content. Another essential idea is including robust interactivity for users understand how 
                    the product is used uring testing.
                  </p>
                </div>
                <div className="container">
                  <h3>Test</h3>
                  <p>
                    We developed a solution, but does it really work? <b className="purple"> Usability testing </b>
                    ensures that the final product effectively solves the user problem. This process identifies if 
                    improvements need to be made to the initial design to allow the product to become more user-friendly. 
                    It is important to note that your design will most likely go through cycles of iteration after testing;
                     however, this leads us to the goal of creating meaningful user experiences with our designs.
                  </p>
                </div>
              </div>
            </div>
          </section>


        </article>
      </div>
    </main>
  )
}