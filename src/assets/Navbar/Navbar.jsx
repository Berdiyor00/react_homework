import React, { useState } from 'react';
import '../Navbar/Navbar.css';
import Bar from '../img/2292434-200.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openCard, setOpenCard] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const myArrImg =['https://img.freepik.com/free-vector/retro-black-moth-clipart-illustration_74855-10838.jpg?w=360&t=st=1700669970~exp=1700670570~hmac=01730841c67a3f0efcb1cd32f615de44a9837d73f678a6d17f0593c23c519630','https://img.freepik.com/free-vector/working-characters-flat-design-web-banner_1308-128001.jpg?w=360&t=st=1700670012~exp=1700670612~hmac=630f625b8c6fea2562ba982073313de079ec47500149ba83426050f79921c959','https://img.freepik.com/free-vector/contemporary-workspace-flat-composition-with-character-man-sitting-tall-computer-table-illustration_1284-64049.jpg?w=360&t=st=1700670047~exp=1700670647~hmac=2bb1ce8666c0e2296c59fef3239684e8383766c9e14642d097670565610b86e5','https://img.freepik.com/free-vector/boy-using-laptop-cartoon-character-sticker_1308-61547.jpg?w=360&t=st=1700670073~exp=1700670673~hmac=166c621ccf7c7f08f578ada65e671a7dad573ab99e953c51bf5563d69083fccf']


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Open = () => {
    setOpenCard(!openCard);
  };
  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % myArrImg.length);
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
<div>
<img src={myArrImg[currentImageIndex]} alt="" className='arryImgrender' />
            <button onClick={changeImage}>Next</button>
</div>
      </section>
    </div>
  );
};

export default Navbar;
