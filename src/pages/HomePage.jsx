import { frenchToast, pizza, plaque } from "../assets/photos";
import availableMeals from "../assets/availableMeals";
import MealItem from "../components/MealItem";

export default function HomePage() {
  return (
    <div className=" flex flex-col ">
      <ul>
        <li className="flex flex-row h-[90vh] px-20 overflow-visible">
          <img
            src={frenchToast}
            alt=""
            className="flex grow basis-1/2 shrink object-contain object-center h-[100vh]"
          />
          <div className="flex grow basis-1/2 justify-center items-center pl-10">
            <div className="flex flex-col grow justify-center">
              <h3 className="text-2xl">
                Welcome to <strong>Dizys</strong>
              </h3>
              <h1 className=" text-9xl">All-Day Breakfast Sundays</h1>
              <p className="text-2xl">
                Every Sunday, <strong>from 8am-3am</strong>
              </p>
            </div>
          </div>
        </li>
        <li className="flex flex-row h-[100vh] bg-[#28343c]">
          <div className="flex grow basis-1/2 justify-center items-center">
            <div className="flex flex-col text-white w-[66%] space-y-3">
              <h3 className="text-3xl">Who We Are</h3>
              <h2 className=" font-bold text-7xl">EST.2015</h2>
              <p className="text-xl">
                From humble beginnings, hidden away in Smeaton Grange, Dizy's
                has evolved into an island escape within The HUB of Gregory
                Hills. Transporting you to an oasis, Dizy's is the perfect place
                to spend your days.
              </p>
              <button className="bg-yellow-500 text-2xl p-5 w-[33%] text-black font-semibold">
                Read More
              </button>
            </div>
          </div>
          <div className="flex grow basis-1/2 mx-20">
            <img
              src={plaque}
              alt=""
              className="flex grow basis-1/2 shrink object-contain object-center"
            />
          </div>
        </li>
        <li className="basis-[100vh] grow flex flex-col px-20 space-y-5 my-5">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p className="text-2xl">High Quality & Locally Sourced</p>
              <h2 className="text-6xl">Our Menu</h2>
            </div>
            <div className="flex flex-col w-[25%] text-xl">
              <p>
                Designed to share or enjoy alone, our menu combines the very
                best of breafast, lunch, and dinner with a Dizy's twist on a
                fine dining experience.
              </p>
            </div>
          </div>
          {/*Menu List*/}
          <div className="flex flex-row overflow-auto max-w-[90vw]">
            <ul className="flex flex-row gap-3">
              {availableMeals.map((meals) => (
                <MealItem key={meals.id} meal={meals} />
              ))}
            </ul>
          </div>

          <button></button>
        </li>
        <li className="h-[100vh] flex flex-row">
        <div className="flex grow basis-1/2 justify-center items-center">
            <div className="flex flex-col text-white w-[66%] space-y-3">
              <h3 className="text-3xl">Who We Are</h3>
              <h2 className=" font-bold text-7xl">EST.2015</h2>
              <p className="text-xl">
                From humble beginnings, hidden away in Smeaton Grange, Dizy's
                has evolved into an island escape within The HUB of Gregory
                Hills. Transporting you to an oasis, Dizy's is the perfect place
                to spend your days.
              </p>
              <button className="bg-yellow-500 text-2xl p-5 w-[33%] text-black font-semibold">
                Read More
              </button>
            </div>
          </div>
          <div className="flex grow basis-1/2 mx-20">
            <img
              src={pizza}
              alt=""
              className="flex grow basis-1/2 shrink object-contain object-center"
            />
          </div>
        </li>
      </ul>
    </div>
  );
}
