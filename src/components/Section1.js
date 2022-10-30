import '../scss/Section1.scss';


function Section1() {
  return (
    <section className="section1">
        <div className="section1__content">
            <div className="section1__content__text">
              <h1><span>Duis aute irure</span> dolor in reprehenderit</h1>
              <p>Nam at lectus urna duis convallis. Id semper risus in hendrerit gravida rutrum quisque non tellus. Elit eget gravida cum sociis natoque. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Arcu felis bibendum ut tristique et egestas. </p>
              <button>Discover now</button>
            </div>
            <div className="section1__content__photo">
              <img src="photo.png" alt="picture"></img>
            </div>
        </div>
    </section>
  );
}

export default Section1;
