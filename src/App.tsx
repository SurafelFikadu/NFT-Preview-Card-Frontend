import avator from "./assets/images/image-avatar.png";
import equilbrium from "./assets/images/image-equilibrium.jpg";
import view from "./assets/images/icon-view.svg";
import ethereum from "./assets/images/icon-ethereum.svg";
import clock from "./assets/images/icon-clock.svg";

const App = () => {
  return (
    <div className="bg-neutral-mainBG h-lvh flex items-center justify-center text-white">
      <div className="bg-neutral-cardBG p-7 w-375 rounded-xl">
        <div className="relative hover:bg-primary-Cyan flex items-center justify-center mb-7 rounded-lg">
          <img
            className="rounded-lg hover:opacity-50 cursor-pointer "
            src={equilbrium}
            alt="equilbrium"
          />
          <img
            className="absolute opacity-0 cursor-pointer"
            src={view}
            alt="view"
          />
        </div>
        <h1 className="text-2xl hover:text-primary-Cyan mb-5 cursor-pointer">
          Equilibrium #3429
        </h1>
        <p className="text-lg mb-5 text-primary-SoftBlue">
          Our Equilibrium collection promotes <br /> brance and calm.
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={ethereum} alt="ethereum" />
            <p className="text-primary-Cyan">0.041 ETH</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={clock} alt="clock" />
            <p className="text-primary-SoftBlue">3 day left</p>
          </div>
        </div>
        <hr className="bg-neutral-line border-none h-0.5 my-5 mt-7" />
        <div className="flex items-center gap-4">
          <img
            className="size-[40px] border rounded-full"
            src={avator}
            alt="avator"
          />
          <p>
            <span className="text-primary-SoftBlue">Creation of</span>{" "}
            <span className="hover:text-primary-Cyan cursor-pointer">
              Jules Wyvern
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
