import Image from "next/image";
import backGround from "../../assets/honlap-7.jpg";
import Navbar from "../Nav/Nav";

function Header() {

    const backgroundStyle = {
        backgroundImage: `url(${backGround})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }

  return (
    <section
      id="header"
      className="h-screen w-screen min-h-screen bg-cover bg-center bg-no-repeat relative z-1"
      style={backgroundStyle}
    >
        <Image alt="background image" src={backGround} layout="fill" objectFit="cover" objectPosition="center" />
      <Navbar />

      <div
        className="font-headerType font-bold text-6xl text-black w-full h-full md:h-[90%] text-center flex items-end pb-5 justify-center relative top-0 left-0 z-0"
        style={{
          letterSpacing: 4,
        }}
      >
        <span className="hover:text-white transition-all duration-300 cursor-default">
          Timi Bornemisza Photography
        </span>
      </div>
    </section>
  );
}

export default Header;
