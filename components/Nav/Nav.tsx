import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo_negativ.png';

function Navbar() {
    // State to manage mobile menu open/close
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const menuOpenHandler = () => {
        setMenuIsOpen(!menuIsOpen);
    }

    // Manage overflow based on menu open/close state
    useEffect(() => {
        if (menuIsOpen) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'visible';
        }
    }, [menuIsOpen]);

    return (
        <>
            {/* Mobile Menu */}
            <button
                id='navbutton'
                onClick={menuOpenHandler}
                className='absolute md:hidden z-50 top-5 right-5 w-16 h-16 flex flex-col justify-evenly items-center transition-all duration-1000'
            >
                {/* Mobile menu button lines */}
                <div className={`border-2 w-4/6 border-white transition-all duration-1000 ${menuIsOpen ? 'transform -translate-x-0 -rotate-45' : ''}`}></div>
                <div className={`border-2 w-4/6 border-white transition-all duration-1000 ${menuIsOpen ? 'hidden' : ''}`}></div>
                <div className={`border-2 w-4/6 border-white transition-all duration-1000 ${menuIsOpen ? 'transform translate-x-0 -translate-y-[22px] rotate-45' : ''}`}></div>
            </button>

            {/* Mobile Navigation */}
            <nav id="nav" className={`bg-black w-screen h-screen font-elegant text-xl text-white flex flex-col items-center justify-center z-500 transition-all duration-1000 ${menuIsOpen ? 'relative' : 'hidden'}`}>
                {/* Scroll to sections */}
                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    onClick={menuOpenHandler}
                    className='cursor-pointer tracking-widest text-3xl border-b-2 border-black hover:border-white transition-all duration-200 mb-14'>
                    Rólam
                </Link>
                <Link
                    to="portfolio"
                    smooth={true}
                    onClick={menuOpenHandler}
                    duration={500}
                    className='cursor-pointer tracking-widest text-3xl border-b-2 border-black hover:border-white transition-all duration-200 mb-14'>
                    Portfolió
                </Link>
                <div className='max-w-fit max-h-fit mb-14'>
                <Image alt="logo" src={logo} className='w-20 h-auto' />
                </div>
                <Link
                    to="contact"
                    smooth={true}
                    onClick={menuOpenHandler}
                    duration={500}
                    className='cursor-pointer tracking-widest text-3xl border-b-2 border-black hover:border-white transition-all duration-200 mb-14'>
                    Kapcsolat
                </Link>
                {/* Use NavLink to navigate */}
                <a href='/album' className='cursor-pointer tracking-widest text-3xl border-b-2 border-black hover:border-white transition-all duration-200 mb-14'>
                    Albumok
                </a>
            </nav>

            {/* Desktop Navigation */}
            <nav
                id="nav"
                className="hidden bg-black bg-opacity-40 w-screen h-[10%] font-elegant text-xl text-white md:flex flex-row items-center justify-evenly relative z-3">
                <div className="group transition-all duration-300">

                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className='cursor-pointer tracking-widest text-3xl transition-all duration-200'>
                    Rólam
                </Link>
                <div className='border-b-2 border-black group-hover:border-white w-0 group-hover:w-full transition-all duration-300 rounded-lg'></div>
                </div>
                <div className="group transition-all duration-300">
                <Link
                    to="portfolio"
                    smooth={true}
                    duration={500}
                    className='cursor-pointer tracking-widest text-3xl transition-all duration-200'>
                    Portfolió
                </Link>
                <div className='border-b-2 border-black group-hover:border-white w-0 group-hover:w-full transition-all duration-300'></div>
                </div>
                <div className='max-w-fit max-h-fit py-2'>
                    <Image alt="logo" src={logo} className='w-20 h-auto' />
                </div>
                <div className="group transition-all duration-300">
                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className='cursor-pointer tracking-widest text-3xl transition-all duration-200'>
                    Kapcsolat
                </Link>
                <div className='border-b-2 border-black group-hover:border-white w-0 group-hover:w-full transition-all duration-300'></div>
                </div>
                <div className="group transition-all duration-300">

                {/* Use NavLink to navigate */}
                <a href="/albumok" className='cursor-pointer tracking-widest text-3xl transition-all duration-200'>
                    Albumok
                </a>
                <div className='border-b-2 border-black group-hover:border-white w-0 group-hover:w-full transition-all duration-300'></div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
