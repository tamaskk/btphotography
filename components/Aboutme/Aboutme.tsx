import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ProfPicture from '../../assets/prof.webp'

function About() {
  return (
    <section
      id="about"
      className=" bg-[#e5e4e4] w-screen h-auto flex flex-col md:flex-row"
    >
      <div className="w-full md:w-1/2 h-[300px] md:h-screen flex justify-center items-center">
        <div className="w-4/6 md:w-4/6 p-4 rounded-full border-2 border-slate-500">
          <Image src={ProfPicture} className="rounded-full" alt="Profile" />
        </div>
      </div>

      <div className="w-full md:w-1/2 h-[600px] md:h-screen flex flex-col justify-center items-center p-14">
        <h1 className="font-elegant text-5xl font-bold w-full text-center mb-10">
          Szia, a nevem Bornemisza Tímea
        </h1>
        <p className="text-basic font-medium text-center p-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in
          posuere augue. Aliquam non ultricies justo. Praesent nec risus maximus
          neque porttitor rhoncus et a nibh. Vestibulum eu semper enim. Fusce
          dapibus velit interdum nisl fringilla, sed malesuada sem lobortis.
          Curabitur ultrices tristique eros et mattis. Vivamus ultricies finibus
          varius.
        </p>
      </div>
    </section>
  );
}

export default About;
