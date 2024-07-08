import { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { SignInButton, useProfile } from "@farcaster/auth-kit";
import "@farcaster/auth-kit/styles.css";

function App() {
  const navigate = useNavigate();
  const {
    isAuthenticated,
    profile: { username, fid },
  } = useProfile();

  return (
    <>
      <div className="w-full min-h-[100dvh] flex flex-col justify-center items-center bg-main text-textprimary font-pixel ">
        <div className="text-center mb-11">
          <h1 className="font-bold mb-4 text-5xl">Basepet</h1>
          <img
            src="/degenwalking.gif"
            alt="logo"
            className="w-30 h-28 mx-auto"
          />
          <h3 className="text-2xl">Farcaster based Game</h3>
        </div>
        <div className="flex justify-between items-center text-textsecondary w-[60%]  md:text-2xl sm:text-xl lg:text-4xl">
          <p
            className=" hover:text-textprimary hover:underline"
            onClick={() => {
              navigate("/doc");
            }}
          >
            Doc
          </p>
          <p
            className=" hover:text-textprimary hover:underline"
            onClick={() => {
              navigate("/play");
            }}
          >
            Play
          </p>
          <p
            className=" hover:text-textprimary hover:underline"
            onClick={() => {
              navigate("/build");
            }}
          >
            Build
          </p>
        </div>
        <div className="text-center mt-20">
          <SignInButton />
        </div>
      </div>
    </>
  );
}

export default App;
