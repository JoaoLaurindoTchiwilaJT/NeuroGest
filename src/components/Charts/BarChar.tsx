import ApexChart from "react-apexcharts";

const option = {
  chart: { toolbar: { show: false } },
  xaxis: { categories: ["2015", "2016", "2017", "2018"] },
  legend: { show: false },
  colors: ["#4990FF", "#FF2866", "#09BB76", "#FFD851"],
};

const series = [
  { name: "Stock", data: [10, 40, 20, 60] },
  { name: "Entrada", data: [40, 50, 10, 30] },
  { name: "Saida", data: [20, 60, 10, 5] },
  { name: "Perdas", data: [20, 30, 10, 50] },
];

export default function BarChar() {
  return (
    <div className="flex flex-col bg-white rounded-md shadow-2xl">
      <div className="p-3">
        <p className="text-xl text-slate-400">Status Geral de medicamentos</p>
      </div>
      <div className="w-full h-1 bg-slate-300"></div>
      <div className="w-md p-3">
        <ApexChart options={option} series={series} type="bar" />
      </div>
      <div className="w-full h-1 bg-slate-300"></div>
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-3 p-3">
          <span className="rounded-2xl bg-[#4990FF] h-4 w-4"></span>
          <p>Stock</p>
        </div>
        <div className="flex items-center gap-3 p-3">
          <span className="rounded-2xl bg-[#FFD851] h-4 w-4"></span>
          <p>Entrada</p>
        </div>
        <div className="flex items-center gap-3 p-3">
          <span className="rounded-2xl bg-[#09BB76] h-4 w-4"></span>
          <p>Saida</p>
        </div>
        <div className="flex items-center gap-3 p-3">
          <span className="rounded-2xl bg-[#FF2866] h-4 w-4"></span>
          <p>Stock</p>
        </div>
      </div>
    </div>
  );
}
