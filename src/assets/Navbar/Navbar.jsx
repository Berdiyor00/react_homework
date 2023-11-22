import React, { useState } from 'react';
import '../Navbar/Navbar.css';
import Bar from '../img/2292434-200.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openCard, setOpenCard] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Open = () => {
    setOpenCard(!openCard);
  };

  return (
    <div>
      <header>
        <nav>
          <div className="Navbar__Wrapper">
            <div className="Navbar__logo">
              <h1>B</h1>
            </div>
            <div className={`Navbar__menu__ul ${isMenuOpen ? 'open' : 'closed'}`}>
              <ul className={`Navbar__menu${isMenuOpen ? 'open' : 'closed'}`}>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <button onClick={toggleMenu}>
              <img src={Bar} alt="" className="Bar__img" />
            </button>
          </div>
        </nav>
      </header>

      <section>
        <div className="container">
          <p className={openCard ? 'back' : ''}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore maxime, sint et modi eveniet totam culpa
            quod unde eligendi, amet qui tempora voluptas veniam aliquid quisquam! Repellat, magnam, ut at inventore
            sapiente dolores voluptatibus laudantium quod magni tempore ab commodi modi quis dolor eaque harum ea aperiam
            est ullam consequuntur accusantium officia veritatis? Totam delectus eligendi sapiente nisi ex id ipsam aut
            facilis distinctio modi aliquid dolorum asperiores repellat sequi non soluta voluptates, eius accusantium,
            facere repellendus laboriosam deserunt? Dolorem veniam iure cupiditate omnis. Facilis quisquam sed ex non natus
            blanditiis quaerat voluptatibus voluptate dolor tempora tenetur, hic ullam enim possimus similique soluta
            quasi dicta eligendi? Modi quisquam quidem saepe quia similique ratione quaerat aliquam explicabo voluptas
            at, eos, praesentium eius beatae totam dolorem dolor officiis tempore quam voluptatum iste illo! Vel iste
            quo animi excepturi eveniet quibusdam explicabo amet labore velit ipsam? Neque, iusto. Labore repellat
            numquam natus accusantium qui. Laudantium suscipit delectus dolorem ab explicabo eos sunt eum sit ipsum aut
            a hic commodi natus, error assumenda ex ipsa debitis praesentium ad nam veniam, expedita iusto facere.
            Repudiandae hic tempora voluptatibus velit ipsam soluta a minima voluptates iste, earum debitis quod, labore
            rerum aperiam maxime eveniet explicabo? Repudiandae.
          </p>
          <button onClick={Open} className='Open__Text'> Click Me</button>
        </div>

      </section>
    </div>
  );
};

export default Navbar;
