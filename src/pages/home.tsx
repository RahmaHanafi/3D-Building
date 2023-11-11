import { useState } from "react";
import Level from "../components/level";
import { Link } from "react-router-dom";
import image from "../assets/floor.png";
// import LocMark from "../assets/locationMark.svg";

function Home() {
  // const [count, setCount] = useState(0);

  const [levels] = useState([
    {
      id: 6,
      level: 6,
      floor: (
        <Level
          // color={0x81919e}
          color={0xffffff}
          width={window.innerWidth / 2}
          height={window.innerHeight / 10}
          textureUrl={image}
          // svgUrl={LocMark}
        />
      ),
      name: "floor number 6",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores commodi doloremque aliquam, tempora esse mollitia eos possimus! Quibusdam, delectus ut, harum obcaecati aliquid tempore quae itaque non ullam, nulla ex.",
    },
    {
      id: 5,
      level: 5,
      floor: (
        <Level
          color={0xffffff}
          width={window.innerWidth / 2}
          height={window.innerHeight / 10}
          textureUrl={image}
          // svgUrl={LocMark}
        />
      ),
      name: "floor number 5",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores commodi doloremque aliquam, tempora esse mollitia eos possimus! Quibusdam, delectus ut, harum obcaecati aliquid tempore quae itaque non ullam, nulla ex.",
    },
    {
      id: 4,
      level: 4,
      floor: (
        <Level
          color={0xffffff}
          width={window.innerWidth / 2}
          height={window.innerHeight / 10}
          textureUrl={image}
          // svgUrl={LocMark}
        />
      ),
      name: "floor number 4",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores commodi doloremque aliquam, tempora esse mollitia eos possimus! Quibusdam, delectus ut, harum obcaecati aliquid tempore quae itaque non ullam, nulla ex.",
    },
    {
      id: 3,
      level: 3,
      floor: (
        <Level
          color={0xffffff}
          width={window.innerWidth / 2}
          height={window.innerHeight / 10}
          textureUrl={image}
          // svgUrl={LocMark}
        />
      ),
      name: "floor number 3",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores commodi doloremque aliquam, tempora esse mollitia eos possimus! Quibusdam, delectus ut, harum obcaecati aliquid tempore quae itaque non ullam, nulla ex.",
    },
    {
      id: 2,
      level: 2,
      floor: (
        <Level
          color={0xffffff}
          width={window.innerWidth / 2}
          height={window.innerHeight / 10}
          textureUrl={image}
          // svgUrl={LocMark}
        />
      ),
      name: "floor number 2",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores commodi doloremque aliquam, tempora esse mollitia eos possimus! Quibusdam, delectus ut, harum obcaecati aliquid tempore quae itaque non ullam, nulla ex.",
    },
    {
      id: 1,
      level: 1,
      floor: (
        <Level
          color={0xffffff}
          width={window.innerWidth / 2}
          height={window.innerHeight / 10}
          textureUrl={image}
          // svgUrl={LocMark}
        />
      ),
      name: "floor number 1",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores commodi doloremque aliquam, tempora esse mollitia eos possimus! Quibusdam, delectus ut, harum obcaecati aliquid tempore quae itaque non ullam, nulla ex.",
    },
    {
      id: 0,
      level: 0,
      floor: (
        <Level
          color={0xffffff}
          width={window.innerWidth / 2}
          height={window.innerHeight / 10}
          textureUrl={image}
          // svgUrl={LocMark}
        />
      ),
      name: "floor number 0",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores commodi doloremque aliquam, tempora esse mollitia eos possimus! Quibusdam, delectus ut, harum obcaecati aliquid tempore quae itaque non ullam, nulla ex.",
    },
  ]);

  return (
    <>
      <h2 className=" text-center text-4xl font-bold py-5 text-cyan-700">
        Building Structure
      </h2>
      <ul>
        {levels.map((level) => (
          <li key={level.id} className="mx-auto group cursor-pointer w-1/2">
            <Link to={`floor/${level.id}`}>
              <div className="flex justify-center items-center">
                <div className=" text-white text-lg bg-cyan-600 group-hover:bg-cyan-700 rounded-xl px-4 py-2 ">
                  {level.level}
                </div>
                <div>{level.floor}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
