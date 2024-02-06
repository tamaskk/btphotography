import Image from "next/image";
import { useState } from "react";
import { allPicture } from "../../lib/pics";
import ImageModal from "../ImageModal/ImageModal";

function Grid() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const openModal = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageUrl("");
  };

  return (
    <section
      id="portfolio"
      className="w-screen h-auto bg-[#e5e4e4] flex flex-col items-center justify-center pt-12"
    >
      <div className="w-full p-10 flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div
          className="group relative w-5/6 md:w-1/4 transition-all duration-200 cursor-pointer"
          onClick={() => openModal("szabadterifotozas")}
        >
          <Image
            alt="szabadteri"
            src={allPicture.szabadterifotozas[0]}
            className="w-full mb-10 md:mb-0 rounded-md"
          />
          <div className="overlay absolute border-2 border-white rounded-md w-[90%] h-[80%] md:h-[90%] top-[5%] md:top-[5%] left-[5%] transition-all duration-200 group-hover:scale-[102%]" />
          <div className="bg-white opacity-0 absolute top-0 left-0 w-full h-full group-hover:opacity-70 transition-opacity duration-200" />
          <div className="opacity-0 flex flex-col justify-center items-center text-black font-elegant text-4xl absolute top-0 left-0 w-full h-full group-hover:opacity-100 transition-opacity duration-200">
            Szabadtéri fotózás
          </div>
        </div>
        <div
          className="group relative w-5/6 md:w-1/4 transition-all duration-200 cursor-pointer"
          onClick={() => openModal("egyenifotozas")}
        >
          <Image
            alt="egyeni"
            src={allPicture.egyenifotozas[0]}
            className="w-full mb-10 md:mb-0 rounded-md"
          />
          <div className="overlay absolute border-2 border-white rounded-md w-[90%] h-[80%] md:h-[90%] top-[5%] md:top-[5%] left-[5%] transition-all duration-200 group-hover:scale-[102%]" />
          <div className="bg-white opacity-0 absolute top-0 left-0 w-full h-full group-hover:opacity-70 transition-opacity duration-200" />
          <div className="opacity-0 flex flex-col justify-center items-center text-black font-elegant text-4xl absolute top-0 left-0 w-full h-full group-hover:opacity-100 transition-opacity duration-200">
            Egyéni fotózás
          </div>
        </div>
        <div
          className="group relative w-5/6 md:w-1/4 transition-all duration-200 cursor-pointer"
          onClick={() => openModal("karacsonyifotozas")}
        >
          <Image
            alt="karacsonyi"
            src={allPicture.karacsonyifotozas[0]}
            className="w-full rounded-md"
          />
          <div className="overlay absolute border-2 border-white rounded-md w-[90%] h-[90%] md:h-[90%] top-[4.5%] md:top-[5%] left-[5%] transition-all duration-200 group-hover:scale-[102%]" />
          <div className="bg-white opacity-0 absolute top-0 left-0 w-full h-full group-hover:opacity-70 transition-opacity duration-200" />
          <div className="opacity-0 flex flex-col justify-center items-center text-black font-elegant text-4xl absolute top-0 left-0 w-full h-full group-hover:opacity-100 transition-opacity duration-200">
            Karácsonyi fotózás
          </div>
        </div>
      </div>

      <div className="w-full md:p-10 p-0 px-10 flex flex-col md:flex-row justify-center items-center md:justify-between">
        <div
          className={`animate__animated ${
            isVisible ? "animate__backInUp" : ""
          } group relative w-5/6 md:w-2/5 transition-all duration-200 cursor-pointer`}
          onClick={() => openModal("eskuvoifotozas")}
        >
          <Image
            alt="eskuvoi"
            src={allPicture.eskuvoifotozas[0]}
            className="w-full mb-10 md:mb-0 rounded-md"
          />
          <div className="overlay absolute border-2 border-white rounded-md w-[90%] h-[70%] md:h-[90%] top-[5%] md:top-[5%] left-[5%] transition-all duration-200 group-hover:scale-[102%]" />
          <div className="bg-white opacity-0 absolute top-0 left-0 w-full h-full group-hover:opacity-70 transition-opacity duration-200" />
          <div className="opacity-0 flex flex-col justify-center items-center text-black font-elegant text-4xl absolute top-0 left-0 w-full h-44 md:h-full group-hover:opacity-100 transition-opacity duration-200">
            Esküvői fotózás
          </div>
        </div>
        <div
          className="group relative w-5/6 md:w-2/5 transition-all duration-200 cursor-pointer"
          onClick={() => openModal("kismamafotozas")}
        >
          <Image
            alt="kismama"
            src={allPicture.kismamafotozas[0]}
            className="w-full rounded-md"
          />
          <div className="overlay absolute border-2 border-white rounded-md w-[90%] h-[90%] md:h-[90%] top-[5%] md:top-[5%] left-[5%] transition-all duration-200 group-hover:scale-[102%]" />
          <div className="bg-white opacity-0 absolute top-0 left-0 w-full h-full group-hover:opacity-70 transition-opacity duration-200" />
          <div className="opacity-0 flex flex-col justify-center items-center text-black font-elegant text-4xl absolute top-0 left-0 w-full h-44 md:h-full group-hover:opacity-100 transition-opacity duration-200">
            Kismama fotózás
          </div>
        </div>
      </div>

      <div className="w-full p-10 flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div
          className={`animate__animated ${
            isVisible ? "animate__backInUp" : ""
          } group relative w-5/6 md:w-1/4 transition-all duration-200 cursor-pointer`}
          onClick={() => openModal("rendezvenyfotozas")}
        >
          <Image
            alt="rendezvény"
            src={allPicture.rendezvenyfotozas[0]}
            className="w-full mb-10 md:mb-0 rounded-md"
          />
          <div className="overlay absolute border-2 border-white rounded-md w-[90%] h-[75%] md:h-[90%] top-[3%] md:top-[5%] left-[5%] transition-all duration-200 group-hover:scale-[102%]" />
          <div className="bg-white opacity-0 absolute top-0 left-0 w-full h-full group-hover:opacity-70 transition-opacity duration-200" />
          <div className="opacity-0 flex flex-col justify-center items-center text-black font-elegant text-2xl md:text-4xl absolute top-0 left-0 w-full h-44 md:h-full group-hover:opacity-100 transition-opacity duration-200">
            Rendezvény fotózás
          </div>
        </div>
        <div
          className="group relative w-5/6 md:w-1/4 transition-all duration-200 cursor-pointer"
          onClick={() => openModal("parosfotozas")}
        >
          <Image
            alt="paros"
            src={allPicture.parosfotozas[0]}
            className="w-full mb-10 md:mb-0 rounded-md"
          />
          <div className="overlay absolute border-2 border-white rounded-md w-[90%] h-[85%] md:h-[90%] top-[3%] md:top-[5%] left-[5%] transition-all duration-200 group-hover:scale-[102%]" />
          <div className="bg-white opacity-0 absolute top-0 left-0 w-full h-full group-hover:opacity-70 transition-opacity duration-200" />
          <div className="opacity-0 flex flex-col justify-center items-center text-black font-elegant text-4xl absolute top-0 left-0 w-full h-full group-hover:opacity-100 transition-opacity duration-200">
            Páros fotózás
          </div>
        </div>
        <div
          className="group relative w-5/6 md:w-1/4 transition-all duration-200 cursor-pointer"
          onClick={() => openModal("csaladifotozas")}
        >
          <Image
            alt="csaladi"
            src={allPicture.csaladifotozas[0]}
            className="w-full mb-10 md:mb-0 rounded-md"
          />
          <div className="overlay absolute border-2 border-white rounded-md w-[90%] h-[75%] md:h-[90%] top-[3%] md:top-[5%] left-[5%] transition-all duration-200 group-hover:scale-[102%]" />
          <div className="bg-white opacity-0 absolute top-0 left-0 w-full h-full group-hover:opacity-70 transition-opacity duration-200" />
          <div className="opacity-0 flex flex-col justify-center items-center text-black font-elegant text-3xl md:text-4xl absolute top-0 left-0 w-full h-44 md:h-full group-hover:opacity-100 transition-opacity duration-200">
            Családi fotozás
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ImageModal imageUrl={selectedImageUrl} onClose={closeModal} />
      )}
    </section>
  );
}

export default Grid;
