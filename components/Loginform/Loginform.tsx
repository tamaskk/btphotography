import React, { useRef, useState } from "react";
import backGround from "../../assets/loginbg.jpg";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import crypto from 'bcryptjs'

function Loginform() {
  // State variables to hold username, password, and login error status
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const loginHandler = async () => {
    if (email === "" || password === "") {
      alert("Please fill out all fields ❌");
      return;
    }
    console.log(email, password);
    
    setLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });

    if (result?.error) {
      alert(result.error + " ❌");
      setLoading(false);
      return;
    }

    router.push("/dashboard");
    setLoading(false);
  };

  const addhandlelr = async () => {
    const hash = crypto.hashSync(password, 10)
    console.log(password)
    console.log(hash)
  };

  return (
    <div
      className="h-screen w-screen min-h-screen px-5 bg-cover bg-center bg-no-repeat bg-opacity-60 filter inset-0 flex justify-center items-center font-basic"
      style={{ backgroundImage: `url(${backGround}` }}
    >
      <div className="w-screen md:w-1/2 h-auto bg-slate-700 bg-opacity-90 flex flex-col justify-center items-center rounded-lg">
        <div className="mt-5 mb-20">
          <div className="w-24 h-24 rounded-full bg-white"></div>
        </div>
        <h1 className="text-2xl text-white mb-5">Email cím</h1>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email címed"
          className="px-4 py-2 rounded-lg focus:outline-none bg-transparent text-white border border-white text-center mb-16"
        />
        <h1 className="text-2xl text-white mb-5">Jelszó</h1>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Jelszavad"
          className="px-4 py-2 rounded-lg focus:outline-none bg-transparent text-white border border-white text-center mb-16"
        />
        <button
          onClick={loginHandler}
          className="px-4 py-2 bg-green-400 text-black border border-green-400 hover:bg-transparent hover:text-white transition-all duration-200 rounded-lg mb-14"
        >
          Bejelentkezés
        </button>
        <button
          onClick={addhandlelr}
          className="px-4 py-2 bg-green-400 text-black border border-green-400 hover:bg-transparent hover:text-white transition-all duration-200 rounded-lg mb-14"
        >
          asdasdadsasd
        </button>
      </div>
    </div>
  );
}

export default Loginform;
