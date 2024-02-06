import Image from "next/image";
import Email from "../../assets/email.svg";
import Instagram from "../../assets/instagram.svg";
import Phone from "../../assets/phone.svg";
import { useState } from "react";
import { Toaster, toast } from 'sonner';

function Contact() {
  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const sendContactHandler = async (e: any) => {
    e.preventDefault();

    if (contactData.name === "" || contactData.name.length < 3) {
      toast.error("Kérem adja meg a nevét!");
      return;
    }

    if (contactData.phone === "" || contactData.phone.length < 6) {
      toast.error("Kérem adja meg a telefonszámát!");
      return;
    }

    if (
      contactData.email === "" ||
      contactData.email.length < 6 ||
      !contactData.email.includes("@")
    ) {
      toast.error("Kérem adja meg az email címét!");
      return;
    }

    if (contactData.message === "" || contactData.message.length < 10) {
      toast.error("Kérem írjon üzenetet!");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("api/sendContactMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ contactData }),
      });

      const data = await res.json();

      if (!data.ok) {
        toast.error(data.message);
        setLoading(false);
      }

      setContactData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      toast.success("Sikeresen elküldve!");
      setLoading(false);
    } catch (error) {
      toast.error("Hiba történt!");
      setLoading(false);
    }
  };

  const makePhoneCall = () => {
    var phoneNumber = "+36705361510";

    // Construct the tel URI
    var telURI = "tel:" + phoneNumber;

    window.location.href = telURI;
  };

  const makeEmailTo = () => {
    const email = "timiphotography08@gmail.com";

    const emailURI = "mailto:" + email;

    window.location.href = emailURI;
  };

  const hrefToInstagram = () => {
    const href =
      "https://instagram.com/timibornemiszaphotography?igshid=MmVlMjlkMTBhMg==";
    window.location.href = href;
  };

  return (
    <section
      id="contact"
      className="w-screen h-auto flex flex-col items-center justify-center font-basic mb-24"
    >
      <Toaster
        duration={5000}
        position="top-center"
        toastOptions={{
          style: {
            color: "black",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            top: "0px",
          },
        }}
      />
      <div className="w-full px-10 md:w-full h-full flex flex-col items-center justify-center mt-10 mb-10 md:mt-48">
        <div className="flex flex-col md:px-0 items-center justify-center w-full">
          <h1 className="mb-14 text-3xl w-full text-center">
            Lépjen kapcsolatba velem!
          </h1>
          <div className="flex flex-col md:flex-row flex-wrap justify-between gap-10">
            <div className="flex flex-col justify-center items-center md:items-start">
              <label htmlFor="name" className="text-3xl mb-5">
                Név
              </label>
              <input
                id="name"
                type="text"
                placeholder="Pl: Kiss Attila"
                className="w-80 border-b-2 border-gray-700 p-3 active:outline-none focus:outline-none"
                onChange={(e) =>
                  setContactData({ ...contactData, name: e.target.value })
                }
                value={contactData.name}
              />
            </div>
            <div className="flex flex-col justify-center items-center md:items-start">
              <label htmlFor="phone" className="text-3xl mb-5">
                Telefonszám
              </label>
              <input
                id="phone"
                type="number"
                placeholder="Pl: 36-12-3456-7890 vagy 067012345678"
                className="w-80 border-b-2 border-gray-700 p-3 active:outline-none focus:outline-none"
                onChange={(e) =>
                  setContactData({ ...contactData, phone: e.target.value })
                }
                value={contactData.phone}
              />
            </div>
            <div className="flex flex-col justify-center items-center md:items-start">
              <label htmlFor="email" className="text-3xl mb-5">
                Email cím
              </label>
              <input
                id="email"
                type="email"
                placeholder="Pl: kissattila12@gmail.com"
                className="w-80 border-b-2 border-gray-700 p-3 active:outline-none focus:outline-none"
                onChange={(e) =>
                  setContactData({ ...contactData, email: e.target.value })
                }
                value={contactData.email}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-10 items-center h-auto w-auto mt-14">
            <div className="flex flex-col justify-center items-center md:items-start">
              <label htmlFor="message" className="text-3xl mb-5">
                Üzenet
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Pl: Portré fotozással kapcsolatban érdeklődnék kérem hívjon vissza."
                className="w-80 border-b-2 border-gray-700 p-3 active:outline-none focus:outline-none"
                onChange={(e) =>
                  setContactData({ ...contactData, message: e.target.value })
                }
                value={contactData.message}
              />
            </div>
            <button
              onClick={sendContactHandler}
              className="py-6 px-10 bg-[#e5e4e4] rounded-lg text-xl hover:scale-105 hover:bg-green-600 transition-all duration-200 h-fit w-fit"
              disabled={loading}
            >
              {loading ? "Küldes..." : "Elküldés"}
            </button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-full h-full flex flex-col items-center justify-center mt-5 mb-10">
        <div className="flex flex-col md:flex-row gap-2 md:gap-14 w-full justify-between md:justify-center items-center px-4 md:p-0">
          <div
            onClick={hrefToInstagram}
            className="border-white hover:border-[#e5e4e4] border-4 py-4 px-6 rounded-xl transition-all duration-300"
          >
            <Image
              src={Instagram}
              className="hover:scale-105 transition-all duration-200"
              alt="Instagram Icon"
            />
          </div>
          <div
            onClick={makeEmailTo}
            className="border-white hover:border-[#e5e4e4] border-4 py-4 px-6 rounded-xl transition-all duration-300"
          >
            <Image
              src={Email}
              className="hover:scale-105 transition-all duration-200"
              alt="Email Icon"
            />
          </div>
          <div
            onClick={makePhoneCall}
            className="border-white hover:border-[#e5e4e4] border-4 py-4 px-6 rounded-xl transition-all duration-300"
          >
            <Image
              src={Phone}
              className="hover:scale-105 transition-all duration-200"
              alt="Phone Icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
