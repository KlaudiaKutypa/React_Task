import '../scss/Section3.scss';


function Section3() {
  return (
    <section className="section3">
        <div className="section3__content">
            <div className="section3__content__boxleft">
                <div id="line"></div>
                <h3>Bibendum at varius vel pharetra vel turpis nunc eget lorem.</h3>
            </div>
            <div className="section3__content__boxright">
                <img src="quote 2.png" alt="quote"></img>
                <p>Aliquam purus sit amet luctus venenatis lectus magna. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Tortor vitae purus faucibus ornare. Neque viverra justo nec ultrices. Nisl nunc mi ipsum faucibus. Tristique risus nec feugiat in fermentum. Elit duis tristique sollicitudin nibh sit amet commodo nulla.</p>
                <img src="quote 1.png" alt="quote"  id="closing_quote"></img>
                <p id="signature">Faucibus Vitae, Office Assistant</p>
                <img src="logo.png" alt="logo"></img>
            </div>
        </div>

    </section>
  );
}

export default Section3;