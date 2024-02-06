import logo from '../../assets/logo_negativ.png'
import Image from 'next/image'

function Footer() {

    return (
        <footer id='footer' className='bg-black h-auto md:h-72 text-white flex flex-col justify-between items-center md:flex-row p-10 text-lg'>
            {/* Section 1: Logo */}
            <div
                className='w-full md:w-1/4 md:h-5/6 mb-16 md:mb-0 flex items-center justify-center'>
                                <div className='max-w-fit max-h-fit'>
                <Image alt="logo" src={logo} className='w-24 h-auto' />
                </div>
            </div>
            {/* Section 2: Links */}
            <div
                className='w-full md:h-5/6 md:w-1/4 mb-16 md:mb-0 flex flex-col items-center justify-center'>
                <h1 className='mb-2 border-b border-black hover:border-white cursor-pointer transition-all duration-200'>ÁSZF</h1>
                <h1 className='mb-2 border-b border-black hover:border-white cursor-pointer transition-all duration-200'>Weboldal szabályzatok</h1>
                <h1 className='mb-2 border-b border-black hover:border-white cursor-pointer transition-all duration-200'>Foglalási szabályzatok</h1>
            </div>
            {/* Section 3: Social Media and Contact */}
            <div
                className='w-full md:h-5/6 md:w-1/4 mb-16 md:mb-0 flex flex-col items-center justify-center'>
                <a href='#' className='mb-2 border-b border-black hover:border-white cursor-pointer transition-all duration-200'>Facebook</a>
                <a href='#' className='mb-2 border-b border-black hover:border-white cursor-pointer transition-all duration-200'>Instagram</a>
                <a href='#' className='mb-2 border-b border-black hover:border-white cursor-pointer transition-all duration-200'>timibornemisza@gmail.com</a>
            </div>
            {/* Section 4: Copyright and Admin Login */}
            <div
                className='w-full md:h-5/6 md:w-1/4 flex flex-col items-center justify-center'>
                <h1 className='text-center'>C Timi Bornemisza Photography 2023</h1>
                <a href='/login' className='mb-2 border-b border-black hover:border-white cursor-pointer transition-all duration-200'>Admin login</a>
            </div>
        </footer>
    )
}

export default Footer;
