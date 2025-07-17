import GraficLinear from "../components/Charts/LinearChart";
import NavBar from "../components/NavBar";
import BarChar from "../components/Charts/BarChart";

export default function GeneralStatus() {
  return (
    <div className="flex ">
      <NavBar />
      <div className=" w-full  gap-5 flex flex items-center justify-center scroll-auto">
        <BarChar />
        <GraficLinear />
      </div>
    </div>
  );
}
