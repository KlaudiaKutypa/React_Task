import '../scss/Section2.scss';


function Section2() {
  return (
    <section className="section2">
        <h2>Lacinia quis vel eros tempor orci.</h2>
        <div className="section2__content">
            <div className="section2__content__box">
                <div>
                <h3><span>01.</span><br/>Arcu non odio</h3>
                <p>Sapien nec sagittis aliquam malesuada bibendum. Tempor nec feugiat nisl pretium.</p>
                </div>
                
                <div className="section2__content__box__img">
                <img src="Line 80.png" alt="line" id="line"></img>
                <img src="Ellipse 35.png" alt="ellipse" id="elipse"></img>
                </div>
            </div>
            <div className="section2__content__box">
                <h3><span>02.</span><br/>Eget gravida cum sociis</h3>
                <img src="plus.png" alt="plus"></img>
            </div>
            <div className="section2__content__box">
                <h3><span>03.</span><br/>Massa massa ultricies</h3>
                <img src="plus.png" alt="plus"></img>
            </div>
        </div>
    </section>
  );
}

export default Section2;