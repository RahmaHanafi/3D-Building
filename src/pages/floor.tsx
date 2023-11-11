import Level from "../components/level";
import { useParams } from "react-router-dom";
import image from "../../src/assets/floor.png";
// import LocMark from "../assets/locationMark.svg";

function Floor() {
  let { id } = useParams();
  return (
    <>
      <div className="flex justify-center items-center">
        <div className=" text-white text-lg bg-cyan-600 group-hover:bg-cyan-700 rounded-xl px-4 py-2 ">
          {id}
        </div>
        <Level
          color={0xffffff}
          width={window.innerWidth / 2}
          height={window.innerHeight / 1.5}
          textureUrl={image}
          // svgUrl={LocMark}
        />
      </div>
      <section className=" bg-gray-100 p-8 mt-8 h-1/4 animate-fadeInTop ">
        <h1 className=" text-cyan-700 text-xl font-bold mb-3 ">
          Floor Number {id}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At est quae
          sed, error minima nemo voluptatem deleniti, laborum ipsa facere atque,
          rerum vero repellendus debitis explicabo ex voluptatum inventore
          tenetur.
        </p>
      </section>
    </>
  );
}

export default Floor;
