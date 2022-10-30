import '../scss/Footer.scss';

function Footer() {
  return (
    <footer className="footer">
        <div className="footer__content">
            <div className="footer__content_info">
                <div className="information_box">
                    <div className="box">
                        <h3>Products</h3>
                        <p>Tiramisu chocolate </p>
                        <p>Pastry tart</p>
                        <p>Pllipop brownie</p>
                    </div>
                    <div className="box">
                        <h3>Collaboration</h3>
                        <p>Tiramisu chocolate </p>
                        <p>Pastry tart</p>
                        <p>Pllipop brownie</p>
                    </div>
                </div>
                <div className="socialmedia">
                    <img src="SM1.png"></img>
                    <img src="SM2.png"></img>
                    <img src="SM3.png"></img>
                    <img src="SM4.png"></img>
                    <img src="SM5.png"></img>
                </div>
            </div>
            <div className="footer__content__line"></div>
            <div className="footer__content__policy">
                <ul>
                    <li>© 2003 - 2022 Carrot cake sweet pie Sp. z o.o. All rights reserved.</li>
                    <li>Legal</li>
                    <li>Privacy policy</li>
                    <li>Proud to be Open Source</li>
                </ul>
            </div>
        </div>
    </footer>
  );
}

export default Footer;