import GraficLinear from "../components/Charts/LinearChart";
import NavBar from "../components/NavBar";
import BarChar from "../components/Charts/BarChart";
import CircolBar from "../components/Charts/CircolBar";
import ColumBar from "../components/Charts/ColumBar";
import HorizontalProgress from "../components/Charts/teste";

export default function GeneralStatus() {
  return (
    <div className="flex ">
      <NavBar />
      <div className="w-full flex flex-col items-center   justify-center scroll-auto">
        <div className="w-full flex justify-around  p-3">
          <BarChar />
          <GraficLinear />
        </div>
        <div className="w-full flex justify-around  p-3">
          <ColumBar />
          <CircolBar />
          <HorizontalProgress progresso={100} />
        </div>
      </div>
    </div>
  );
}
