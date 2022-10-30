import '../scss/Header.scss';

function Header() {
  return (
    <header className="header">
        <div className="header__content">
            <div className="header__menu">
                <ul className="header__menu__list">
                    <li>Overview</li>
                    <li>About</li>
                    <li>Resources</li>
                    <li>Network</li>
                    <li>Cloud</li>
                    <li>Download</li>
                    <li>Contact</li>
                </ul>
                <button className="header__contactbtn">Contact Us</button>
            </div>
            <img src="LogoHeader.png" alt="LogoFutureOne"></img>
        </div>
    </header>
  );
}

export default Header;