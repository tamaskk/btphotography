import React from "react";
import { allPicture } from "@/lib/pics";
import Image from "next/image";

interface OverlayProps {
  children: React.ReactNode;
}

const Overlay = ({ children }: OverlayProps) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen max-w-screen max-h-screen overflow-hidden flex items-center justify-center flex-wrap bg-black bg-opacity-80">
      {children}
    </div>
  );
};

interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
}

const ImageModal = ({ imageUrl, onClose }: ImageModalProps) => {
  return (
    <Overlay>
      <div className="w-screen h-screen max-w-screen max-h-screen grid grid-cols-1 md:grid-cols-2 gap-2 p-5 overflow-scroll overflow-x-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={allPicture[imageUrl][0]}
            alt="Picture"
            className="w-full h-full max-w-full max-h-full object-contain"
          />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={allPicture[imageUrl][0]}
            alt="Picture"
            className="w-full h-full max-w-full max-h-full object-contain"
          />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={allPicture[imageUrl][0]}
            alt="Picture"
            className="w-full h-full max-w-full max-h-full object-contain"
          />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={allPicture[imageUrl][0]}
            alt="Picture"
            className="w-full h-full max-w-full max-h-full object-contain"
          />
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-600 text-xl w-10 h-10 bg-white rounded-full"
        >
          X
        </button>
      </div>
    </Overlay>
  );
};

export default ImageModal;
