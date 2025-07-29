import BarChar from "../components/Charts/BarChar";
import CircularChart from "../components/Charts/CircularChart";
import LinearChart from "../components/Charts/LinearChart";
import Progress from "../components/Charts/ProgressBar";
import NavBar from "../components/NavBar";

export default function GeneralStatus() {
  return (
    <div className="flex gap-4">
      <NavBar />
      <div className="w-full flex flex-col gap-4">
        <div className="flex gap-44 p-4  items-center justify-center">
          <BarChar />
          <LinearChart />
        </div>
        <div className="flex gap-40 items-center justify-center">
          <Progress />
          <CircularChart />
        </div>
      </div>
    </div>
  );
}
