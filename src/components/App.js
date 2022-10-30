import '../scss/App.scss';
import Footer from './Footer';
import Header from './Header';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';

function App() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <Section1/>
      <div className="container">
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
      <Section5 />
      <Footer />
    </>
  );
}

export default App;
