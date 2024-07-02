import { useRef } from "react";

const DocScreen = () => {
  const intro = useRef(null);
  const gameOverview = useRef(null);
  const acquiringPets = useRef(null);
  const mintingPets = useRef(null);
  const petMatching = useRef(null);
  const petFeeding = useRef(null);
  const building = useRef(null);
  const gameplayFeatures = useRef(null);
  const pvpGameplay = useRef(null);
  const conclusion = useRef(null);

  return (
    <div className="w-full md:h-screen max-sm:h-[200svh] sm:h-[200svh] bg-main">
      <div className="bg-line flex justify-center">
        <div className="bg-black text-center w-16">
          <p className="font-pixel text-white">Doc</p>
        </div>
      </div>
      <div className="mt-14 w-[80%] h-[80vh] border-black mx-auto md:flex lg:flex">
        <div className="md:w-[30%]  max-sm:w-[80%] sm:w-[80%]  md:h-full border-double border-8 border-black bg-white">
          <div className="h-full w-full border-black border-2">
            <ul className="list-image-star list-inside text-textsecondary font-pixel ml-5 mt-10 md:text-xs lg:text-2xl font-semibold">
              <li
                onClick={() => {
                  intro.current.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-textprimary hover:underline"
              >
                Intro
              </li>
              <li
                onClick={() => {
                  gameOverview.current.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-textprimary hover:underline"
              >
                Game Overview
              </li>
              <ul className="list-image-disc list-inside ml-10">
                <li
                  onClick={() => {
                    acquiringPets.current.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="hover:text-textprimary hover:underline"
                >
                  Acquiring Pets & $BP
                </li>
                <li
                  onClick={() => {
                    mintingPets.current.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-textprimary hover:underline"
                >
                  Minting Pets
                </li>
                <li
                  onClick={() => {
                    petMatching.current.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-textprimary hover:underline"
                >
                  Pet Matching
                </li>
                <li
                  onClick={() => {
                    petFeeding.current.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-textprimary hover:underline"
                >
                  Pet Feeding{" "}
                </li>
                <li
                  onClick={() => {
                    building.current.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-textprimary hover:underline"
                >
                  Building
                </li>
                <li
                  onClick={() => {
                    gameplayFeatures.current.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="hover:text-textprimary hover:underline"
                >
                  Gameplay Features
                </li>
              </ul>
              <li
                onClick={() => {
                  pvpGameplay.current.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-textprimary hover:underline"
              >
                Player vs. Player (PvP) Gameplay
              </li>
              <li
                onClick={() => {
                  conclusion.current.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-textprimary hover:underline"
              >
                Conclusion
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[70%] max-sm:w-[80%] sm:w-[80%] h-full border-double border-8 border-black bg-white ">
          <div className="h-full w-full border-black border-2  font-pixel text-textsecondary pl-5 overflow-y-scroll mb-5">
            <p className="mt-3 font-bold text-3xl text-textprimary">
              Basepet Whitepaper
            </p>
            <p
              className="mt-5 text-2xl font-semibold text-textprimary"
              ref={intro}
            >
              Introduction
            </p>
            <p>
              Basepet is a pioneering Web 3.0 GameFi project hosted on Warpcast
              that seamlessly blends the charm of digital pets with the
              innovative potential of blockchain technology. By providing a
              platform where players can collect, mint, and interact with unique
              pets, Basepet fosters a vibrant community-driven ecosystem. With a
              strong emphasis on user-generated content, engaging gameplay, and
              decentralized rewards, Basepet offers players multiple
              opportunities to immerse themselves in a rewarding and interactive
              experience.
            </p>
            <p
              className="mt-5 text-2xl font-semibold text-textprimary"
              ref={gameOverview}
            >
              Game Overview
            </p>
            <p
              className="mt-2 font-semibold text-textprimary"
              ref={acquiringPets}
            >
              Acquiring Pets & $BP
            </p>
            <p className="mt-3">
              Players can acquire pets by tipping specific amounts of tokens:
            </p>
            <ul className="list-disc list-inside mt-3">
              <li>69 $degen tokens for one pet.</li>
              <li>199 $farther tokens for one pet.</li>
              <li>690 $ham/tn100x tokens for one pet.</li>
            </ul>
            <p className="mt-3">
              Players can accumulate tips to receive up to 10 pets per wallet.
              Token conversion rates are as follows:
            </p>
            <ul className="list-disc list-inside mt-3">
              <li>1 $degen = 10 $BP</li>
              <li>3 $farther = 10 $BP</li>
              <li>10 $ham/tn100x = 10 $BPs.</li>
            </ul>
            <p
              className="mt-5 text-2xl font-semibold text-textprimary"
              ref={mintingPets}
            >
              Minting Pets
            </p>
            <p>
              After the ITO (Initial Tipping Offering), players who have tipped
              can mint their pets on OpenSea or directly on the Basepet website.
              Those who have previously tipped are eligible for free mints. New
              players can also mint pets using a small amount of ETH. Once
              minted, these pets become NFTs.
            </p>
            <p
              className="mt-5 text-2xl font-semibold text-textprimary"
              ref={petMatching}
            >
              Pet Matching
            </p>
            <p className="mt-2 font-semibold text-textprimary">Matching</p>
            <p>
              Players can match their pets with their friend's pets to enhance
              social interactions within the game.
            </p>
            <p>
              Matched pets can engage in future special activities, earning
              additional rewards.
            </p>
            <p
              className="mt-5 text-2xl font-semibold text-textprimary"
              ref={petFeeding}
            >
              Pet Feeding
            </p>
            <p className="mt-2 font-semibold text-textprimary">Chest</p>
            <p>
              For the first two weeks, players can raffle in our frame and share
              the frame to receive either an apple, a hamburger, or a pizza.
              Each pet requires:
            </p>
            <ul className="list-disc list-inside mt-3">
              <li>3 apples/day</li>
              <li>2 hamburgers/day</li>
              <li>1 pizza/day</li>
            </ul>
            <p className="mt-2 font-semibold text-textprimary">
              Tipping to Feed Friends' Pets
            </p>
            <p>
              Players need to feed their friends' pets with a pizza (worth 10
              $BP) by tipping the Basepet account on Warpcast with 1 $degen.
              This action rewards both the feeder and the pet owner with $BP:
            </p>
            <ul className="list-disc list-inside mt-3">
              <li>
                Feeding a friend's pet: 5 $BP for both the feeder and the
                friend.
              </li>
              <li>
                Feeding matched friends' pets: 10 $BP for both the feeder and
                the friend.
              </li>
            </ul>
            <p className="mt-2 font-semibold text-textprimary">
              Talking to Your Pet
            </p>
            <p>
              Players can interact with their pets through AI-powered chat,
              creating a unique bond and enhancing the gameplay experience.
              Players can ask their pets about their needs, moods, or daily news
              on Warpcast.
            </p>
            <p
              className="mt-5 text-2xl font-semibold text-textprimary"
              ref={building}
            >
              Building
            </p>
            <ul className="list-disc list-inside mt-3">
              <li>
                <span className="text-textprimary">Community Chat:</span> A
                real-time chat feature where players can propose suggestions,
                collaborate, and engage with the community.
              </li>
              <li>
                <span className="text-textprimary">
                  User-Generated Content:
                </span>
                Players can submit GIF art of pet accessories, pets, or pet
                houses. Creators earn a 30% of the profit generated by their
                content. The reward will be distributed in $BP and they can
                transfer to $degen.
              </li>
              <li>
                <span className="text-textprimary">
                  Game Creation Platform:
                </span>{" "}
                Basepet empowers players to become builders by allowing them to
                create their own games within the platform. This feature:
              </li>
              <ul className="list-disc list-inside ml-5">
                <li>
                  <span className="text-textprimary">
                    Increases Interactivity:
                  </span>
                  Builders can design unique games, enhancing the Warpcast
                  frames and providing engaging experiences for players.
                </li>

                <li>
                  <span className="text-textprimary">Earnings:</span>
                  Builders earn revenue based on the success and engagement of
                  their games, with Basepet taking a minimal 3% profit. This
                  model encourages innovation and growth within the community.
                </li>
              </ul>
            </ul>
            <p
              className="mt-5 text-2xl font-semibold text-textprimary"
              ref={gameplayFeatures}
            >
              Gameplay Features
            </p>
            <p className="mt-2 font-semibold text-textprimary">Play Games</p>
            <ul className="list-disc list-inside mt-3">
              <li>
                <span className="text-textprimary">Blindbox Game:</span>Players
                use $BP to participate in a blindbox game, earning valuable game
                assets such as pet houses and accessories. Each click costs 1
                $BP. Once players obtain game assets as NFTs, they can either
                burn these NFTs to get $degen or showcase them on their page.
                Players could share frames and earn 30% of all profit (profit =
                total $BP spent - total $BP worth of game asset).
              </li>
              <ul className="list-disc list-inside ml-5">
                <li>Game Assets and Hierarchy </li>
                <ul className=" list-disc list-inside ml-5">
                  <li>To be announced soon. </li>
                </ul>
                <li>Probability and Reward Mechanics </li>
                <ul className=" list-disc list-inside ml-5">
                  <li>To be announced soon. </li>
                </ul>
              </ul>
            </ul>
            <p className="mt-2 font-semibold text-textprimary">
              Travel to New Places
            </p>
            <ul className="list-disc list-inside mt-3">
              <li>
                <span className="text-textprimary">Friend's place:</span>
                Players can host events in their houses, inviting others to join
                and have fun. Details will be announced soon.
              </li>
              <li>
                <span className="text-textprimary">Pet Hospital:</span> Pets
                occasionally need to visit the hospital (e.g., they become sick)
                and spend 10 $degen to recover. Creators of hospital designs
                earn 30% of the earnings whenever someone visits.
              </li>
              <li>
                <span className="text-textprimary">Pet Theme Park:</span>
                Pets need to visit the theme park occasionally to maintain their
                happiness and excitement levels. Players who create theme park
                designs earn 30% of the earnings when others visit.
              </li>
            </ul>
            <p
              className="mt-5 text-2xl font-semibold text-textprimary"
              ref={pvpGameplay}
            >
              Player vs. Player (PvP) Gameplay
            </p>
            <p className="mt-2 font-semibold text-textprimary">Overview</p>
            <p>
              Basepet introduces an exciting PvP feature where players can
              battle their pets equipped with weapons, adding a competitive
              aspect to the game and encouraging strategic play and
              collaboration.
            </p>
            <p className="mt-2 font-semibold text-textprimary">Pet Leveling</p>
            <ul className="list-disc list-inside mt-3">
              <li>
                <span className="text-textprimary">Spend $Degen:</span>
                Players can spend $degen tokens to level up their pets,
                increasing their health, strength, and magic.
              </li>
              <li>
                <span className="text-textprimary">Weapons:</span> Equipping
                pets with weapons enhances their abilities, such as increased
                health, strength, or magic. Some weapons may also unlock special
                abilities.
              </li>
            </ul>
            <p className="mt-2 font-semibold text-textprimary">PvP Modes</p>
            <ul className="list-disc list-inside mt-3">
              <li>
                <span className="text-textprimary">Solo Fight:</span>
                Pets can engage in one-on-one battles.
              </li>
              <li>
                <span className="text-textprimary">Team Battle:</span> Players
                can team up with a matched friend's pet, combining their
                strengths for increased power.
              </li>
            </ul>
            <p className="mt-2 font-semibold text-textprimary">
              Battle Mechanics
            </p>
            <ul className="list-disc list-inside mt-3">
              <li>
                <span className="text-textprimary">Increased Power:</span>
                Forming a team boosts the pet's overall power, making them
                stronger in battles.
              </li>
              <li>
                <span className="text-textprimary">Winning Rewards:</span>
                The winner of the battle receives some of the loser's weapons as
                spoils.
              </li>
              <li>
                <span className="text-textprimary">Burning Weapons:</span>
                Players can choose to burn acquired weapon NFTs to receive
                $degen tokens as a reward.
              </li>
            </ul>
            <p className="mt-2 font-semibold text-textprimary">
              Strategic Elements
            </p>
            <ul className="list-disc list-inside mt-3">
              <li>
                <span className="text-textprimary">Choosing Weapons:</span>
                Select the best weapons to complement your pet's abilities and
                boost their stats.
              </li>
              <li>
                <span className="text-textprimary">Team Formation:</span>
                Strategically team up with friends to maximize your chances of
                victory.
              </li>
            </ul>
            <p
              className="mt-5 text-2xl font-semibold text-textprimary"
              ref={conclusion}
            >
              Conclusion
            </p>
            <p>
              Basepet aims to enrich the Warpcast platform by offering a unique,
              rewarding, and engaging experience for players. Through
              community-driven content, innovative gameplay features, and
              continuous development, Basepet is set to become a leading project
              in the Web 3.0 gaming ecosystem. By empowering players as creators
              and participants, Basepet fosters a dynamic and interactive
              environment where creativity and collaboration thrive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocScreen;
