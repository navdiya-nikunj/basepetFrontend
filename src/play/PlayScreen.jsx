import { useProfile } from "@farcaster/auth-kit";
import { getPets } from "./APIs/getPets";
import { useEffect, useState } from "react";

const PlayScreen = () => {
  const [pets, setPets] = useState([]);
  const [user, setUser] = useState(null);
  const {
    isAuthenticated,
    profile: { username, fid },
  } = useProfile();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getPets(fid);
        console.log(res);
        setUser(res);
      } catch (e) {
        console.log(e);
      }
    };

    if (!isAuthenticated) {
      fetchData();
    }
  }, []);

  // console.log(isAuthenticated, username, fid);
  if (!user) {
    return (
      <div className="w-full min-h-[100dvh]  bg-main flex justify-center items-center">
        <h1 className="font-bold md:text-4xl sm:text-3xl lg:text-5xl text-textprimary font-pixel">
          Please login to play
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[100dvh] bg-main flex justify-center items-center flex-col">
      <div className=" absolute top-2 right-2 font-pixel text-textsecondary md:text-xl sm:text-l lg:text-2xl">
        $BP: {user.basePoints}
      </div>
      <div className="w-[20%] h-[20%]">
        <img src={user.profileURL} alt="user" />
      </div>
      <h1 className="font-bold text-5xl my-3 text-textprimary max-md:text-2xl  max-sm:text-xl max-lg:text-4xl font-pixel">
        {user.fname}
      </h1>
      <div className="flex justify-center">
        {user.pets.map((pet) => (
          <div className="flex flex-col w-[15%] items-center mx-2" key={pet.id}>
            <img
              src={`https://tomato-geographical-pig-904.mypinata.cloud/ipfs/QmNsojQ3Gp2wkfVX42DNe7SZ74RYMxM5pCsEnTsq4wMDHt/${pet.pettype}.png`}
              alt="pet"
            />
            <button className="text-textprimary font-pixel">Talk</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayScreen;
