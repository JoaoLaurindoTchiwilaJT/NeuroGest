import ApexChart from "react-apexcharts";

const option = {
  chart: {
    toolbar: { show: false },
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Out",
      "Nov",
      "Dec",
    ],
  },
  colors: ["#FFD851", "#09BB76"],
  stroke: {
    curve: "smooth" as const,
  },
  legend: {
    show: false,
  },
  markers: {
    size: 4,
  },
};

const series = [
  { name: "Entrada", data: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 100] },
  { name: "Saida", data: [5, 15, 25, 35, 45, 50, 40, 65, 75, 80, 90, 100] },
];

export default function LinearChart() {
  return (
    <div className="flex flex-col bg-white rounded-md shadow-2xl">
      <div className="p-3">
        <p className="text-xl font-semibold text-slate-400">
          Total de Entradas e Saidas
        </p>
      </div>
      <div className="w-full h-1 bg-slate-300"></div>
      <div className="w-md p-3">
        <ApexChart options={option} series={series} type="line" />
      </div>
      <div className="w-full h-1 bg-slate-300"></div>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center p-3 gap-3">
          <span className="bg-[#FFD851] h-4 w-4 rounded-4xl" />
          Entrada
        </div>
        <div className="flex items-center justify-center p-3 gap-3">
          <span className="bg-[#09BB76] h-4 w-4 rounded-4xl" />
          Saida
        </div>
      </div>
    </div>
  );
}
