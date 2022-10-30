import '../scss/Section4.scss';


function Section4() {
  return (
    <section className="section4">
        <div className="section4__content">
            <h2>Massa tempor nec feugiat nisl pretium fusce</h2>
            <p>Pellentesque <strong>habitant</strong> morbi tristique senectus et netus et malesuada. <strong>Ipsum faucibus vitae</strong> aliquet nec ullamcorper sit amet risus nullam.<br/> 
            Dictum varius duis at consectetur <strong>lorem donec</strong> massa sapien. Massa tempor nec feugiat nisl pretium fusce. 
            </p>
            <p>Elit scelerisque mauris pellentesque?</p>
            <div className="section4__content__box" >
                <div className="section4__content__boxes">
                    <img src="Vector1.png" id="icon_vector"></img>
                    <div className="view_details">
                        <a hfref="#">View details</a>
                        <img src="icon_arrow.png" id="icon_arrow"></img>
                    </div>
                </div>
                <div className="section4__content__boxes">
                    <img src="Vector2.png" id="icon_vector"></img>
                    <div className="view_details">
                        <a hfref="#">View details</a>
                        <img src="icon_arrow.png" id="icon_arrow"></img>
                    </div>
                </div>
                <div className="section4__content__boxes">
                    <img src="Vector3.png" id="icon_vector"></img>
                    <div className="view_details">
                        <a hfref="#">View details</a>
                        <img src="icon_arrow.png" id="icon_arrow"></img>
                    </div>
                </div>
                <div className="section4__content__boxes">
                    <img src="Vector4.png" id="icon_vector"></img>
                    <div className="view_details">
                        <a hfref="#">View details</a>
                        <img src="icon_arrow.png" id="icon_arrow"></img>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Section4;